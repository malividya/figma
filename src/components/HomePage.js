import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/ui/button';

import images from '../images';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

const Container = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  line-height: 1.6;
`;

const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeroLeft = styled.div`
  flex: 1;
  padding-right: 40px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 30px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`;

const Stats = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
`;

const Stat = styled.div`
  text-align: left;

  .number {
    font-size: 2em;
    font-weight: bold;
    color: #333;
  }

  .label {
    color: #777;
    font-size: 0.9em;
  }
`;

const HeroRight = styled.div`
  flex: 1;
  text-align: right;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const ClientBadge = styled.div`
  background-color: white;
  color: #333;
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 0.8em;
  position: absolute;
  top: 20px;
  right: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  strong {
    color: #007bff;
  }
`;

const ProgressCircleWrapper = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color:white;
`;

const ColorIndicators = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  gap: 10px;

  .color-box {
    width: 30px;
    height: 20px;
    border-radius: 4px;
  }

  .primary {
    background-color: #ff6f00;
  }

  .secondary {
    background-color: #1a237e;
  }
`;

const OrangeButton = styled.a`
  background-color: #ff6f00;
  color: white;
  padding: 15px 30px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #e65c00;
  }
`;

const OutlineButton = styled.a`
  background-color: transparent;
  color: #ff6f00;
  border: 2px solid #ff6f00;
  padding: 15px 30px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #ff6f00;
    color: white;
  }
`;

const ColoredDonut = ({ value, colors }) => {
  const total = 100;
  const segments = colors.map((color, index) => {
    const start = (index / colors.length) * total;
    const end = ((index + 1) / colors.length) * total;
    const dashArray = `${end - start}, ${total}`;
    const dashOffset = start;

    return (
      <circle
        key={index}
        cx="18"
        cy="18"
        r="16"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
      />
    );
  });

  return (
    <svg width="70" height="70" viewBox="0 0 36 36">
      {segments}
      <text x="18" y="22" textAnchor="middle" fontSize="5" fill="#333">
        {value}%
      </text>
    </svg>
  );
};

const HeroPage = () => {
  return (
    <Container>
      <ColorIndicators>
        <div className="color-box primary" />
        <div className="color-box secondary" />
      </ColorIndicators>

      <HeroSection>
        <HeroLeft>
          <Title>We Help to Build Your IT <span style={{ color: 'orange' }}>Business.</span></Title>
          <Description>
            We are a leading construction firm dedicated to transforming ideas
            into exceptional structures that stand the test of time.
          </Description>
          <Buttons>
            <OrangeButton href="#">Get Started</OrangeButton>
            <OutlineButton href="#">Our Services</OutlineButton>
          </Buttons>

          <Stats>
            <Stat>
              <div className="number">1920+</div>
              <div className="label">Total Project Done</div>
            </Stat>
            <Stat>
              <div className="number">22+</div>
              <div className="label">Years of Experience</div>
            </Stat>
          </Stats>
        </HeroLeft>

        <HeroRight>
          <img src={images['11.jpg']} alt="IT Business Illustration" />
          <ClientBadge>
            <strong>500+</strong> Total Client
          </ClientBadge>
          <ProgressCircleWrapper>
            <ColoredDonut value={84} colors={['#FF6F00', '#1A237E', '#4CAF50', '#E91E63']} />
          </ProgressCircleWrapper>
        </HeroRight>
      </HeroSection>
    </Container>
  );
};

export default HeroPage;