import React from 'react';
import { Link } from 'react-router-dom';
/*import '../styles/AboutPage.css';*/
import styled from 'styled-components';
import MainContent from '../components/ui/maincontent';

const AboutUsSection = styled.section`
  padding: 80px 0;
`;

const AboutTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`;

const AboutDescription = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.7;
`;
const AboutPage = () => {
  return (
    <MainContent>
      <AboutUsSection className="container">
        <AboutTitle>About Us</AboutTitle>
        <AboutDescription>
          We are a passionate team dedicated to providing innovative technology
          solutions. Our mission is to help businesses grow and succeed in the
          digital age.
        </AboutDescription>
        {/* Add  content */}
      </AboutUsSection>
    </MainContent>
  );
};

export default AboutPage;