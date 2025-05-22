import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AdminHeader from '../ui/AdminHeader';
import AdminSidebar from '../ui/AdminSidebar';

const AdminLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
  min-height: 100vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "content";
  }
`;

const Header = styled.header`
  grid-area: header;
  box-shadow: var(--shadow-sm);
  background: var(--color-foreground);
  z-index: 10;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  background: var(--color-foreground);
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.main`
  grid-area: content;
  background: var(--color-background);
  padding: 2rem;
  overflow-y: auto;
`;

const AdminLayout = () => {
  return (
    <AdminLayoutWrapper>
      <Header>
        <AdminHeader />
      </Header>
      <Sidebar>
        <AdminSidebar />
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </AdminLayoutWrapper>
  );
};

export default AdminLayout;
