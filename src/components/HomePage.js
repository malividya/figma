import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/HomePage.css';
import welcomeImg from '../images/img.jpeg';
import styled from 'styled-components';
import { Button } from '../components/ui/button';
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent
} from '../components/ui/card';
const MainContent = styled.main`
  flex: 1;
  padding-top: 32px;
`;

const HeroSectionWrapper = styled.section`
  background-color: #e9ecef;
  padding: 80px 0;
  text-align: center;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroText = styled.div`
  max-width: 600px;
  margin-bottom: 32px;
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 16px;
`;

const HeroDescription = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 32px;
  line-height: 1.7;
`;

const HeroCTAButton = styled(Button)`
  background-color: #28a745;
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const HeroImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const FeaturesSectionWrapper = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const FeaturesTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 32px;
`;

const FeatureCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 16px;
`;

const FeatureCardWrapper = styled(Card)`
  margin-bottom: 16px;
  width: 300px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureCardTitle = styled(CardTitle)`
  font-size: 20px;
  margin-bottom: 8px;
`;

const FeatureCardDescription = styled(CardDescription)`
  color: #666;
`;

const HomePage = () => {
  return (
    <MainContent>
      <HeroSectionWrapper>
        <HeroContainer className="container">
          <HeroText>
            <HeroTitle>Welcome to Techieify</HeroTitle>
            <HeroDescription>
              Your one-stop solution for all your tech needs.
            </HeroDescription>
            <HeroCTAButton>Learn More</HeroCTAButton>
          </HeroText>
          <HeroImage>
            <img src={welcomeImg} alt="Welcome" />
          </HeroImage>
        </HeroContainer>
      </HeroSectionWrapper>

      <FeaturesSectionWrapper>
        <div className="container">
          <FeaturesTitle>Key Features</FeaturesTitle>
          <FeatureCards>
            <FeatureCardWrapper>
              <CardHeader>
                <FeatureCardTitle>Feature 1</FeatureCardTitle>
              </CardHeader>
              <CardContent>
                <FeatureCardDescription>Description of feature 1.</FeatureCardDescription>
              </CardContent>
            </FeatureCardWrapper>
            <FeatureCardWrapper>
              <CardHeader>
                <FeatureCardTitle>Feature 2</FeatureCardTitle>
              </CardHeader>
              <CardContent>

                <FeatureCardDescription>Description of feature 2.</FeatureCardDescription>
              </CardContent>
            </FeatureCardWrapper>
            <FeatureCardWrapper>
              <CardHeader>
                <FeatureCardTitle>Feature 3</FeatureCardTitle>
              </CardHeader>
              <CardContent>
                <FeatureCardDescription>Description of feature 3.</FeatureCardDescription>
              </CardContent>
            </FeatureCardWrapper>
          </FeatureCards>
        </div>
      </FeaturesSectionWrapper>
    </MainContent>
  );
};

export default HomePage;