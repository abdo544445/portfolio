import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import styled from 'styled-components';
import { FaSun, FaMoon, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  color: var(--color-text);
  margin: 0;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const Username = styled.span`
  color: var(--color-text);
  font-weight: 500;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const AdminHeader = () => {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Dispatch a custom event to notify the sidebar
    const event = new CustomEvent('toggleSidebar', {
      detail: { isOpen: !isMobileMenuOpen }
    });
    window.dispatchEvent(event);
  };
  
  const getInitials = (name: string) => {
    if (!name) return 'A';
    return name.charAt(0).toUpperCase();
  };
  
  return (
    <HeaderWrapper>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <FaBars />
        </MobileMenuButton>
        <Title>Admin Dashboard</Title>
      </div>
      
      <Controls>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
        </Button>
        
        <UserInfo>
          {user && (
            <>
              <Avatar>{getInitials(user.displayName || '')}</Avatar>
              <Username>{user.displayName || 'Admin'}</Username>
            </>
          )}
        </UserInfo>
        
        <Button onClick={signOut}>
          <FaSignOutAlt size={18} />
        </Button>
      </Controls>
    </HeaderWrapper>
  );
};

export default AdminHeader;
