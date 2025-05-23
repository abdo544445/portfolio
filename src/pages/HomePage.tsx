import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Hero Section
const HeroSection = styled.section`
  padding: 6rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 8rem 0 5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -10%;
    width: 60%;
    height: 70%;
    background: radial-gradient(circle, rgba(43, 107, 237, 0.1) 0%, transparent 70%);
    z-index: -1;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 50%;
    height: 60%;
    background: radial-gradient(circle, rgba(144, 105, 237, 0.1) 0%, transparent 70%);
    z-index: -1;
    border-radius: 50%;
  }
`;

const HeroContent = styled.div`
  max-width: var(--max-width);
  width: 100%;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    align-items: center;
  }
`;

const HeroText = styled.div``;

const SubHeading = styled.p`
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  span {
    color: var(--color-primary);
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: var(--color-tertiary);
      opacity: 0.3;
      z-index: -1;
    }
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.8;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background-color: var(--color-primary);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-tertiary);
    color: white;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--color-text);
  padding: 0.875rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  border: 1px solid var(--color-border);
  transition: background-color var(--transition-base), border-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
    border-color: var(--color-text-light);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--color-text);
  background-color: var(--color-foreground);
  box-shadow: var(--shadow-sm);
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform var(--transition-base), background-color var(--transition-base);
  
  &:hover {
    transform: translateY(-3px);
    background-color: var(--color-primary);
    color: white;
  }
`;

const HeroImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
  }
`;

// Skills Section
const SkillsSection = styled.section`
  padding: 4rem 0;
  background-color: var(--color-foreground);
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: var(--color-primary);
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background-color: var(--color-background);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--color-primary);
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Skill = styled.div``;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillLevel = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-light);
`;

const ProgressBar = styled.div`
  height: 6px;
  width: 100%;
  background-color: var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
`;

const Progress = styled.div<{ $width: number }>`
  height: 100%;
  width: ${props => props.$width}%;
  background-color: var(--color-primary);
  border-radius: var(--radius-sm);
  transition: width 1.5s ease-out;
`;

// Featured Projects Section
const ProjectsSection = styled.section`
  padding: 5rem 0;
`;

const ProjectsContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectCategory = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  font-size: 0.875rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Research Interests Section
const ResearchSection = styled.section`
  padding: 5rem 0;
  background-color: var(--color-foreground);
`;

const ResearchContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ResearchCard = styled.div`
  background-color: var(--color-background);
  border-left: 4px solid var(--color-tertiary);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
`;

const ResearchTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-tertiary);
`;

