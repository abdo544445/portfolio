import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaTag, FaArrowLeft, FaShare, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { useEffect } from 'react';

const PageContainer = styled.div`
  max-width: 800px;
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
  font-size: 0.875rem;
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const BlogHeader = styled.div`
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
`;

const BlogMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeroImage = styled.div`
  margin-bottom: 2.5rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const BlogContent = styled.div`
  color: var(--color-text);
  line-height: 1.8;
  font-size: 1.125rem;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.75rem;
    margin: 3rem 0 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: var(--color-primary);
      border-radius: 2px;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 2.5rem 0 1.25rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
    }
  }
  
  blockquote {
    border-left: 4px solid var(--color-primary);
    padding-left: 1.5rem;
    font-style: italic;
    margin: 2rem 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-md);
    margin: 2rem 0;
  }
  
  pre {
    margin: 2rem 0;
  }
`;

const TagsSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: var(--color-background);
  color: var(--color-text-light);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

const ShareSection = styled.div`
  margin: 3rem 0;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
`;

const ShareTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialButton = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: opacity var(--transition-base);
  
  &:hover {
    opacity: 0.9;
  }
`;

const LinkedInButton = styled(SocialButton)`
  background-color: #0077B5;
`;

const TwitterButton = styled(SocialButton)`
  background-color: #1DA1F2;
`;

const FacebookButton = styled(SocialButton)`
  background-color: #4267B2;
`;

const RelatedPosts = styled.section`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
`;

const RelatedTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RelatedCard = styled(Link)`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-foreground);
  border-radius: var(--radius-md);
  color: var(--color-text);
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
`;

const RelatedImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RelatedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RelatedPostTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const RelatedDate = styled.div`
  font-size: 0.75rem;
  color: var(--color-text-light);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

