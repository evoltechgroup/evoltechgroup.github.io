import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Send, User, Bot, Loader } from 'lucide-react';
import toast from 'react-hot-toast';

const ChatContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  height: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  ${props => props.$isUser ? 'flex-direction: row-reverse;' : ''}
`;

const MessageAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$isUser ? '#667eea' : '#764ba2'};
  color: white;
  flex-shrink: 0;
`;

const MessageContent = styled.div`
  max-width: 70%;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  background: ${props => props.$isUser ? '#667eea' : '#f8f9fa'};
  color: ${props => props.$isUser ? 'white' : '#333'};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  white-space: ${props => props.$isUser ? 'nowrap' : 'pre-wrap'};
  overflow-wrap: break-word;
  word-break: break-word;
  display: block;
  line-height: 1.4;
`;

const MessageTime = styled.div`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.25rem;
  text-align: ${props => props.$isUser ? 'right' : 'left'};
`;

const ChatInput = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #f0f0f0;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SendButton = styled.button`
  padding: 1rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #5a67d8;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-style: italic;
`;

function ChatInterface({ user, socket }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initialize chat session
    const initializeSession = async () => {
      try {
        const response = await fetch('/api/chat/session/start', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // Temporarily removed Authorization header for debugging
          }
        });

        const data = await response.json();
        if (data.success) {
          setSessionId(data.data.sessionId);
          addMessage('bot', 'Hello! I\'m the EvolTech HR Assistant. How can I help you today?');
        }
      } catch (error) {
        console.error('Failed to initialize session:', error);
        toast.error('Failed to start chat session');
      }
    };

    initializeSession();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (sender, content, timestamp = new Date()) => {
    console.log('Adding message:', { sender, content, type: typeof content, isArray: Array.isArray(content) });
    setMessages(prev => [...prev, {
      id: Date.now() + Math.random(),
      sender,
      content: typeof content === 'string' ? content : String(content),
      timestamp
    }]);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading || !sessionId) return;

    const message = inputMessage.trim();
    console.log('Sending message:', message, 'Type:', typeof message, 'Length:', message.length);
    setInputMessage('');
    setIsLoading(true);

    // Add user message
    addMessage('user', message);

    try {
      const response = await fetch('/api/chat/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Temporarily removed Authorization header for debugging
        },
        body: JSON.stringify({
          message,
          sessionId
        })
      });

      const data = await response.json();

      if (data.success) {
        addMessage('bot', data.data.message);
        
        if (data.data.needsHumanHandoff) {
          toast.success('I\'ve connected you with a human agent for assistance.');
        }
      } else {
        addMessage('bot', 'Sorry, I encountered an error. Please try again.');
        toast.error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage('bot', 'Sorry, I\'m having trouble connecting. Please try again.');
      toast.error('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <Bot size={32} color="#667eea" />
        <div>
          <h2>Chat with HR Assistant</h2>
          <p>Ask me anything about HR policies, benefits, or procedures</p>
        </div>
      </ChatHeader>

      <ChatMessages>
        {messages.map((message) => (
          <Message key={message.id} $isUser={message.sender === 'user'}>
            <MessageAvatar $isUser={message.sender === 'user'}>
              {message.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
            </MessageAvatar>
            <div>
              <MessageContent $isUser={message.sender === 'user'}>
                {Array.isArray(message.content) ? message.content.join('') : String(message.content)}
              </MessageContent>
              <MessageTime $isUser={message.sender === 'user'}>
                {new Date(message.timestamp).toLocaleTimeString()}
              </MessageTime>
            </div>
          </Message>
        ))}
        
        {isLoading && (
          <Message>
            <MessageAvatar>
              <Bot size={20} />
            </MessageAvatar>
            <TypingIndicator>
              <Loader size={16} className="animate-spin" />
              Assistant is typing...
            </TypingIndicator>
          </Message>
        )}
        
        <div ref={messagesEndRef} />
      </ChatMessages>

      <ChatInput>
        <Input
          value={inputMessage}
          onChange={(e) => {
            console.log('Input change:', e.target.value, 'Type:', typeof e.target.value);
            setInputMessage(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          disabled={isLoading}
        />
        <SendButton onClick={sendMessage} disabled={isLoading || !inputMessage.trim()}>
          <Send size={20} />
        </SendButton>
      </ChatInput>
    </ChatContainer>
  );
}

export default ChatInterface;
