import React from 'react';
import styled from 'styled-components';
import imageOne from '../images/11.jpg';

const Container = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  line-height: 1.6;
  display: flex;        /* Added */
  flex-direction: column; /* Added */
  align-items: center;     /* Added */
  min-height: 100vh;    /* Added */
  box-sizing: border-box;
`;

const HeroSection = styled.section`
  max-width: 1200px;
  width: 95%; 
  margin: 40px auto;
  padding: 20px; 
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: space-between; 
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-direction: row; 
    padding: 40px 20px;
  }
`;

const HeroLeft = styled.div`
  flex: 1;
  padding-right: 0; 
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding-right: 40px;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 2em; 
  color: #333;
  margin-bottom: 1rem;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  text-align: left;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 10px;
  margin-bottom: 2rem;
  width: 100%;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row; 
    gap: 15px;
    width: auto;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row; 
    gap: 30px;
  }
`;

const Stat = styled.div`
  text-align: left;

  .number {
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
  }

  .label {
    color: #777;
    font-size: 0.8em; 
  }
  @media (min-width: 768px) {
    .number{
        font-size: 2em;
    }
    .label{
        font-size: 0.9em
    }
  }
`;

const HeroRight = styled.div`
  flex: 1;
  text-align: center; 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  box-sizing: border-box;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    text-align: right; 
    align-items: flex-end;
  }
`;

const ClientBadge = styled.div`
  background-color: white;
  color: #333;
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 0.7em;
  position: relative;
  top: 0;
  right: auto;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  z-index: 1;
  text-align: center;

  strong {
    color: #007bff;
  }

  @media (min-width: 768px) {
    font-size: 0.8em;
    position: absolute;
    top: 20px;
    right: 0;
    left: auto;
    transform: translateX(0);
    margin-bottom: 110px;
  }
`;

const ProgressCircleWrapper = styled.div`
  width: 80px; 
  height: 80px;
  position: relative;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    width: 100px; 
    height: 100px;
    bottom: 0;
    right: 0;
    transform: translateX(0);
    margin-top: 0;
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
                r="14"  
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
            />
        );
    });

    return (
        <svg width="60" height="60" viewBox="0 0 36 36">  
            {segments}
            <text x="18" y="22" textAnchor="middle" fontSize="4" fill="#333">
                {value}%
            </text>
        </svg>
    );
};

const OrangeButton = styled.a`
  background-color: #ff6f00;
  color: white;
  padding: 10px 20px; /* Reduced padding */
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #e65c00;
  }
    @media (min-width: 768px) {
    padding: 15px 30px;
    width: auto;
  }
`;

const OutlineButton = styled.a`
  background-color: transparent;
  color: #ff6f00;
  border: 2px solid #ff6f00;
  padding: 10px 20px; 
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  text-align: center;
   width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #ff6f00;
    color: white;
  }
  @media (min-width: 768px) {
     padding: 15px 30px;
     width: auto;
  }
`;
const ColorIndicators = styled.div`
  position: absolute;
  top: 10px; 
  left: 50%; 
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1;

  .color-box {
    width: 20px;
    height: 15px; 
    border-radius: 4px;
  }

  .primary {
    background-color: #ff6f00;
  }

  .secondary {
    background-color: #1a237e;
  }

  @media (min-width: 768px) {
    top: 20px;
    left: 20px; 
    transform: translateX(0); 
  }
`;

const HeroPage = () => {
  return (
    <Container>
      <ColorIndicators>
        <div className="color-box primary" />
        <div className="color-box secondary" />
      </ColorIndicators>

      <HeroSection>
        <HeroLeft>
          <Title>
            We Help to Build Your IT <span style={{ color: 'orange' }}>Business.</span>
          </Title>
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
          <img src={imageOne} alt="IT Business Illustration" style={{maxWidth: '100%', height: 'auto'}}/>
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

