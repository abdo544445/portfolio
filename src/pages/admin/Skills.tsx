import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 20px;
`;

const SkillsList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
`;

const SkillItem = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .progress {
    height: 10px;
    background-color: ${({ theme }) => theme === 'dark' ? '#444' : '#ddd'};
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
    
    .progress-bar {
      height: 100%;
      background-color: ${({ theme }) => theme === 'dark' ? '#60a5fa' : '#3182ce'};
    }
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
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

const SkillForm = styled.form`
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
    
    .range-value {
      display: block;
      text-align: center;
      margin-top: 5px;
      font-weight: bold;
    }
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`;

interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  description: string;
  yearsExperience: number;
}

const initialFormState = {
  name: '',
  category: 'machine-learning',
  proficiency: 80,
  description: '',
  yearsExperience: 1
};

const AdminSkills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSkillId, setCurrentSkillId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchSkills();
  }, []);
  
  const fetchSkills = async () => {
    setLoading(true);
    try {
      const skillsCollection = collection(db, 'skills');
      const skillsSnapshot = await getDocs(skillsCollection);
      const skillsList = skillsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Skill[];
      
      setSkills(skillsList);
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'number' || name === 'proficiency') {
      setFormData({
        ...formData,
        [name]: Number(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const skillData = {
        ...formData,
        updatedAt: new Date()
      };
      
      if (isEditing && currentSkillId) {
        const skillRef = doc(db, 'skills', currentSkillId);
        await updateDoc(skillRef, skillData);
      } else {
        await addDoc(collection(db, 'skills'), {
          ...skillData,
          createdAt: new Date()
        });
      }
      
      resetForm();
      fetchSkills();
    } catch (error) {
      console.error('Error saving skill:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleEdit = (skill: Skill) => {
    setFormData({
      name: skill.name,
      category: skill.category,
      proficiency: skill.proficiency,
      description: skill.description,
      yearsExperience: skill.yearsExperience
    });
    setCurrentSkillId(skill.id);
    setIsEditing(true);
  };
  
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      setLoading(true);
      try {
        await deleteDoc(doc(db, 'skills', id));
        fetchSkills();
      } catch (error) {
        console.error('Error deleting skill:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  
  const resetForm = () => {
    setFormData(initialFormState);
    setIsEditing(false);
    setCurrentSkillId(null);
  };
  
  return (
    <SkillsContainer>
      <h1>Manage Skills</h1>
      
      <SkillForm onSubmit={handleSubmit}>
        <h2>{isEditing ? 'Edit Skill' : 'Add New Skill'}</h2>
        
        <div className="form-group">
          <label htmlFor="name">Skill Name</label>
          <input 
            id="name"
            name="name"
            type="text"
            value={formData.name}
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
            <option value="web-development">Web Development</option>
            <option value="physics">Physics</option>
            <option value="programming">Programming Languages</option>
            <option value="tools">Tools & Frameworks</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="proficiency">Proficiency ({formData.proficiency}%)</label>
          <input 
            id="proficiency"
            name="proficiency"
            type="range"
            min="0"
            max="100"
            value={formData.proficiency}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="yearsExperience">Years of Experience</label>
          <input 
            id="yearsExperience"
            name="yearsExperience"
            type="number"
            min="0"
            step="0.5"
            value={formData.yearsExperience}
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
            rows={3}
          />
        </div>
        
        <div className="form-buttons">
          <Button type="submit" variant="primary">
            {isEditing ? 'Update Skill' : 'Add Skill'}
          </Button>
          
          {isEditing && (
            <Button type="button" onClick={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </SkillForm>
      
      <h2>Skills List</h2>
      {loading ? (
        <p>Loading skills...</p>
      ) : (
        <SkillsList>
          {skills.length === 0 ? (
            <p>No skills found. Add your first skill above.</p>
          ) : (
            skills.map(skill => (
              <SkillItem key={skill.id}>
                <h3>
                  {skill.name}
                  <small>({skill.category})</small>
                </h3>
                <div className="progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <p>{skill.description}</p>
                <p>Experience: {skill.yearsExperience} {skill.yearsExperience === 1 ? 'year' : 'years'}</p>
                <div className="actions">
                  <Button onClick={() => handleEdit(skill)}>Edit</Button>
                  <Button 
                    variant="danger" 
                    onClick={() => handleDelete(skill.id)}
                  >
                    Delete
                  </Button>
                </div>
              </SkillItem>
            ))
          )}
        </SkillsList>
      )}
    </SkillsContainer>
  );
};

export default AdminSkills;
