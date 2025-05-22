import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding-top: var(--header-height);
`;

const MainLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default MainLayout;
