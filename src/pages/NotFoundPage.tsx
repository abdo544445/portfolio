import styled from 'styled-components';

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

const NotFoundPage = () => {
  return (
    <PageContainer>
      <SectionTitle>404 - <span>Page Not Found</span></SectionTitle>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <p>Please check the URL or navigate back to the homepage.</p>
    </PageContainer>
  );
};

export default NotFoundPage;
