import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Science/ML-themed color palette for light mode */
    --color-primary: #2C6BED; /* Blue for technology/ML */
    --color-secondary: #37B27C; /* Green for data/growth */
    --color-tertiary: #9069ED; /* Purple for physics/research */
    --color-accent: #EDB83D; /* Gold for achievements/highlights */
    
    --color-background: #F8FAFC;
    --color-foreground: #FFFFFF;
    --color-text: #1E293B;
    --color-text-light: #64748B;
    --color-border: #E2E8F0;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
    
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-mono: 'Fira Code', 'JetBrains Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
    
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    
    --transition-base: 0.2s ease;
    
    --max-width: 1200px;
    --header-height: 70px;
    
    /* For syntax highlighting and code blocks */
    --code-background: #F1F5F9;
    --code-text: #334155;
  }
  
  [data-theme="dark"] {
    /* Science/ML-themed color palette for dark mode */
    --color-primary: #3B82F6; /* Lighter blue for technology/ML */
    --color-secondary: #34D399; /* Lighter green for data/growth */
    --color-tertiary: #A78BFA; /* Lighter purple for physics/research */
    --color-accent: #F59E0B; /* Amber for achievements/highlights */
    
    --color-background: #0F172A;
    --color-foreground: #1E293B;
    --color-text: #F1F5F9;
    --color-text-light: #94A3B8;
    --color-border: #334155;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3);
    
    /* For syntax highlighting and code blocks */
    --code-background: #1E293B;
    --code-text: #E2E8F0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-sans);
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color var(--transition-base);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-base);
    
    &:hover {
      color: var(--color-tertiary);
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    cursor: pointer;
  }
  
  code {
    font-family: var(--font-mono);
    background-color: var(--code-background);
    color: var(--code-text);
    padding: 0.2em 0.4em;
    border-radius: var(--radius-sm);
    font-size: 0.9em;
  }
  
  pre {
    background-color: var(--code-background);
    border-radius: var(--radius-md);
    padding: 1rem;
    overflow-x: auto;
    margin-bottom: 1rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  /* Container for sections */
  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (min-width: 768px) {
      padding: 0 2rem;
    }
  }
  
  /* Section spacing */
  section {
    padding: 4rem 0;
  }
  
  /* Utilities */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  /* Science-themed decorative elements */
  .molecule-bg {
    position: absolute;
    pointer-events: none;
    opacity: 0.1;
    z-index: -1;
  }
`;

export default GlobalStyles;
