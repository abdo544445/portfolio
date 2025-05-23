import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaResearchgate, FaGraduationCap } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--color-foreground);
  color: var(--color-text);
  padding: 4rem 0 2rem;
  border-top: 1px solid var(--color-border);
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--color-primary);
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const ExternalLink = styled.a`
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: var(--color-text-light);
  font-size: 1.5rem;
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const FooterBottom = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
  color: var(--color-text-light);
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Abdo Alatrash</FooterHeading>
          <p>Machine Learning Engineer & Data Scientist specializing in physics-informed ML approaches.</p>
          <SocialLinks>
            <SocialIcon href="https://github.com/abdo544445" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/abdo-alatrash" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/abdoalatrash" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://researchgate.net/profile/Abdo-Alatrash" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate">
              <FaResearchgate />
            </SocialIcon>
            <SocialIcon href="https://scholar.google.com/citations?user=abdo-alatrash" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <FaGraduationCap />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Navigation</FooterHeading>
          <FooterNav>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/research">Research</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterNav>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Research Interests</FooterHeading>
          <FooterNav>
            <ExternalLink href="#physics-ml">Physics-Informed ML</ExternalLink>
            <ExternalLink href="#data-visualization">Data Visualization</ExternalLink>
            <ExternalLink href="#nlp">Natural Language Processing</ExternalLink>
            <ExternalLink href="#deep-learning">Deep Learning</ExternalLink>
          </FooterNav>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact</FooterHeading>
          <p>Feel free to reach out for collaborations or inquiries.</p>
          <ExternalLink href="mailto:abdoforanything1@gmail.com">abdoforanything1@gmail.com</ExternalLink>
          <ExternalLink href="tel:+201119173529" style={{display: 'block', marginTop: '0.5rem'}}>+20 1119173529</ExternalLink>
          <ExternalLink href="https://wa.me/201119173529" style={{display: 'block', marginTop: '0.5rem'}}>WhatsApp</ExternalLink>
          <p style={{marginTop: '0.5rem'}}>Remote / Cairo, Egypt</p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Abdo Alatrash. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
