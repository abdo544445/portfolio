import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--color-foreground);
  box-shadow: var(--shadow-sm);
  z-index: 100;
  transition: background-color var(--transition-base);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    color: var(--color-primary);
  }
  
  &:hover {
    color: var(--color-text);
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? 'var(--color-primary)' : 'var(--color-text)'};
  font-weight: ${props => props.$isActive ? '600' : '400'};
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
    transform: scaleX(${props => props.$isActive ? 1 : 0});
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-foreground);
  padding: 2rem;
  z-index: 99;
`;

const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? 'var(--color-primary)' : 'var(--color-text)'};
  font-weight: ${props => props.$isActive ? '600' : '400'};
  font-size: 1.25rem;
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/research', label: 'Research' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          Abdo<span>Alatrash</span>
        </Logo>
        
        <Nav>
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <NavLink 
                  to={item.path}
                  $isActive={location.pathname === item.path}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          </ThemeToggle>
          
          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </div>
      </HeaderContent>
      
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavList>
              {navItems.map((item) => (
                <li key={item.path}>
                  <MobileNavLink
                    to={item.path}
                    $isActive={location.pathname === item.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </MobileNavLink>
                </li>
              ))}
            </MobileNavList>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
