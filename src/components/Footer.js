import React from 'react';
import { Link } from 'react-router-dom';
//Simport '../styles/Footer.css';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: 80px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #aaa;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer className="container">
        <FooterText>&copy; {new Date().getFullYear()} Techieify. All rights reserved.</FooterText>
        <SocialLinks>
          <SocialIcon href="https://www.facebook.com">Facebook</SocialIcon>
          <SocialIcon href="https://www.twitter.com">Twitter</SocialIcon>
          <SocialIcon href="https://www.linkedin.com">LinkedIn</SocialIcon>
        </SocialLinks>
      </FooterContainer>
    </FooterWrapper>
  );
};
export default Footer;