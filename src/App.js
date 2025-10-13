import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import io from 'socket.io-client';

// Components
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import VoiceInterface from './components/VoiceInterface';
import LiveKitVoiceInterface from './components/LiveKitVoiceInterface';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// Services
import { authService } from './services/authService';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      authService.getProfile()
        .then(userData => {
          setUser(userData);
        })
        .catch(error => {
          console.error('Failed to get user profile:', error);
          localStorage.removeItem('token');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      // Initialize socket connection
      const newSocket = io(process.env.REACT_APP_SERVER_URL || 'http://localhost:5000', {
        auth: {
          token: localStorage.getItem('token')
        }
      });

      newSocket.on('connect', () => {
        console.log('Connected to server');
      });

      newSocket.on('disconnect', () => {
        console.log('Disconnected from server');
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [user]);

  const handleLogin = (userData, token) => {
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    if (socket) {
      socket.close();
      setSocket(null);
    }
  };

  if (loading) {
    return (
      <AppContainer>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          color: 'white',
          fontSize: '1.2rem'
        }}>
          Loading EvolTech HR Assistant...
        </div>
      </AppContainer>
    );
  }

  return (
    <Router>
      <AppContainer>
        <Header user={user} onLogout={handleLogout} />
        <MainContent>
          <Routes>
            <Route 
              path="/login" 
              element={
                user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                user ? <Dashboard user={user} socket={socket} /> : <Navigate to="/login" />
              } 
            />
            <Route 
              path="/chat" 
              element={
                user ? <ChatInterface user={user} socket={socket} /> : <Navigate to="/login" />
              } 
            />
            <Route 
              path="/voice" 
              element={
                user ? <VoiceInterface user={user} socket={socket} /> : <Navigate to="/login" />
              } 
            />
            <Route 
              path="/livekit" 
              element={
                user ? <LiveKitVoiceInterface user={user} /> : <Navigate to="/login" />
              } 
            />
            <Route 
              path="/" 
              element={<Navigate to={user ? "/dashboard" : "/login"} />} 
            />
          </Routes>
        </MainContent>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </AppContainer>
    </Router>
  );
}

export default App;
