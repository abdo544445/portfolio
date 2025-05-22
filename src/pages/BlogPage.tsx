import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock } from 'react-icons/fa';

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

const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const BlogMainContent = styled.div``;

const BlogSidebar = styled.div`
  @media (max-width: 991px) {
    order: -1;
  }
`;

const SearchBox = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-foreground);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(43, 107, 237, 0.2);
  }
`;

const SidebarSection = styled.div`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`;

const SidebarTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--color-primary);
  }
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.button<{ $active?: boolean }>`
  background-color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-background)'};
  color: ${props => props.$active ? 'white' : 'var(--color-text-light)'};
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-border)'};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BlogCard = styled(motion(Link))`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  display: block;
  color: var(--color-text);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    color: var(--color-text);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }
  
  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
`;

const BlogMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const BlogSummary = styled.p`
  color: var(--color-text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.9375rem;
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const BlogTag = styled.span`
  background-color: var(--color-background);
  color: var(--color-text-light);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
`;

// Sample blog data - in a real app, this would come from Firebase
const blogPosts = [
  {
    id: '1',
    title: 'Introduction to Physics-Informed Neural Networks',
    slug: 'intro-to-physics-informed-neural-networks',
    summary: 'An overview of how to integrate physics principles into neural networks and why it matters for scientific machine learning.',
    publishDate: new Date('2023-04-15'),
    readTime: '8 min read',
    imageUrl: '/images/blog1.jpg',
    tags: ['Machine Learning', 'PINNs', 'Scientific ML'],
  },
  {
    id: '2',
    title: 'Visualizing Complex Scientific Data: Best Practices',
    slug: 'visualizing-complex-scientific-data',
    summary: 'Tips and techniques for creating effective visualizations that communicate insights from complex scientific datasets.',
    publishDate: new Date('2023-03-10'),
    readTime: '6 min read',
    imageUrl: '/images/blog2.jpg',
    tags: ['Data Visualization', 'Scientific Data', 'D3.js'],
  },
  {
    id: '3',
    title: 'Building Web Apps for Scientific Applications',
    slug: 'web-apps-for-scientific-applications',
    summary: 'How to develop web applications that serve as interfaces for scientific computing and data analysis.',
    publishDate: new Date('2023-02-05'),
    readTime: '10 min read',
    imageUrl: '/images/blog3.jpg',
    tags: ['Web Development', 'React', 'Scientific Computing'],
  },
  {
    id: '4',
    title: 'Deep Learning for Differential Equations',
    slug: 'deep-learning-for-differential-equations',
    summary: 'Exploring how deep learning models can be used to solve and approximate complex differential equations.',
    publishDate: new Date('2023-01-20'),
    readTime: '12 min read',
    imageUrl: '/images/blog4.jpg',
    tags: ['Deep Learning', 'Differential Equations', 'Scientific ML'],
  },
];

// All unique tags from blog posts
const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
);

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    // Filter by tag if selected
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    
    // Filter by search term
    const matchesSearch = searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;
    
    return matchesTag && matchesSearch;
  });
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  return (
    <PageContainer>
      <SectionTitle>The <span>Blog</span></SectionTitle>
      <SectionDescription>
        Articles, tutorials, and insights on machine learning, data science,
        and scientific computing with a focus on physics-informed approaches.
      </SectionDescription>
      
      <BlogLayout>
        <BlogMainContent>
          <BlogGrid>
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                to={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogImage>
                  <img src={post.imageUrl} alt={post.title} />
                </BlogImage>
                <BlogContent>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogMeta>
                    <BlogMetaItem>
                      <FaCalendar size={12} />
                      {formatDate(post.publishDate)}
                    </BlogMetaItem>
                    <BlogMetaItem>
                      <FaClock size={12} />
                      {post.readTime}
                    </BlogMetaItem>
                  </BlogMeta>
                  <BlogSummary>{post.summary}</BlogSummary>
                  <BlogTags>
                    {post.tags.map(tag => (
                      <BlogTag key={tag}>
                        {tag}
                      </BlogTag>
                    ))}
                  </BlogTags>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
          
          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <h3>No posts found</h3>
              <p>Try adjusting your filters or search term.</p>
            </div>
          )}
        </BlogMainContent>
        
        <BlogSidebar>
          <SearchBox>
            <SearchInput 
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBox>
          
          <SidebarSection>
            <SidebarTitle>Tags</SidebarTitle>
            <TagCloud>
              {allTags.map(tag => (
                <Tag
                  key={tag}
                  $active={selectedTag === tag}
                  onClick={() => {
                    if (selectedTag === tag) {
                      setSelectedTag(null);
                    } else {
                      setSelectedTag(tag);
                    }
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </TagCloud>
          </SidebarSection>
          
          <SidebarSection>
            <SidebarTitle>Recent Posts</SidebarTitle>
            {blogPosts.slice(0, 3).map(post => (
              <div key={post.id} style={{ marginBottom: '1rem' }}>
                <Link to={`/blog/${post.slug}`} style={{ fontWeight: 500, color: 'var(--color-text)' }}>
                  {post.title}
                </Link>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                  <FaCalendar size={10} style={{ marginRight: '0.25rem' }} />
                  {formatDate(post.publishDate)}
                </div>
              </div>
            ))}
          </SidebarSection>
        </BlogSidebar>
      </BlogLayout>
    </PageContainer>
  );
};

export default BlogPage;
