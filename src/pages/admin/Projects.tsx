import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase/config';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 20px;
`;

const ProjectList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const ProjectItem = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .project-info {
    flex: 1;
    
    h3 {
      margin: 0 0 10px 0;
      color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
    }
    
    p {
      margin: 0;
      color: ${({ theme }) => theme === 'dark' ? '#b0b0b0' : '#666'};
    }
  }
  
  .project-actions {
    display: flex;
    gap: 10px;
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

const ProjectForm = styled.form`
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
    
    input, textarea, select {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: ${({ theme }) => theme === 'dark' ? '#1a1a1a' : '#ffffff'};
      color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
    }
    
    textarea {
      min-height: 100px;
    }
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`;

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  slug: string;
  category: string;
  featured: boolean;
}

interface ProjectFormState {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  slug: string;
  category: string;
  featured: boolean;
}

const initialFormState: ProjectFormState = {
  title: '',
  description: '',
  imageUrl: '',
  technologies: [],
  githubUrl: '',
  demoUrl: '',
  slug: '',
  category: 'web',
  featured: false
};

const AdminProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [formData, setFormData] = useState<ProjectFormState>(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchProjects();
  }, []);
  
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const projectsCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      
      setProjects(projectsList);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'technologies') {
      setFormData({
        ...formData,
        [name]: value.split(',').map(tech => tech.trim())
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
    const storageRef = ref(storage, `projects/${Date.now()}_${file.name}`);
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
      
      const projectData = {
        ...formData,
        imageUrl,
        updatedAt: new Date()
      };
      
      if (isEditing && currentProjectId) {
        const projectRef = doc(db, 'projects', currentProjectId);
        await updateDoc(projectRef, projectData);
      } else {
        await addDoc(collection(db, 'projects'), {
          ...projectData,
          createdAt: new Date()
        });
      }
      
      resetForm();
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      technologies: project.technologies,
      githubUrl: project.githubUrl,
      demoUrl: project.demoUrl,
      slug: project.slug,
      category: project.category,
      featured: project.featured
    });
    setCurrentProjectId(project.id);
    setIsEditing(true);
  };
  
  const handleDelete = async (id: string, imageUrl: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setLoading(true);
      try {
        await deleteDoc(doc(db, 'projects', id));
        
        // Delete image from storage if it exists
        if (imageUrl && imageUrl.includes('firebase')) {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        }
        
        fetchProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  
  const resetForm = () => {
    setFormData(initialFormState);
    setImageFile(null);
    setIsEditing(false);
    setCurrentProjectId(null);
  };
  
  return (
    <ProjectsContainer>
      <h1>Manage Projects</h1>
      
      <ProjectForm onSubmit={handleSubmit}>
        <h2>{isEditing ? 'Edit Project' : 'Add New Project'}</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="slug">Slug (URL-friendly name)</label>
          <input 
            id="slug"
            name="slug"
            type="text"
            value={formData.slug}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea 
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Project Image</label>
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
                alt="Current project" 
                style={{ maxWidth: '200px', maxHeight: '150px' }} 
              />
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="technologies">Technologies (comma-separated)</label>
          <input 
            id="technologies"
            name="technologies"
            type="text"
            value={formData.technologies.join(', ')}
            onChange={handleInputChange}
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
            <option value="ml">Machine Learning</option>
            <option value="data-science">Data Science</option>
            <option value="web">Web Development</option>
            <option value="physics">Physics-Informed ML</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="githubUrl">GitHub URL</label>
          <input 
            id="githubUrl"
            name="githubUrl"
            type="url"
            value={formData.githubUrl}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="demoUrl">Demo URL</label>
          <input 
            id="demoUrl"
            name="demoUrl"
            type="url"
            value={formData.demoUrl}
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
            Featured Project
          </label>
        </div>
        
        <div className="form-buttons">
          <Button type="submit" variant="primary">
            {isEditing ? 'Update Project' : 'Add Project'}
          </Button>
          
          {isEditing && (
            <Button type="button" onClick={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </ProjectForm>
      
      <h2>Projects List</h2>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <ProjectList>
          {projects.length === 0 ? (
            <p>No projects found. Add your first project above.</p>
          ) : (
            projects.map(project => (
              <ProjectItem key={project.id}>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                  <p>Category: {project.category}</p>
                </div>
                <div className="project-actions">
                  <Button onClick={() => handleEdit(project)}>Edit</Button>
                  <Button 
                    variant="danger" 
                    onClick={() => handleDelete(project.id, project.imageUrl)}
                  >
                    Delete
                  </Button>
                </div>
              </ProjectItem>
            ))
          )}
        </ProjectList>
      )}
    </ProjectsContainer>
  );
};

export default AdminProjects;