// Sample blog post data - in a real app, this would come from Firebase
const blogPosts = [
  {
    id: '1',
    title: 'Introduction to Physics-Informed Neural Networks',
    slug: 'intro-to-physics-informed-neural-networks',
    summary: 'An overview of how to integrate physics principles into neural networks and why it matters for scientific machine learning.',
    content: `
      <h2>What are Physics-Informed Neural Networks?</h2>
      <p>Physics-Informed Neural Networks (PINNs) are a class of deep learning models that incorporate known physical laws into the learning process. Unlike traditional neural networks that are purely data-driven, PINNs leverage domain knowledge in the form of differential equations to improve accuracy and provide physically consistent predictions.</p>
      
      <p>The key idea behind PINNs is to train neural networks with a composite loss function that includes both data fitting terms and physics-informed terms. The physics-informed component ensures that the neural network's predictions respect known physical principles, even in regions where training data may be sparse or noisy.</p>
      
      <h2>How Do PINNs Work?</h2>
      <p>At their core, PINNs work by automatically enforcing the governing equations of a physical system within the neural network training process. This is typically achieved through the following steps:</p>
      
      <ol>
        <li><strong>Define a neural network architecture</strong> that takes the independent variables (such as space and time coordinates) as input and outputs the dependent variables (such as temperature, velocity, pressure, etc.).</li>
        <li><strong>Formulate the physics-based constraints</strong> as differential equations involving the dependent variables.</li>
        <li><strong>Use automatic differentiation</strong> to compute the derivatives of the neural network outputs with respect to its inputs.</li>
        <li><strong>Define a composite loss function</strong> that includes both data fitting terms (comparing predictions to available measurements) and physics-informed terms (evaluating how well the predictions satisfy the governing equations).</li>
        <li><strong>Train the neural network</strong> to minimize this composite loss function, thereby learning a solution that is both consistent with the available data and the underlying physics.</li>
      </ol>
      
      <h2>Advantages of PINNs</h2>
      <p>The integration of physical principles into neural networks offers several compelling advantages:</p>
      
      <ul>
        <li><strong>Reduced data requirements</strong>: By leveraging physical laws, PINNs can provide accurate predictions with significantly less training data compared to purely data-driven approaches.</li>
        <li><strong>Improved generalization</strong>: The physics-based regularization helps the model generalize better to unseen scenarios by constraining the solution space to physically plausible outputs.</li>
        <li><strong>Enhanced interpretability</strong>: PINNs produce results that are consistent with physical principles, making them more interpretable and trustworthy from a domain science perspective.</li>
        <li><strong>Handling of complex geometries</strong>: PINNs can naturally handle complex geometries and boundary conditions that might be challenging for traditional numerical methods.</li>
      </ul>
      
      <h2>Applications in Scientific Computing</h2>
      <p>The capabilities of PINNs have led to their application across various scientific and engineering domains:</p>
      
      <ul>
        <li><strong>Fluid dynamics</strong>: Solving the Navier-Stokes equations for complex flow problems.</li>
        <li><strong>Heat transfer</strong>: Modeling heat conduction and convection in complex materials and geometries.</li>
        <li><strong>Structural mechanics</strong>: Predicting deformations and stress distributions in materials and structures.</li>
        <li><strong>Quantum mechanics</strong>: Solving the Schrödinger equation for quantum systems.</li>
        <li><strong>Inverse problems</strong>: Inferring unknown parameters or initial conditions from sparse measurements.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Physics-Informed Neural Networks represent a promising intersection of deep learning and scientific computing. By embedding domain knowledge into data-driven models, PINNs offer a pathway to more accurate, efficient, and trustworthy scientific machine learning. As research in this area continues to advance, we can expect PINNs to play an increasingly important role in tackling complex scientific and engineering problems.</p>
    `,
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
    content: `
      <h2>The Importance of Scientific Data Visualization</h2>
      <p>In the age of big data and complex scientific simulations, effective visualization is no longer optional—it's essential. Visualizations transform abstract numbers into comprehensible patterns, enabling scientists to extract insights, identify anomalies, and communicate findings to both technical and non-technical audiences.</p>
      
      <p>However, visualizing scientific data comes with unique challenges. The datasets are often high-dimensional, contain multiple scales, and require careful representation to avoid misleading viewers or obscuring important patterns.</p>
      
      <h2>Understanding Your Data and Audience</h2>
      <p>Before choosing a visualization technique, it's crucial to understand both your data and your audience:</p>
      
      <ul>
        <li><strong>Know your data's characteristics</strong>: Dimensionality, scale, distribution, and relationships between variables all influence which visualization techniques will be most effective.</li>
        <li><strong>Define your visualization goals</strong>: Are you trying to explore the data to find patterns? Explain a known phenomenon? Compare multiple datasets or simulations?</li>
        <li><strong>Consider your audience</strong>: Technical experts may appreciate detailed, information-dense visualizations, while broader audiences may benefit from simplified representations that highlight key findings.</li>
      </ul>
      
      <h2>Best Practices for Scientific Visualization</h2>
      <h3>1. Choose the Right Visualization Type</h3>
      <p>Different types of data call for different visualization approaches:</p>
      <ul>
        <li><strong>Scalar fields</strong>: Heat maps, contour plots, or color-coded surface plots</li>
        <li><strong>Vector fields</strong>: Arrow plots, streamlines, or particle animations</li>
        <li><strong>Multidimensional data</strong>: Parallel coordinates, scatter plot matrices, or dimensionality reduction techniques (PCA, t-SNE, UMAP)</li>
        <li><strong>Network data</strong>: Node-link diagrams, adjacency matrices, or arc diagrams</li>
        <li><strong>Hierarchical data</strong>: Treemaps, dendrograms, or sunburst diagrams</li>
      </ul>
      
      <h3>2. Use Color Effectively</h3>
      <p>Color is a powerful tool in scientific visualization, but it must be used carefully:</p>
      <ul>
        <li><strong>Choose appropriate color maps</strong>: Use sequential color maps for continuous data, diverging color maps for data with a meaningful midpoint, and qualitative color maps for categorical data.</li>
        <li><strong>Consider perceptual linearity</strong>: Ensure that equal steps in data correspond to equal perceptual steps in color (e.g., prefer viridis or plasma over rainbow color maps).</li>
        <li><strong>Account for color blindness</strong>: Use color-blind friendly palettes or provide alternative cues like patterns or shapes.</li>
      </ul>
      
      <h3>3. Enhance Comprehension with Context</h3>
      <p>Proper context helps viewers interpret scientific visualizations correctly:</p>
      <ul>
        <li><strong>Include clear axes and legends</strong>: Label axes, provide units, and include comprehensive legends.</li>
        <li><strong>Add reference elements</strong>: Include grid lines, reference points, or scales to help viewers gauge magnitudes.</li>
        <li><strong>Provide multiple views</strong>: Show the data from different perspectives or at different scales when appropriate.</li>
      </ul>
      
      <h3>4. Embrace Interactivity</h3>
      <p>Interactive visualizations allow users to explore complex datasets more effectively:</p>
      <ul>
        <li><strong>Implement zooming and panning</strong>: Enable viewers to examine details in high-density visualizations.</li>
        <li><strong>Add filtering capabilities</strong>: Allow users to focus on specific subsets of the data.</li>
        <li><strong>Incorporate linked views</strong>: Connect multiple visualizations so that interactions in one view update others.</li>
        <li><strong>Provide details on demand</strong>: Show additional information when users hover over or click on elements.</li>
      </ul>
      
      <h2>Tools for Scientific Visualization</h2>
      <p>Several powerful tools are available for creating scientific visualizations:</p>
      <ul>
        <li><strong>Programming libraries</strong>: Matplotlib, Plotly, D3.js, ggplot2</li>
        <li><strong>Specialized scientific tools</strong>: ParaView, VisIt, VMD</li>
        <li><strong>Interactive notebooks</strong>: Jupyter, Observable</li>
        <li><strong>General visualization software</strong>: Tableau, Power BI</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Effective visualization of scientific data is both an art and a science. By understanding your data's characteristics, choosing appropriate visualization techniques, using color effectively, providing proper context, and incorporating interactivity, you can create visualizations that not only reveal patterns in your data but also communicate your findings clearly to diverse audiences.</p>
      
      <p>Remember that the goal of scientific visualization isn't just to create beautiful images—it's to enhance understanding and enable discovery. The most successful visualizations are those that help viewers gain new insights into complex phenomena.</p>
    `,
    publishDate: new Date('2023-03-10'),
    readTime: '6 min read',
    imageUrl: '/images/blog2.jpg',
    tags: ['Data Visualization', 'Scientific Data', 'D3.js'],
  },
];

