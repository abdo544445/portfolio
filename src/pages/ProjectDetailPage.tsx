import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaArrowLeft } from 'react-icons/fa';
import { useEffect } from 'react';

const PageContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
  }
`;

const ProjectHeaderContent = styled.div`
  flex: 1;
`;

const ProjectCategory = styled.p`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--color-foreground);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-weight: 500;
  transition: all var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
`;

const PrimaryLink = styled(ProjectLink)`
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  
  &:hover {
    background-color: var(--color-tertiary);
    border-color: var(--color-tertiary);
    color: white;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
`;

const ProjectContent = styled.div`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
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

// Sample project data - in a real app, this would come from Firebase
const projects = [
  {
    id: '1',
    title: 'Physics-Informed Neural Networks',
    slug: 'physics-informed-nn',
    description: 'Implementation of PINNs for solving partial differential equations with domain knowledge constraints.',
    longDescription: 'A comprehensive implementation of Physics-Informed Neural Networks (PINNs) that combines deep learning techniques with physical laws encoded as differential equations. This project demonstrates how to solve complex physics problems by training neural networks to respect known physical constraints.',
    category: 'ML & AI',
    technologies: ['PyTorch', 'Physics', 'Neural Networks', 'PDEs'],
    imageUrl: '/images/project1.jpg',
    githubUrl: 'https://github.com/abdo544445/physics-informed-nn',
    content: [
      {
        title: 'Project Overview',
        text: 'Physics-Informed Neural Networks (PINNs) represent a novel approach to solving differential equations by incorporating physical laws directly into neural network training. This project implements PINNs for solving various types of PDEs with applications in fluid dynamics, heat transfer, and quantum mechanics.'
      },
      {
        title: 'Technical Implementation',
        text: 'The implementation uses PyTorch to create neural network architectures that are trained with both data-driven loss and physics-informed loss components. The physics-informed component enforces the neural network to respect underlying physical principles expressed as differential equations.'
      },
      {
        title: 'Results & Impact',
        text: 'The implemented PINNs demonstrate excellent accuracy and convergence properties, especially in scenarios with limited training data. The approach has been validated against analytical solutions for several benchmark problems in fluid dynamics and heat transfer.'
      }
    ]
  },
  {
    id: '2',
    title: 'Interactive Data Dashboard',
    slug: 'data-dashboard',
    description: 'Interactive visualization dashboard for exploring and analyzing scientific datasets.',
    longDescription: 'A comprehensive data visualization platform built to help scientists and researchers explore complex datasets intuitively. The dashboard offers interactive charts, graphs, and statistical analysis tools specifically designed for scientific data.',
    category: 'Data Visualization',
    technologies: ['React', 'D3.js', 'Flask', 'Pandas'],
    imageUrl: '/images/project2.jpg',
    githubUrl: 'https://github.com/abdo544445/data-dashboard',
    liveUrl: 'https://data-dashboard.alatrash.me',
    content: [
      {
        title: 'Project Overview',
        text: 'The Interactive Data Dashboard is a web-based visualization platform designed to help researchers and data scientists explore and analyze complex datasets. It provides a user-friendly interface for creating customized visualizations and running basic statistical analyses without requiring programming knowledge.'
      },
      {
        title: 'Technical Implementation',
        text: 'The dashboard is built with a React frontend that leverages D3.js for interactive visualizations. The backend is implemented in Flask, which processes data using Pandas and NumPy. The application supports various file formats including CSV, Excel, and JSON, and can connect to SQL databases.'
      },
      {
        title: 'Features & Capabilities',
        text: 'Key features include interactive charts (scatter plots, line charts, heatmaps), statistical summaries, data filtering, and the ability to export visualizations. The dashboard also supports real-time collaboration and sharing of visualizations among research teams.'
      }
    ]
  },
  {
    id: '3',
    title: 'ML Research Platform',
    slug: 'ml-research-platform',
    description: 'Collaborative platform for machine learning researchers to share and reproduce experiments.',
    longDescription: 'A collaborative platform that enables machine learning researchers to share experiments, replicate results, and build upon each other\'s work. The platform tackles the reproducibility crisis in machine learning research by providing standardized environments and detailed logging.',
    category: 'Web Application',
    technologies: ['TypeScript', 'Next.js', 'Firebase', 'TensorFlow.js'],
    imageUrl: '/images/project3.jpg',
    githubUrl: 'https://github.com/abdo544445/ml-research-platform',
    content: [
      {
        title: 'Project Overview',
        text: 'The ML Research Platform addresses the reproducibility crisis in machine learning research by providing a collaborative environment where researchers can share experiments, replicate results, and build upon each other\'s work. It streamlines the process of documenting, sharing, and reproducing machine learning experiments.'
      },
      {
        title: 'Technical Implementation',
        text: 'The platform is built with Next.js and TypeScript for the frontend, with Firebase providing authentication, database, and storage services. It integrates TensorFlow.js to allow running certain models directly in the browser, while also supporting integration with external compute resources for more intensive workloads.'
      },
      {
        title: 'Impact & Benefits',
        text: 'This platform helps researchers save time, improve collaboration, and increase the credibility of their research by ensuring experiments are fully documented and reproducible. It also provides valuable metrics on model performance and resource utilization, helping to benchmark and optimize machine learning algorithms.'
      }
    ]
  }
];

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <PageContainer>
        <BackButton to="/projects">
          <FaArrowLeft /> Back to Projects
        </BackButton>
        <h1>Project Not Found</h1>
        <p>The project you are looking for doesn't exist or has been moved.</p>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <BackButton to="/projects">
        <FaArrowLeft /> Back to Projects
      </BackButton>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectHeader>
          <ProjectImage>
            <img src={project.imageUrl} alt={project.title} />
          </ProjectImage>
          
          <ProjectHeaderContent>
            <ProjectCategory>{project.category}</ProjectCategory>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.longDescription || project.description}</ProjectDescription>
            
            <ProjectTags>
              {project.technologies.map(tech => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ProjectTags>
            
            <ProjectLinks>
              {project.githubUrl && (
                <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub Repository
                </ProjectLink>
              )}
              {project.liveUrl && (
                <PrimaryLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaLink /> Live Demo
                </PrimaryLink>
              )}
            </ProjectLinks>
          </ProjectHeaderContent>
        </ProjectHeader>
        
        <ProjectContent>
          {project.content && project.content.map((section, index) => (
            <div key={index} style={{ marginBottom: '3rem' }}>
              <SectionTitle>{section.title}</SectionTitle>
              <p style={{ lineHeight: '1.8' }}>{section.text}</p>
            </div>
          ))}
        </ProjectContent>
      </motion.div>
    </PageContainer>
  );
};

export default ProjectDetailPage;
