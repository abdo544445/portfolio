import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { analytics, logEvent } from './firebase/config';
import { useTheme } from './context/ThemeContext';

// Layouts
import MainLayout from './components/layout/MainLayout';
import AdminLayout from './components/layout/AdminLayout';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResearchPage from './pages/ResearchPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminProjects from './pages/admin/Projects';
import AdminSkills from './pages/admin/Skills';
import AdminResearch from './pages/admin/Research';
import AdminBlog from './pages/admin/Blog';
import AdminContact from './pages/admin/Contact';
import Login from './pages/Login';

// Protected Route
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Log page view to analytics
    try {
      logEvent(analytics, 'page_view');
    } catch (error) {
      console.log('Analytics error:', error);
    }
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="skills" element={<AdminSkills />} />
          <Route path="research" element={<AdminResearch />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="contact" element={<AdminContact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
