import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
    margin-bottom: 8px;
    font-size: 16px;
  }
  
  p {
    color: ${({ theme }) => theme === 'dark' ? '#60a5fa' : '#2563eb'};
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
`;

const RecentActivitySection = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 15px;
    font-size: 20px;
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
  }
  
  ul {
    padding-left: 0;
    list-style: none;
    
    li {
      padding: 12px 0;
      border-bottom: 1px solid ${({ theme }) => theme === 'dark' ? '#404040' : '#e0e0e0'};
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    researchPapers: 0,
    blogPosts: 0,
    messages: 0
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const skillsCollection = collection(db, 'skills');
        const researchCollection = collection(db, 'research');
        const blogCollection = collection(db, 'blog');
        const messagesCollection = collection(db, 'messages');
        
        const [projectsSnap, skillsSnap, researchSnap, blogSnap, messagesSnap] = await Promise.all([
          getDocs(projectsCollection),
          getDocs(skillsCollection),
          getDocs(researchCollection),
          getDocs(blogCollection),
          getDocs(messagesCollection)
        ]);
        
        setStats({
          projects: projectsSnap.size,
          skills: skillsSnap.size,
          researchPapers: researchSnap.size,
          blogPosts: blogSnap.size,
          messages: messagesSnap.size
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <DashboardContainer>
      <h1>Admin Dashboard</h1>
      
      {loading ? (
        <p>Loading dashboard data...</p>
      ) : (
        <>
          <StatsGrid>
            <StatCard>
              <h3>Projects</h3>
              <p>{stats.projects}</p>
            </StatCard>
            <StatCard>
              <h3>Skills</h3>
              <p>{stats.skills}</p>
            </StatCard>
            <StatCard>
              <h3>Research Papers</h3>
              <p>{stats.researchPapers}</p>
            </StatCard>
            <StatCard>
              <h3>Blog Posts</h3>
              <p>{stats.blogPosts}</p>
            </StatCard>
            <StatCard>
              <h3>Contact Messages</h3>
              <p>{stats.messages}</p>
            </StatCard>
          </StatsGrid>
          
          <RecentActivitySection>
            <h2>Recent Activity</h2>
            <ul>
              <li>Portfolio website launched - {new Date().toLocaleDateString()}</li>
            </ul>
          </RecentActivitySection>
        </>
      )}
    </DashboardContainer>
  );
};

export default AdminDashboard;
