import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import '../styles/ContactPage.css';
import styled from 'styled-components';
import MainContent from '../components/ui/maincontent';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

const ContactSectionWrapper = styled.section`
  padding: 80px 0;
`;

const ContactTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
  text-align:center;
`;

const ContactDescription = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 32px;
  text-align:center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const ContactInput = styled(Input)`
  padding: 12px;
  margin-bottom: 16px;
  font-size: 1rem;
`;

const ContactTextArea = styled(Textarea)`
  padding: 12px;
  margin-bottom: 16px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
`;

const ContactButton = styled(Button)`
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  align-self: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <MainContent>
      <ContactSectionWrapper>
        <div className="container">
          <ContactTitle>Contact Us</ContactTitle>
          <ContactDescription>
            Get in touch with us for any inquiries.
          </ContactDescription>
          <ContactForm onSubmit={handleSubmit}>
            <ContactInput
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <ContactInput
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ContactTextArea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <ContactButton type="submit">Send Message</ContactButton>
          </ContactForm>
        </div>
      </ContactSectionWrapper>
    </MainContent>
  );
};

export default ContactPage;