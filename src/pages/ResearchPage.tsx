import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ResearchCard = styled(motion.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background-color: var(--color-tertiary);
  }
`;

const ResearchTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  color: var(--color-text);
`;

const ResearchDescription = styled.p`
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const PublicationsSection = styled.section`
  margin-top: 5rem;
`;

const PublicationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const PublicationCard = styled(motion.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
`;

const PublicationTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const PublicationMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const PublicationMetaItem = styled.span`
  color: var(--color-text-light);
  
  strong {
    color: var(--color-text);
  }
`;

const PublicationAbstract = styled.p`
  color: var(--color-text-light);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`;

const PublicationLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const PublicationLink = styled.a`
  color: var(--color-primary);
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Sample data - in a real app, this would come from Firebase
const researchInterests = [
  {
    id: '1',
    title: 'Physics-Informed Machine Learning',
    description: 'Exploring how to incorporate physics principles and domain knowledge into machine learning models to improve accuracy, reduce data requirements, and ensure physical consistency in predictions.',
  },
  {
    id: '2',
    title: 'Scientific Data Visualization',
    description: 'Developing interactive and intuitive visualizations for complex scientific datasets to aid in understanding patterns, anomalies, and insights that might be missed in standard analysis.',
  },
  {
    id: '3',
    title: 'Neural Differential Equations',
    description: 'Research into neural networks that can learn and solve differential equations, combining the flexibility of deep learning with the mathematical rigor of physics-based modeling.',
  },
  {
    id: '4',
    title: 'ML for Scientific Discovery',
    description: 'Applying machine learning techniques to accelerate scientific discovery processes, create predictive models, and assist in hypothesis generation and validation.',
  },
];

const publications = [
  {
    id: '1',
    title: 'Physics-Informed Neural Networks for Solving Partial Differential Equations in Fluid Dynamics',
    authors: ['Abdo Alatrash', 'Jane Smith', 'David Johnson'],
    journal: 'Journal of Computational Physics',
    year: 2023,
    abstract: 'This paper presents a novel approach to solving complex fluid dynamics problems using physics-informed neural networks. We demonstrate that incorporating known physical laws into the neural network architecture significantly improves accuracy and convergence compared to traditional numerical methods.',
    pdfUrl: '#',
    doiUrl: 'https://doi.org/10.xxxx/xxxxx',
  },
  {
    id: '2',
    title: 'Interactive Visualization Techniques for Large-Scale Scientific Datasets',
    authors: ['Abdo Alatrash', 'Michael Chen'],
    conference: 'IEEE Visualization Conference',
    year: 2022,
    abstract: 'We introduce a set of novel interactive visualization techniques designed specifically for exploring and analyzing large-scale scientific datasets. Our approach combines dimensionality reduction with interactive filtering to enable intuitive exploration of complex data structures.',
    pdfUrl: '#',
  },
];

const ResearchPage = () => {
  return (
    <PageContainer>
      <SectionTitle>Research <span>Interests</span></SectionTitle>
      <SectionDescription>
        My research focuses on the intersection of machine learning, physics, and scientific computing,
        with an emphasis on developing models that incorporate domain knowledge and physical constraints.
      </SectionDescription>
      
      <ResearchGrid>
        {researchInterests.map((interest, index) => (
          <ResearchCard
            key={interest.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ResearchTitle>{interest.title}</ResearchTitle>
            <ResearchDescription>{interest.description}</ResearchDescription>
            <Link to="/contact" style={{ color: 'var(--color-primary)' }}>
              Discuss collaboration →
            </Link>
          </ResearchCard>
        ))}
      </ResearchGrid>
      
      <PublicationsSection>
        <SectionTitle>Publications</SectionTitle>
        <SectionDescription>
          Selected academic papers and conference presentations related to my research areas.
        </SectionDescription>
        
        <PublicationsGrid>
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PublicationTitle>{publication.title}</PublicationTitle>
              <PublicationMeta>
                <PublicationMetaItem>
                  <strong>Authors:</strong> {publication.authors.join(', ')}
                </PublicationMetaItem>
                {publication.journal && (
                  <PublicationMetaItem>
                    <strong>Journal:</strong> {publication.journal}
                  </PublicationMetaItem>
                )}
                {publication.conference && (
                  <PublicationMetaItem>
                    <strong>Conference:</strong> {publication.conference}
                  </PublicationMetaItem>
                )}
                <PublicationMetaItem>
                  <strong>Year:</strong> {publication.year}
                </PublicationMetaItem>
              </PublicationMeta>
              <PublicationAbstract>{publication.abstract}</PublicationAbstract>
              <PublicationLinks>
                {publication.pdfUrl && (
                  <PublicationLink href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                    PDF
                  </PublicationLink>
                )}
                {publication.doiUrl && (
                  <PublicationLink href={publication.doiUrl} target="_blank" rel="noopener noreferrer">
                    DOI
                  </PublicationLink>
                )}
              </PublicationLinks>
            </PublicationCard>
          ))}
        </PublicationsGrid>
      </PublicationsSection>
    </PageContainer>
  );
};

export default ResearchPage;
