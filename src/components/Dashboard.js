import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MessageCircle, Mic, FileText, Video } from 'lucide-react';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(Link)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background: ${props => props.color || '#667eea'};
  color: white;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  margin: 0;
  color: #666;
  line-height: 1.5;
`;

const StatsContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

function Dashboard({ user }) {
  const features = [
    {
      title: '💬 Chat Assistant',
      description: 'Get instant text-based HR assistance powered by FREE Groq AI. Ask about leave, policies, benefits, and more!',
      icon: MessageCircle,
      color: '#667eea',
      link: '/chat',
      badge: 'FREE AI'
    },
    {
      title: '🎤 Voice Agent',
      description: 'Talk to Eva with real-time voice and video powered by LiveKit and FREE AI (Groq + Deepgram + Edge TTS)',
      icon: Video,
      color: '#f093fb',
      link: '/livekit',
      badge: 'FREE AI + LIVE'
    },
    {
      title: 'Voice Assistant',
      description: 'Speak naturally with our voice-enabled HR assistant',
      icon: Mic,
      color: '#764ba2',
      link: '/voice'
    },
    {
      title: 'HR Policies',
      description: 'Access company policies, benefits, and procedures',
      icon: FileText,
      color: '#4facfe',
      link: '/policies'
    }
  ];

  const stats = [
    { label: 'Active Sessions', value: '45' },
    { label: 'Queries Resolved', value: '1,250' },
    { label: 'Response Time', value: '2.3s' },
    { label: 'Satisfaction', value: '4.7/5' }
  ];

  return (
    <div>
      <StatsContainer>
        <h2 style={{ margin: '0 0 1rem 0', color: '#333' }}>
          Welcome back, {user?.name || user?.email}!
        </h2>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
          Here's what's happening with your HR assistant today:
        </p>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.value}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsContainer>

      <DashboardContainer>
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card key={index} to={feature.link}>
              <CardIcon color={feature.color}>
                <IconComponent size={32} />
              </CardIcon>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          );
        })}
      </DashboardContainer>

      <div style={{ 
        marginTop: '2rem', 
        padding: '2rem', 
        background: 'rgba(255, 255, 255, 0.95)', 
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>Quick Actions</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Submit Leave Request
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#764ba2',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            View Benefits
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#f093fb',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Company Policies
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
