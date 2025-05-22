import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FaHome, 
  FaLaptopCode, 
  FaCogs, 
  FaFlask, 
  FaNewspaper, 
  FaEnvelope 
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  height: 100%;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 60px; /* Header height */
    left: 0;
    width: 250px;
    bottom: 0;
    background: var(--color-foreground);
    z-index: 99;
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
    box-shadow: ${props => props.$isOpen ? 'var(--shadow-lg)' : 'none'};
  }
`;

const Logo = styled.div`
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
  
  h2 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin: 0;
  }
  
  p {
    font-size: 0.875rem;
    color: var(--color-text-light);
    margin: 0;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  flex: 1;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  color: var(--color-text);
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
  
  &.active {
    background-color: var(--color-primary);
    color: white;
    
    .icon {
      color: white;
    }
  }
  
  .icon {
    color: var(--color-text-light);
    transition: color var(--transition-base);
  }
`;

const menuItems = [
  { path: '/admin', label: 'Dashboard', icon: <FaHome className="icon" /> },
  { path: '/admin/projects', label: 'Projects', icon: <FaLaptopCode className="icon" /> },
  { path: '/admin/skills', label: 'Skills', icon: <FaCogs className="icon" /> },
  { path: '/admin/research', label: 'Research', icon: <FaFlask className="icon" /> },
  { path: '/admin/blog', label: 'Blog', icon: <FaNewspaper className="icon" /> },
  { path: '/admin/contact', label: 'Messages', icon: <FaEnvelope className="icon" /> },
];

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Listen for toggle events from the header component
  useEffect(() => {
    const handleToggleSidebar = (event: Event) => {
      const customEvent = event as CustomEvent;
      setIsOpen(customEvent.detail.isOpen);
    };
    
    window.addEventListener('toggleSidebar', handleToggleSidebar);
    
    return () => {
      window.removeEventListener('toggleSidebar', handleToggleSidebar);
    };
  }, []);
  
  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <SidebarWrapper $isOpen={isOpen}>
      <Logo>
        <h2>Portfolio Admin</h2>
        <p>Manage your content</p>
      </Logo>
      
      <Menu>
        {menuItems.map((item) => (
          <MenuItem 
            key={item.path} 
            to={item.path}
            end={item.path === '/admin'}
          >
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </SidebarWrapper>
  );
};

export default AdminSidebar;
