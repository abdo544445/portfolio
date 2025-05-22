import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

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
  max-width: 600px;
`;

const ContactGrid = styled.div`
  display: grid;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background-color: var(--color-foreground);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-base);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(43, 107, 237, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-base);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(43, 107, 237, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color var(--transition-base);
  
  &:hover:not(:disabled) {
    background-color: var(--color-tertiary);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div<{ $success?: boolean }>`
  padding: 1rem;
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  background-color: ${props => props.$success ? 'rgba(55, 178, 124, 0.1)' : 'rgba(237, 67, 67, 0.1)'};
  color: ${props => props.$success ? 'var(--color-secondary)' : '#ED4343'};
  border: 1px solid ${props => props.$success ? 'var(--color-secondary)' : '#ED4343'};
`;

const ContactInfo = styled.div``;

const ContactCards = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactCard = styled.div`
  background-color: var(--color-foreground);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(43, 107, 237, 0.1);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const CardValue = styled.p`
  color: var(--color-text);
`;

const CardLink = styled.a`
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xpwdnvwq");
  const [formError, setFormError] = useState("");
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError("All fields are required");
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setFormError("Please enter a valid email address");
      return;
    }
    
    // Clear any previous errors
    setFormError("");
    
    // Submit the form using Formspree
    handleSubmit(e);
  };
  
  return (
    <PageContainer>
      <SectionTitle>Get in <span>Touch</span></SectionTitle>
      <SectionDescription>
        Feel free to reach out for collaborations, inquiries, or just to say hello. I'm always open to discussing new projects, ideas, or opportunities.
      </SectionDescription>
      
      <ContactGrid>
        <ContactForm
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleFormSubmit}
        >
          <FormTitle>Send a Message</FormTitle>
          
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" type="text" name="name" placeholder="John Doe" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" name="email" placeholder="john@example.com" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject (Optional)</Label>
            <Input id="subject" type="text" name="subject" placeholder="What's this about?" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Your Message</Label>
            <TextArea id="message" name="message" placeholder="Write your message here..." />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </FormGroup>
          
          <SubmitButton type="submit" disabled={state.submitting}>
            <FaPaperPlane /> Send Message
          </SubmitButton>
          
          {state.succeeded && (
            <FormMessage $success>
              Thank you for your message! I'll get back to you as soon as possible.
            </FormMessage>
          )}
          
          {formError && (
            <FormMessage>
              {formError}
            </FormMessage>
          )}
          
          <ValidationError errors={state.errors} />
        </ContactForm>
        
        <ContactInfo>
          <ContactCards>
            <ContactCard>
              <CardIcon>
                <FaEnvelope />
              </CardIcon>
              <CardTitle>Email</CardTitle>
              <CardValue>
                <CardLink href="mailto:abdoforanything1@gmail.com">
                  abdoforanything1@gmail.com
                </CardLink>
              </CardValue>
            </ContactCard>
            
            <ContactCard>
              <CardIcon>
                <FaPhone />
              </CardIcon>
              <CardTitle>Phone</CardTitle>
              <CardValue>
                <CardLink href="tel:+201119173529">
                  +20 1119173529
                </CardLink>
              </CardValue>
            </ContactCard>
            
            <ContactCard>
              <CardIcon>
                <FaWhatsapp />
              </CardIcon>
              <CardTitle>WhatsApp</CardTitle>
              <CardValue>
                <CardLink href="https://wa.me/201119173529">
                  Send a message
                </CardLink>
              </CardValue>
            </ContactCard>
            
            <ContactCard>
              <CardIcon>
                <FaMapMarkerAlt />
              </CardIcon>
              <CardTitle>Location</CardTitle>
              <CardValue>Remote / Cairo, Egypt</CardValue>
            </ContactCard>
          </ContactCards>
          
          <div style={{ marginTop: '2rem' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221199.41595958156!2d31.22344900684888!3d30.059488723522844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1620569788602!5m2!1sen!2seg" 
              width="100%" 
              height="300" 
              style={{ border: 0, borderRadius: 'var(--radius-md)' }} 
              allowFullScreen 
              loading="lazy"
              title="Cairo, Egypt Map"
            />
          </div>
        </ContactInfo>
      </ContactGrid>
    </PageContainer>
  );
};

export default ContactPage;
