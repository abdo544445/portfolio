// src/types/models.ts

// Skill model with categories relevant to ML and data science
export interface Skill {
  id: string;
  name: string;
  category: 'machine-learning' | 'data-science' | 'web-development' | 'research';
  proficiency: number; // 0-100 scale
  icon?: string;
  description?: string;
  yearsOfExperience?: number;
}

// Project model for showcasing ML projects and web applications
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: 'ml-ai' | 'data-viz' | 'web-app' | 'research';
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string; // For research projects with published papers
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Research interest model
export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  relatedProjects?: string[]; // IDs of related projects
  publications?: Publication[];
}

// Publication model for academic/research papers
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: number;
  abstract?: string;
  pdfUrl?: string;
  doiUrl?: string;
}

// Professional information model
export interface ProfessionalInfo {
  id: string;
  fullName: string;
  title: string;
  summary: string;
  email?: string;
  location?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    googleScholar?: string;
    researchGate?: string;
  };
  education: Education[];
  experience: Experience[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  description?: string;
  location?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  location?: string;
  technologies?: string[];
}

// Blog post model for sharing ML insights
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  imageUrl?: string;
  tags: string[];
  publishDate: Date;
  updatedDate?: Date;
  published: boolean;
}

// Contact form submission
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: Date;
  read: boolean;
  responded: boolean;
}
