import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  padding-bottom: 5rem;
`;

const Title = styled.h2`
  color: white;
  margin: 0;
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
`;

const ContactForm = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  position: relative;

  & > div:first-of-type {
    margin-top: -3%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.8rem;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.8rem;
  height: 70px;
  resize: vertical;
  min-height: 70px;
  max-height: 300px;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const SendButton = styled.button`
  position: absolute;
  top: -4rem;
  right: 1.5rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.8);
  background: #FFD700;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    background: #FFC800;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LinkedInButton = styled.a`
  position: absolute;
  top: -4rem;
  right: 14rem;
  font-size: 1.2rem;
  color: white;
  background: #0077B5;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.9;
    background: #006399;
  }
`;

const LinkedInIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;

const StatusMessage = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  color: white;
  background: ${props => props.success ? 'rgba(0, 200, 0, 0.7)' : 'rgba(200, 0, 0, 0.7)'};
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: '' });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('3KX_K2JpL7X3z-1L-');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ show: false, success: false, message: '' });

    // Log the form data for debugging
    console.log('Sending form data:', formData);

    emailjs.sendForm('service_pfpt59b', 'template_ngvwgda', form.current, '3KX_K2JpL7X3z-1L-')
      .then((result) => {
        console.log('EmailJS success:', result);
        setStatus({
          show: true,
          success: true,
          message: 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus({
          show: true,
          success: false,
          message: `Failed to send message: ${error.text || 'Unknown error'}`
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setStatus(prev => ({ ...prev, show: false }));
        }, 5000);
      });
  };

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <ContactForm ref={form} onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        <LinkedInButton 
          href="https://www.linkedin.com/in/dannarew/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedInIcon viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </LinkedInIcon>
          LinkedIn
        </LinkedInButton>
        <SendButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SendButton>
        <StatusMessage show={status.show} success={status.success}>
          {status.message}
        </StatusMessage>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact; 