const ResearchDescription = styled.p`
  color: var(--color-text-light);
  line-height: 1.6;
`;

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <SubHeading>Machine Learning Engineer & Data Scientist</SubHeading>
            <Heading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Building <span>intelligent</span> solutions through data & code
            </Heading>
            <Description>
              I'm Abdo Alatrash, a machine learning engineer and data scientist focused on creating innovative solutions with physics-informed machine learning approaches. I build web applications that bring data science to life.
            </Description>
            <CTAButtons>
              <PrimaryButton to="/projects">Explore Projects</PrimaryButton>
              <SecondaryButton to="/contact">Get in Touch</SecondaryButton>
            </CTAButtons>
            <SocialLinks>
              <SocialLink href="https://github.com/abdo544445" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/abdo-alatrash" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </SocialLink>
              <SocialLink href="https://wa.me/201119173529" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} />
              </SocialLink>
            </SocialLinks>
          </HeroText>
          <HeroImage
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/images/hero-image.png" alt="Abdo Alatrash - ML Engineer" />
          </HeroImage>
        </HeroContent>
      </HeroSection>
      
      <SkillsSection>
        <SectionHeading>Technical Skills</SectionHeading>
        <SkillsContainer>
          <SkillCategories>
            <SkillCategory>
              <CategoryTitle>
                Machine Learning & AI
              </CategoryTitle>
              <SkillList>
                <Skill>
                  <SkillHeader>
                    <SkillName>Deep Learning</SkillName>
                    <SkillLevel>Advanced</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={90} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>TensorFlow / PyTorch</SkillName>
                    <SkillLevel>Advanced</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={85} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>Computer Vision</SkillName>
                    <SkillLevel>Intermediate</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={75} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>NLP</SkillName>
                    <SkillLevel>Intermediate</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={70} />
                  </ProgressBar>
                </Skill>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <CategoryTitle>
                Data Science
              </CategoryTitle>
              <SkillList>
                <Skill>
                  <SkillHeader>
                    <SkillName>Python</SkillName>
                    <SkillLevel>Expert</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={95} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>Pandas / NumPy</SkillName>
                    <SkillLevel>Expert</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={90} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>Data Visualization</SkillName>
                    <SkillLevel>Advanced</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={85} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>Statistical Analysis</SkillName>
                    <SkillLevel>Advanced</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={80} />
                  </ProgressBar>
                </Skill>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <CategoryTitle>
                Web Development
              </CategoryTitle>
              <SkillList>
                <Skill>
                  <SkillHeader>
                    <SkillName>JavaScript / TypeScript</SkillName>
                    <SkillLevel>Advanced</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={85} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>React</SkillName>
                    <SkillLevel>Advanced</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={80} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>Node.js</SkillName>
                    <SkillLevel>Intermediate</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={75} />
                  </ProgressBar>
                </Skill>
                <Skill>
                  <SkillHeader>
                    <SkillName>Firebase</SkillName>
                    <SkillLevel>Intermediate</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress $width={70} />
                  </ProgressBar>
                </Skill>
              </SkillList>
            </SkillCategory>
          </SkillCategories>
        </SkillsContainer>
      </SkillsSection>
      
      <ProjectsSection>
        <SectionHeading>Featured Projects</SectionHeading>
        <ProjectsContainer>
          <ProjectsGrid>
            <ProjectCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src="/images/project1.jpg" alt="Physics-Informed Neural Networks" />
              </ProjectImage>
              <ProjectContent>
                <ProjectCategory>Machine Learning</ProjectCategory>
                <ProjectTitle>Physics-Informed Neural Networks</ProjectTitle>
                <ProjectDescription>
                  Implementation of PINNs for solving partial differential equations with domain knowledge constraints.
                </ProjectDescription>
                <ProjectTags>
                  <Tag>PyTorch</Tag>
                  <Tag>Physics</Tag>
                  <Tag>Neural Networks</Tag>
                  <Tag>PDEs</Tag>
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink href="https://github.com/abdo544445/physics-informed-nn" target="_blank" rel="noopener noreferrer">
                    View Code
                  </ProjectLink>
                  <ProjectLink href="/projects/physics-informed-nn" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
            
            <ProjectCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src="/images/project2.jpg" alt="Data Visualization Dashboard" />
              </ProjectImage>
              <ProjectContent>
                <ProjectCategory>Data Visualization</ProjectCategory>
                <ProjectTitle>Interactive Data Dashboard</ProjectTitle>
                <ProjectDescription>
                  Interactive visualization dashboard for exploring and analyzing scientific datasets.
                </ProjectDescription>
                <ProjectTags>
                  <Tag>React</Tag>
                  <Tag>D3.js</Tag>
                  <Tag>Flask</Tag>
                  <Tag>Pandas</Tag>
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink href="https://github.com/abdo544445/data-dashboard" target="_blank" rel="noopener noreferrer">
                    View Code
                  </ProjectLink>
                  <ProjectLink href="https://data-dashboard.alatrash.me" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
            
            <ProjectCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src="/images/project3.jpg" alt="ML Research Platform" />
              </ProjectImage>
              <ProjectContent>
                <ProjectCategory>Web Application</ProjectCategory>
                <ProjectTitle>ML Research Platform</ProjectTitle>
                <ProjectDescription>
                  Collaborative platform for machine learning researchers to share and reproduce experiments.
                </ProjectDescription>
                <ProjectTags>
                  <Tag>TypeScript</Tag>
                  <Tag>Next.js</Tag>
                  <Tag>Firebase</Tag>
                  <Tag>TensorFlow.js</Tag>
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink href="https://github.com/abdo544445/ml-research-platform" target="_blank" rel="noopener noreferrer">
                    View Code
                  </ProjectLink>
                  <ProjectLink href="/projects/ml-research-platform" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          </ProjectsGrid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <SecondaryButton to="/projects">View All Projects</SecondaryButton>
          </div>
        </ProjectsContainer>
      </ProjectsSection>
      
      <ResearchSection>
        <SectionHeading>Research Interests</SectionHeading>
        <ResearchContainer>
          <ResearchGrid>
            <ResearchCard>
              <ResearchTitle>Physics-Informed Machine Learning</ResearchTitle>
              <ResearchDescription>
                Exploring how to incorporate physics principles and domain knowledge into machine learning models to improve accuracy, reduce data requirements, and ensure physical consistency in predictions.
              </ResearchDescription>
            </ResearchCard>
            
            <ResearchCard>
              <ResearchTitle>Scientific Data Visualization</ResearchTitle>
              <ResearchDescription>
                Developing interactive and intuitive visualizations for complex scientific datasets to aid in understanding patterns, anomalies, and insights that might be missed in standard analysis.
              </ResearchDescription>
            </ResearchCard>
            
            <ResearchCard>
              <ResearchTitle>Neural Differential Equations</ResearchTitle>
              <ResearchDescription>
                Research into neural networks that can learn and solve differential equations, combining the flexibility of deep learning with the mathematical rigor of physics-based modeling.
              </ResearchDescription>
            </ResearchCard>
            
            <ResearchCard>
              <ResearchTitle>ML for Scientific Discovery</ResearchTitle>
              <ResearchDescription>
                Applying machine learning techniques to accelerate scientific discovery processes, create predictive models, and assist in hypothesis generation and validation.
              </ResearchDescription>
            </ResearchCard>
          </ResearchGrid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <SecondaryButton to="/research">Explore Research</SecondaryButton>
          </div>
        </ResearchContainer>
      </ResearchSection>
    </>
  );
};

export default HomePage;
