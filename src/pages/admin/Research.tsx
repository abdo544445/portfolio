import React, { useState, useEffect } from 'react';
import { db, storage, collection, getDocs, doc, addDoc, updateDoc, deleteDoc, ref, uploadBytes, getDownloadURL, deleteObject } from '../../firebase/config';
import styled from 'styled-components';

const ResearchContainer = styled.div`
  padding: 20px;
`;

const ResearchList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const ResearchItem = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
  }
  
  .publication-meta {
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

const ResearchForm = styled.form`
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
      min-height: 100px;
    }
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`;

interface Research {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publication: string;
  publicationDate: string;
  doi: string;
  pdfUrl: string;
  category: string;
  tags: string[];
  featured: boolean;
}

interface ResearchFormState {
  title: string;
  authors: string[];
  abstract: string;
  publication: string;
  publicationDate: string;
  doi: string;
  pdfUrl: string;
  category: string;
  tags: string[];
  featured: boolean;
}

const initialFormState: ResearchFormState = {
  title: '',
  authors: [],
  abstract: '',
  publication: '',
  publicationDate: '',
  doi: '',
  pdfUrl: '',
  category: 'physics-informed-ml',
  tags: [],
  featured: false
};

const AdminResearch: React.FC = () => {
  const [researchItems, setResearchItems] = useState<Research[]>([]);
  const [formData, setFormData] = useState<ResearchFormState>(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [currentResearchId, setCurrentResearchId] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchResearch();
  }, []);

  const fetchResearch = async () => {
    setLoading(true);
    try {
      const researchCollection = collection(db, 'research');
      const researchSnapshot = await getDocs(researchCollection);
      const researchList = researchSnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      })) as Research[];
      
      setResearchItems(researchList);
    } catch (error) {
      console.error('Error fetching research items:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'authors' || name === 'tags') {
      setFormData({
        ...formData,
        [name]: value.split(',').map(item => item.trim())
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
      setPdfFile(e.target.files[0]);
    }
  };
  
  const uploadPdf = async (file: File) => {
    const storageRef = ref(storage, `research/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      let pdfUrl = formData.pdfUrl;
      
      if (pdfFile) {
        pdfUrl = await uploadPdf(pdfFile);
      }
      
      const researchData = {
        ...formData,
        pdfUrl,
        updatedAt: new Date()
      };
      
      if (isEditing && currentResearchId) {
        const researchRef = doc(db, 'research', currentResearchId);
        await updateDoc(researchRef, researchData);
      } else {
        await addDoc(collection(db, 'research'), {
          ...researchData,
          createdAt: new Date()
        });
      }
      
      resetForm();
      fetchResearch();
    } catch (error) {
      console.error('Error saving research item:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleEdit = (research: Research) => {
    setFormData({
      title: research.title,
      authors: research.authors,
      abstract: research.abstract,
      publication: research.publication,
      publicationDate: research.publicationDate,
      doi: research.doi,
      pdfUrl: research.pdfUrl,
      category: research.category,
      tags: research.tags,
      featured: research.featured
    });
    setCurrentResearchId(research.id);
    setIsEditing(true);
  };
  
  const handleDelete = async (id: string, pdfUrl: string) => {
    if (window.confirm('Are you sure you want to delete this research item?')) {
      setLoading(true);
      try {
        await deleteDoc(doc(db, 'research', id));
        
        // Delete PDF from storage if it exists
        if (pdfUrl && pdfUrl.includes('firebase')) {
          const pdfRef = ref(storage, pdfUrl);
          await deleteObject(pdfRef);
        }
        
        fetchResearch();
      } catch (error) {
        console.error('Error deleting research item:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  
  const resetForm = () => {
    setFormData(initialFormState);
    setPdfFile(null);
    setIsEditing(false);
    setCurrentResearchId(null);
  };
  
  return (
    <ResearchContainer>
      <h1>Manage Research</h1>
      
      <ResearchForm onSubmit={handleSubmit}>
        <h2>{isEditing ? 'Edit Research Item' : 'Add New Research Item'}</h2>
        
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
          <label htmlFor="authors">Authors (comma-separated)</label>
          <input 
            id="authors"
            name="authors"
            type="text"
            value={formData.authors.join(', ')}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="abstract">Abstract</label>
          <textarea 
            id="abstract"
            name="abstract"
            value={formData.abstract}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="publication">Publication/Conference</label>
          <input 
            id="publication"
            name="publication"
            type="text"
            value={formData.publication}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="publicationDate">Publication Date</label>
          <input 
            id="publicationDate"
            name="publicationDate"
            type="date"
            value={formData.publicationDate}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="doi">DOI</label>
          <input 
            id="doi"
            name="doi"
            type="text"
            value={formData.doi}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="pdf">PDF File</label>
          <input 
            id="pdf"
            name="pdf"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
          {formData.pdfUrl && (
            <div style={{ marginTop: '10px' }}>
              <a href={formData.pdfUrl} target="_blank" rel="noopener noreferrer">
                View Current PDF
              </a>
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="physics-informed-ml">Physics-Informed ML</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="data-science">Data Science</option>
            <option value="physics">Physics</option>
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
            Featured Research
          </label>
        </div>
        
        <div className="form-buttons">
          <Button type="submit" variant="primary">
            {isEditing ? 'Update Research Item' : 'Add Research Item'}
          </Button>
          
          {isEditing && (
            <Button type="button" onClick={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </ResearchForm>
      
      <h2>Research List</h2>
      {loading ? (
        <p>Loading research items...</p>
      ) : (
        <ResearchList>
          {researchItems.length === 0 ? (
            <p>No research items found. Add your first research item above.</p>
          ) : (
            researchItems.map(item => (
              <ResearchItem key={item.id}>
                <h3>{item.title}</h3>
                <div className="publication-meta">
                  <div>Authors: {item.authors.join(', ')}</div>
                  {item.publication && <div>Publication: {item.publication}</div>}
                  {item.publicationDate && <div>Date: {new Date(item.publicationDate).toLocaleDateString()}</div>}
                  {item.doi && <div>DOI: {item.doi}</div>}
                </div>
                <p>{item.abstract.substring(0, 200)}...</p>
                {item.tags.length > 0 && (
                  <div style={{ marginTop: '10px' }}>
                    Tags: {item.tags.join(', ')}
                  </div>
                )}
                <div className="actions">
                  <Button onClick={() => handleEdit(item)}>Edit</Button>
                  <Button 
                    variant="danger" 
                    onClick={() => handleDelete(item.id, item.pdfUrl)}
                  >
                    Delete
                  </Button>
                </div>
              </ResearchItem>
            ))
          )}
        </ResearchList>
      )}
    </ResearchContainer>
  );
};

export default AdminResearch;
