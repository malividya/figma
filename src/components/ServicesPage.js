import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/ServicesPage.css';
import styled from 'styled-components';
import MainContent from '../components/ui/maincontent'; 
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '../components/ui/card';

const ServicesSectionWrapper = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 32px;
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 16px;
`;

const ServiceItem = styled(Card)`
  width: 300px;
  text-align: left;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceItemTitle = styled(CardTitle)`
  font-size: 24px;
  margin-bottom: 16px;
  color: #007bff;
`;

const ServiceItemDescription = styled(CardDescription)`
  font-size: 18px;
  color: #555;
  line-height: 1.7;
`;

const ServicesPage = () => {
  return (
    <MainContent>
      <ServicesSectionWrapper>
        <div className="container">
          <ServicesTitle>Our Services</ServicesTitle>
          <ServiceList>
            <ServiceItem>
              <CardHeader>
                <ServiceItemTitle>Web Development</ServiceItemTitle>
              </CardHeader>
              <CardContent>

                <ServiceItemDescription>
                  We offer full-stack web development services.
                </ServiceItemDescription>
              </CardContent>
            </ServiceItem>
            <ServiceItem>
              <CardHeader>

                <ServiceItemTitle>Mobile App Development</ServiceItemTitle>
              </CardHeader>
              <CardContent>
                <ServiceItemDescription>
                  We build mobile apps for iOS and Android.
                </ServiceItemDescription>
              </CardContent>
            </ServiceItem>
            <ServiceItem>
              <CardHeader>
                <ServiceItemTitle>Digital Marketing</ServiceItemTitle>
              </CardHeader>
              <CardContent>

                <ServiceItemDescription>
                  We provide digital marketing solutions.
                </ServiceItemDescription>
              </CardContent>
            </ServiceItem>
          </ServiceList>
        </div>
      </ServicesSectionWrapper>
    </MainContent>
  );
};



export default ServicesPage;