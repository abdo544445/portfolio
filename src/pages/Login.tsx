import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import styled from 'styled-components';

const LoginContainer = styled.div`
  max-width: 500px;
  margin: 60px auto;
  padding: 30px;
  background: ${({ theme }) => theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-weight: 500;
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
  }
  
  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background: ${({ theme }) => theme === 'dark' ? '#1a1a1a' : '#ffffff'};
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#333'};
  }
`;

const Button = styled.button`
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2c5282;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    background-color: #3367d6;
  }
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  padding: 10px;
  background-color: rgba(229, 62, 62, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/admin');
    } catch (err) {
      setError('Google sign-in failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <LoginContainer>
      <h1>Admin Login</h1>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <Form onSubmit={handleEmailLogin}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        
        <Button type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in with Email'}
        </Button>
      </Form>
      
      <div style={{ margin: '20px 0', textAlign: 'center' }}>or</div>
      
      <GoogleButton type="button" onClick={handleGoogleLogin} disabled={loading}>
        Sign in with Google
      </GoogleButton>
    </LoginContainer>
  );
};

export default Login;
