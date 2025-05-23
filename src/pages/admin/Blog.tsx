import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase/config';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 20px;
`;

const BlogList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const BlogItem = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
  }
  
  .post-meta {
    font-size: 0.9rem;
    color: ${({ theme }) => theme === 'dark' ? '#b0b0b0' : '#666'};
    margin-bottom: 15px;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
  }
`;

const Button = styled.button<{ variant?: 'danger' | 'primary' }>`
  background: ${props => props.variant === 'danger' 
    ? '#e53e3e' 
    : props.variant === 'primary' 
      ? '#3182ce' 
      : '#718096'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const BlogForm = styled.form`
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
  }
  
  .form-group {
    margin-bottom: 15px;
    
    label {
      display: block;
      margin-bottom: 5px;
      color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
    }
    
    input, select, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: ${({ theme }) => theme === 'dark' ? '#1a1a1a' : '#ffffff'};
      color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
    }
    
    textarea {
      min-height: 200px;
    }
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`;

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  publishDate: string;
  tags: string[];
  category: string;
  featured: boolean;
}

interface BlogFormState {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  publishDate: string;
  tags: string[];
  category: string;
  featured: boolean;
}

const initialFormState: BlogFormState = {
  title: '',
  slug: '',
  content: '',
  excerpt: '',
  imageUrl: '',
  publishDate: new Date().toISOString().split('T')[0],
  tags: [],
  category: 'machine-learning',
  featured: false
};

const AdminBlog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [formData, setFormData] = useState<BlogFormState>(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  
  const fetchBlogPosts = async () => {
    setLoading(true);
    try {
      const blogCollection = collection(db, 'blog');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      
      setBlogPosts(blogList);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'tags') {
      setFormData({
        ...formData,
        [name]: value.split(',').map(tag => tag.trim())
      });
    } else if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };
  
  const uploadImage = async (file: File) => {
    const storageRef = ref(storage, `blog/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      let imageUrl = formData.imageUrl;
      
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }
      
      const blogData = {
        ...formData,
        imageUrl,
        updatedAt: new Date()
      };
      
      if (isEditing && currentBlogId) {
        const blogRef = doc(db, 'blog', currentBlogId);
        await updateDoc(blogRef, blogData);
      } else {
        await addDoc(collection(db, 'blog'), {
          ...blogData,
          createdAt: new Date()
        });
      }
      
      resetForm();
      fetchBlogPosts();
    } catch (error) {
      console.error('Error saving blog post:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      imageUrl: post.imageUrl,
      publishDate: post.publishDate,
      tags: post.tags,
      category: post.category,
      featured: post.featured
    });
    setCurrentBlogId(post.id);
    setIsEditing(true);
  };
  
  const handleDelete = async (id: string, imageUrl: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setLoading(true);
      try {
        await deleteDoc(doc(db, 'blog', id));
        
        // Delete image from storage if it exists
        if (imageUrl && imageUrl.includes('firebase')) {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        }
        
        fetchBlogPosts();
      } catch (error) {
        console.error('Error deleting blog post:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  
  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    setFormData({
      ...formData,
      slug
    });
  };
  
  const resetForm = () => {
    setFormData(initialFormState);
    setImageFile(null);
    setIsEditing(false);
    setCurrentBlogId(null);
  };
  
  return (
    <BlogContainer>
      <h1>Manage Blog</h1>
      
      <BlogForm onSubmit={handleSubmit}>
        <h2>{isEditing ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            onBlur={() => !formData.slug && generateSlug()}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="slug">Slug (URL-friendly name)</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              id="slug"
              name="slug"
              type="text"
              value={formData.slug}
              onChange={handleInputChange}
              required
              style={{ flex: 1 }}
            />
            <Button type="button" onClick={generateSlug}>
              Generate
            </Button>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea 
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            rows={2}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content (Markdown supported)</label>
          <textarea 
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            rows={10}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Featured Image</label>
          <input 
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {formData.imageUrl && (
            <div style={{ marginTop: '10px' }}>
              <img 
                src={formData.imageUrl} 
                alt="Featured" 
                style={{ maxWidth: '200px', maxHeight: '150px' }} 
              />
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="publishDate">Publish Date</label>
          <input 
            id="publishDate"
            name="publishDate"
            type="date"
            value={formData.publishDate}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="machine-learning">Machine Learning</option>
            <option value="data-science">Data Science</option>
            <option value="physics-informed-ml">Physics-Informed ML</option>
            <option value="web-development">Web Development</option>
            <option value="tutorials">Tutorials</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input 
            id="tags"
            name="tags"
            type="text"
            value={formData.tags.join(', ')}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label>
            <input 
              name="featured"
              type="checkbox" 
              checked={formData.featured}
              onChange={handleInputChange}
            />{' '}
            Featured Post
          </label>
        </div>
        
        <div className="form-buttons">
          <Button type="submit" variant="primary">
            {isEditing ? 'Update Post' : 'Publish Post'}
          </Button>
          
          {isEditing && (
            <Button type="button" onClick={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </BlogForm>
      
      <h2>Blog Posts</h2>
      {loading ? (
        <p>Loading blog posts...</p>
      ) : (
        <BlogList>
          {blogPosts.length === 0 ? (
            <p>No blog posts found. Add your first post above.</p>
          ) : (
            blogPosts.map(post => (
              <BlogItem key={post.id}>
                <h3>{post.title}</h3>
                <div className="post-meta">
                  <div>Published: {new Date(post.publishDate).toLocaleDateString()}</div>
                  <div>Category: {post.category}</div>
                  {post.tags.length > 0 && <div>Tags: {post.tags.join(', ')}</div>}
                </div>
                <p>{post.excerpt}</p>
                <div className="actions">
                  <Button onClick={() => handleEdit(post)}>Edit</Button>
                  <Button 
                    variant="danger" 
                    onClick={() => handleDelete(post.id, post.imageUrl)}
                  >
                    Delete
                  </Button>
                </div>
              </BlogItem>
            ))
          )}
        </BlogList>
      )}
    </BlogContainer>
  );
};

export default AdminBlog;
