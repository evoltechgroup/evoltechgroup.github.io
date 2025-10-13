import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MessageCircle, Mic, Home, LogOut, User } from 'lucide-react';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

function Header({ user, onLogout }) {
  const location = useLocation();

  if (!user) {
    return (
      <HeaderContainer>
        <Logo>
          <MessageCircle size={32} />
          EvolTech HR Assistant
        </Logo>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <Logo>
        <MessageCircle size={32} />
        EvolTech HR Assistant
      </Logo>

      <Navigation>
        <NavLink to="/dashboard" $active={location.pathname === '/dashboard'}>
          <Home size={20} />
          Dashboard
        </NavLink>
        <NavLink to="/chat" $active={location.pathname === '/chat'}>
          <MessageCircle size={20} />
          Chat
        </NavLink>
        <NavLink to="/voice" $active={location.pathname === '/voice'}>
          <Mic size={20} />
          Voice
        </NavLink>
      </Navigation>

      <UserSection>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <User size={20} />
          {user.name || user.email}
        </div>
        <LogoutButton onClick={onLogout}>
          <LogOut size={20} />
          Logout
        </LogoutButton>
      </UserSection>
    </HeaderContainer>
  );
}

export default Header;


