import React, { useState } from 'react';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  VideoConference,
} from '@livekit/components-react';
import '@livekit/components-styles';
import axios from 'axios';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { Phone } from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
`;

const RoomContainer = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const ConnectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
`;

const ConnectButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusText = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const InfoBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 500px;
`;

const ErrorMessage = styled.div`
  background: rgba(255, 0, 0, 0.2);
  color: white;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0;
  border: 1px solid rgba(255, 0, 0, 0.5);
`;

const LiveKitVoiceInterface = () => {
  const [token, setToken] = useState('');
  const [serverUrl, setServerUrl] = useState('');
  const [roomName, setRoomName] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const [participantName, setParticipantName] = useState('');

  const handleConnect = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      // Get authentication token from localStorage or context
      const authToken = localStorage.getItem('authToken');
      
      // Request LiveKit token from backend
      const response = await axios.post(
        '/api/livekit/token',
        {
          roomName: roomName || undefined,
          participantName: participantName || undefined,
        },
        {
          headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
        }
      );

      if (response.data.success) {
        setToken(response.data.token);
        setServerUrl(response.data.url);
        setRoomName(response.data.room);
        setParticipantName(response.data.name);
        setIsConnected(true);
        toast.success('Connected to Eva HR Assistant!');
      } else {
        throw new Error(response.data.message || 'Failed to connect');
      }
    } catch (err) {
      console.error('Connection error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to connect to HR Assistant');
      toast.error('Failed to connect to HR Assistant');
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setToken('');
    setServerUrl('');
    setIsConnected(false);
    toast.success('Disconnected from HR Assistant');
  };

  return (
    <Container>
      <Header>
        <Title>🎙️ Eva - HR Voice Assistant</Title>
        <Subtitle>Your AI-powered HR support with voice and video</Subtitle>
      </Header>

      <RoomContainer>
        {!isConnected ? (
          <ConnectContainer>
            <InfoBox>
              <h3 style={{ marginTop: 0 }}>Welcome to Eva HR Assistant</h3>
              <p>Connect to start your voice conversation with Eva, your personal HR assistant.</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '15px' }}>
                Features:
              </p>
              <ul style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                <li>Ask about leave balances and policies</li>
                <li>Submit leave requests</li>
                <li>Get benefits information</li>
                <li>Payroll and payment queries</li>
                <li>Report workplace issues</li>
                <li>Contact HR team members</li>
              </ul>
            </InfoBox>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <ConnectButton onClick={handleConnect} disabled={isConnecting}>
              <Phone size={20} />
              {isConnecting ? 'Connecting...' : 'Connect to Eva'}
            </ConnectButton>

            {isConnecting && <StatusText>Establishing connection...</StatusText>}
          </ConnectContainer>
        ) : (
          <LiveKitRoom
            video={true}
            audio={true}
            token={token}
            serverUrl={serverUrl}
            connect={true}
            onDisconnected={handleDisconnect}
            style={{ height: '100%' }}
          >
            <VideoConference />
            <RoomAudioRenderer />
          </LiveKitRoom>
        )}
      </RoomContainer>
    </Container>
  );
};

export default LiveKitVoiceInterface;