// Function to find related posts based on tags
const getRelatedPosts = (currentPost: any, allPosts: any[], count = 2) => {
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPost.id) // Exclude current post
    .map(post => {
      // Count matching tags
      const matchingTags = post.tags.filter((tag: string) => 
        currentPost.tags.includes(tag)
      ).length;
      return { ...post, matchingTags };
    })
    .sort((a, b) => b.matchingTags - a.matchingTags) // Sort by number of matching tags
    .slice(0, count); // Take top matches
  
  return relatedPosts;
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  if (!post) {
    return (
      <PageContainer>
        <BackButton to="/blog">
          <FaArrowLeft /> Back to Blog
        </BackButton>
        <h1>Post Not Found</h1>
        <p>The blog post you are looking for doesn't exist or has been moved.</p>
      </PageContainer>
    );
  }
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  const relatedPosts = getRelatedPosts(post, blogPosts);
  
  // For social sharing
  const shareUrl = `https://alatrash.me/blog/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);
  
  return (
    <PageContainer>
      <BackButton to="/blog">
        <FaArrowLeft /> Back to Blog
      </BackButton>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BlogHeader>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogMeta>
            <BlogMetaItem>
              <FaCalendar />
              {formatDate(post.publishDate)}
            </BlogMetaItem>
            <BlogMetaItem>
              <FaClock />
              {post.readTime}
            </BlogMetaItem>
          </BlogMeta>
        </BlogHeader>
        
        <HeroImage>
          <img src={post.imageUrl} alt={post.title} />
        </HeroImage>
        
        <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <TagsSection>
          {post.tags.map(tag => (
            <Tag key={tag}>
              <FaTag size={10} />
              {tag}
            </Tag>
          ))}
        </TagsSection>
        
        <ShareSection>
          <ShareTitle>
            <FaShare /> Share this post
          </ShareTitle>
          <SocialButtons>
            <LinkedInButton 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin size={18} />
            </LinkedInButton>
            <TwitterButton 
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
            >
              <FaTwitter size={18} />
            </TwitterButton>
            <FacebookButton 
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
            >
              <FaFacebook size={18} />
            </FacebookButton>
          </SocialButtons>
        </ShareSection>
        
        {relatedPosts.length > 0 && (
          <RelatedPosts>
            <RelatedTitle>Related Posts</RelatedTitle>
            <RelatedGrid>
              {relatedPosts.map(related => (
                <RelatedCard key={related.id} to={`/blog/${related.slug}`}>
                  <RelatedImage>
                    <img src={related.imageUrl} alt={related.title} />
                  </RelatedImage>
                  <RelatedContent>
                    <RelatedPostTitle>{related.title}</RelatedPostTitle>
                    <RelatedDate>
                      <FaCalendar size={10} />
                      {formatDate(related.publishDate)}
                    </RelatedDate>
                  </RelatedContent>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </RelatedPosts>
        )}
      </motion.div>
    </PageContainer>
  );
};

export default BlogPostPage;
