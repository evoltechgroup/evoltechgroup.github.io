import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Mic, MicOff, Volume2, VolumeX, Send, Bot, User } from 'lucide-react';
import toast from 'react-hot-toast';

const VoiceContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  height: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const VoiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
`;

const VoiceMessages = styled.div`
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
`;

const AudioPlayer = styled.audio`
  width: 100%;
  margin-top: 0.5rem;
`;

const VoiceControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #f0f0f0;
`;

const RecordingButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$recording ? '#ff4757' : '#667eea'};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusText = styled.div`
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: 1rem;
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ControlButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active ? '#667eea' : '#f8f9fa'};
  color: ${props => props.$active ? 'white' : '#666'};
  border: 2px solid ${props => props.$active ? '#667eea' : '#e0e0e0'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$active ? '#5a67d8' : '#667eea'};
    color: white;
    border-color: ${props => props.$active ? '#5a67d8' : '#667eea'};
  }
`;

function VoiceInterface({ user, socket }) {
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize voice session
    const initializeSession = async () => {
      try {
        const response = await fetch('/api/voice/session/start', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        const data = await response.json();
        if (data.success) {
          setSessionId(data.data.sessionId);
          addMessage('bot', 'Hello! I\'m your voice-enabled HR Assistant. Click the microphone to start speaking.');
        }
      } catch (error) {
        console.error('Failed to initialize voice session:', error);
        toast.error('Failed to start voice session');
      }
    };

    initializeSession();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (sender, content, audioUrl = null, timestamp = new Date()) => {
    setMessages(prev => [...prev, {
      id: Date.now() + Math.random(),
      sender,
      content,
      audioUrl,
      timestamp
    }]);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        await processVoiceMessage(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setAudioChunks(chunks);
      setIsRecording(true);
      toast.success('Recording started');
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast.error('Unable to access microphone');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      toast.success('Recording stopped');
    }
  };

  const processVoiceMessage = async (audioBlob) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.wav');
      formData.append('sessionId', sessionId);

      const response = await fetch('/api/voice/message', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // Add user message (transcript)
        if (data.data.transcript) {
          addMessage('user', data.data.transcript);
        }

        // Add bot response
        addMessage('bot', data.data.message, data.data.audioResponse);

        if (data.data.needsHumanHandoff) {
          toast.success('I\'ve connected you with a human agent for assistance.');
        }
      } else {
        addMessage('bot', 'Sorry, I couldn\'t process your voice message. Please try again.');
        toast.error(data.message || 'Failed to process voice message');
      }
    } catch (error) {
      console.error('Error processing voice message:', error);
      addMessage('bot', 'Sorry, I\'m having trouble processing your voice. Please try again.');
      toast.error('Network error');
    }
  };

  const playAudio = (audioData) => {
    if (audioData) {
      const audioBlob = new Blob([audioData], { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setCurrentAudio(audioUrl);
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    // This would control system audio in a real implementation
    toast.info('Audio controls would be implemented here');
  };

  return (
    <VoiceContainer>
      <VoiceHeader>
        <Bot size={32} color="#764ba2" />
        <div>
          <h2>Voice HR Assistant</h2>
          <p>Speak naturally to get HR assistance</p>
        </div>
      </VoiceHeader>

      <VoiceMessages>
        {messages.map((message) => (
          <Message key={message.id} $isUser={message.sender === 'user'}>
            <MessageAvatar $isUser={message.sender === 'user'}>
              {message.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
            </MessageAvatar>
            <div>
              <MessageContent $isUser={message.sender === 'user'}>
                {message.content}
              </MessageContent>
              {message.audioUrl && message.sender === 'bot' && (
                <AudioPlayer
                  controls
                  src={message.audioUrl}
                  style={{ marginTop: '0.5rem' }}
                />
              )}
              <div style={{ 
                fontSize: '0.75rem', 
                color: '#666', 
                marginTop: '0.25rem',
                textAlign: message.sender === 'user' ? 'right' : 'left'
              }}>
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </Message>
        ))}
        
        <div ref={messagesEndRef} />
      </VoiceMessages>

      <VoiceControls>
        <RecordingButton
          onClick={isRecording ? stopRecording : startRecording}
          $recording={isRecording}
          disabled={!sessionId}
        >
          {isRecording ? <MicOff size={32} /> : <Mic size={32} />}
        </RecordingButton>

        <StatusText>
          {isRecording 
            ? 'Recording... Click again to stop' 
            : 'Click microphone to start speaking'
          }
        </StatusText>

        <ControlButtons>
          <ControlButton onClick={toggleMute}>
            <Volume2 size={16} />
            Audio Settings
          </ControlButton>
        </ControlButtons>
      </VoiceControls>

      {currentAudio && (
        <audio
          ref={audioRef}
          src={currentAudio}
          autoPlay
          onEnded={() => {
            setIsPlaying(false);
            URL.revokeObjectURL(currentAudio);
            setCurrentAudio(null);
          }}
        />
      )}
    </VoiceContainer>
  );
}

export default VoiceInterface;
