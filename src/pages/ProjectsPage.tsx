import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 800px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background-color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-foreground)'};
  color: ${props => props.$active ? 'white' : 'var(--color-text)'};
  border: 1px solid ${props => props.$active ? 'var(--color-primary)' : 'var(--color-border)'};
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-border)'};
  }
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

// Sample project data - in a real app, this would come from Firebase
const sampleProjects = [
  {
    id: '1',
    title: 'Physics-Informed Neural Networks',
    slug: 'physics-informed-nn',
    description: 'Implementation of PINNs for solving partial differential equations with domain knowledge constraints.',
    category: 'ml-ai',
    technologies: ['PyTorch', 'Physics', 'Neural Networks', 'PDEs'],
    imageUrl: '/images/project1.jpg',
    githubUrl: 'https://github.com/abdo544445/physics-informed-nn',
  },
  {
    id: '2',
    title: 'Interactive Data Dashboard',
    slug: 'data-dashboard',
    description: 'Interactive visualization dashboard for exploring and analyzing scientific datasets.',
    category: 'data-viz',
    technologies: ['React', 'D3.js', 'Flask', 'Pandas'],
    imageUrl: '/images/project2.jpg',
    githubUrl: 'https://github.com/abdo544445/data-dashboard',
    liveUrl: 'https://data-dashboard.alatrash.me'
  },
  {
    id: '3',
    title: 'ML Research Platform',
    slug: 'ml-research-platform',
    description: 'Collaborative platform for machine learning researchers to share and reproduce experiments.',
    category: 'web-app',
    technologies: ['TypeScript', 'Next.js', 'Firebase', 'TensorFlow.js'],
    imageUrl: '/images/project3.jpg',
    githubUrl: 'https://github.com/abdo544445/ml-research-platform',
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml-ai', label: 'ML & AI' },
    { id: 'data-viz', label: 'Data Visualization' },
    { id: 'web-app', label: 'Web Applications' },
    { id: 'research', label: 'Research' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(project => project.category === activeFilter);
  
  return (
    <PageContainer>
      <SectionTitle>My <span>Projects</span></SectionTitle>
      <SectionDescription>
        A collection of my work in machine learning, data science, and web development,
        with a focus on physics-informed approaches and scientific applications.
      </SectionDescription>
      
      <FilterContainer>
        {filters.map(filter => (
          <FilterButton
            key={filter.id}
            $active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FilterContainer>
      
      <ProjectsGrid>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProjectImage>
              <img src={project.imageUrl} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectCategory>{filters.find(f => f.id === project.category)?.label || project.category}</ProjectCategory>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.technologies.map(tech => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ProjectTags>
              <ProjectLinks>
                {project.githubUrl && (
                  <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </ProjectLink>
                )}
                {project.liveUrl && (
                  <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </ProjectLink>
                )}
                <ProjectLink as={Link} to={`/projects/${project.slug}`}>
                  Learn More
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PageContainer>
  );
};

export default ProjectsPage;
