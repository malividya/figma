import React from 'react';
import styled from 'styled-components';
import images from '../images';


const Container = styled.div`
    max-width: 1000px;
    margin: 40px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const ServicesSection = styled.section`
    text-align: center;
    margin-bottom: 40px;
`;

const OurServices = styled.div`
    color: #555;
    font-size: 0.9em;
    margin-bottom: 10px;
`;

const Heading = styled.h2`
    color: #333;
    font-size: 1.8em;
    margin-bottom: 20px;
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
`;

const ServiceCard = styled.div`
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 6px;
    text-align: left;
    border: 1px solid #eee;
`;

const ServiceImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
`;

const ServiceTitle = styled.div`
    font-weight: bold;
    color: #444;
    margin-bottom: 8px;
`;

const ServiceDescription = styled.p`
    color: #777;
    font-size: 0.95em;
    margin-bottom: 12px;
    line-height: 1.4;
`;

const ReadMoreLink = styled.a`
    display: inline-block;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9em;

    &::after {
        content: " →";
    }
`;

const TestimonialCard = styled.div`
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 6px;
    margin-bottom: 40px;
    display: flex;
    gap: 30px;
    align-items: center;
`;

const TestimonialLeft = styled.div`
    flex: 1;
    text-align: center;
`;

const ImageContainer = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
    background-color: #ddd;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ExperienceStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StatItem = styled.div`
    color: #333;
`;

const StatNumber = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    color: #007bff;
    display: block;
`;

const StatLabel = styled.span`
    font-size: 0.9em;
    color: #555;
`;

const TestimonialRight = styled.div`
    flex: 2;
`;

const TestimonialQuote = styled.blockquote`
    color: #555;
    font-style: italic;
    font-size: 1.1em;
    line-height: 1.7;
    margin-bottom: 20px;
    padding-left: 20px;
    border-left: 3px solid #007bff;
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

const AuthorSmallImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #ddd;
`;

const AuthorDetails = styled.div`
    text-align: left;
`;

const AuthorName = styled.span`
    font-weight: bold;
    color: #333;
    font-size: 1em;
    display: block;
`;

const AuthorTitle = styled.span`
    color: #777;
    font-size: 0.9em;
    display: block;
`;

const ProjectExperienceStats = styled.div`
    display: flex;
    gap: 20px;
`;

const StatsSection = styled.section`
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
    text-align: center;
    padding: 20px 0;
`;

const StatItemSection = styled.div`
    color: #333;
`;

const StatNumberSection = styled.div`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 5px;
    color: #007bff;
`;

const StatLabelSection = styled.div`
    font-size: 0.9em;
    color: #555;
`;

const ProjectsSection = styled.section`
    text-align: center;
`;

const OurProjects = styled.div`
    color: #555;
    font-size: 0.9em;
    margin-bottom: 10px;
`;

const HeadingProjects = styled.h3`
    color: #333;
    font-size: 1.8em;
    margin-bottom: 20px;
`;

const AllProjectsLink = styled.a`
    display: inline-block;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9em;
    margin-top: 10px;

    &::after {
        content: " →";
    }
`;
const SectionButton = styled.button`
    background-color: #ffe0d9;
    color: #cc665e;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: none;
`;
const App = () => {
    return (
        <Container>
            <ServicesSection>
                <SectionButton>Our Services</SectionButton>
                <Heading>Providing Complete Professional IT Services</Heading>
                <ServicesGrid>
                    <ServiceCard>
                        <ServiceImage src={images["two.jpg"]} alt="Artificial Intelligence" />
                        <ServiceTitle>Artificial Intelligence</ServiceTitle>
                        <ServiceDescription>Empower your business with tailored software solutions crafted to harness the power of AI.</ServiceDescription>
                        <ReadMoreLink href="#">Read More</ReadMoreLink>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImage src={images["7.jpg"]} alt="Database Security" />
                        <ServiceTitle>Database Security</ServiceTitle>
                        <ServiceDescription>Empower your business with tailored software solutions crafted to ensure robust database security.</ServiceDescription>
                        <ReadMoreLink href="#">Read More</ReadMoreLink>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImage src={images["9.jpg"]} alt="Apex Cyber Solutions" />
                        <ServiceTitle>Apex Cyber Solutions</ServiceTitle>
                        <ServiceDescription>Empower your business with tailored software solutions crafted to provide apex-level cybersecurity.</ServiceDescription>
                        <ReadMoreLink href="#">Read More</ReadMoreLink>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImage src={images["10.jpg"]} alt="Data Pulse Solutions" />
                        <ServiceTitle>Data Pulse Solutions</ServiceTitle>
                        <ServiceDescription>Empower your business with tailored software solutions crafted to deliver insightful data pulses.</ServiceDescription>
                        <ReadMoreLink href="#">Read More</ReadMoreLink>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImage src={images["5.jpg"]} alt="Cloud Solutions" />
                        <ServiceTitle>Cloud Solutions</ServiceTitle>
                        <ServiceDescription>Empower your business with tailored software solutions crafted for seamless cloud integration and management.</ServiceDescription>
                        <ReadMoreLink href="#">Read More</ReadMoreLink>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceImage src={images["11.jpg"]} alt="Mobile App Development" />
                        <ServiceTitle>Mobile App Development</ServiceTitle>
                        <ServiceDescription>Empower your business with tailored software solutions crafted for cutting-edge mobile app development.</ServiceDescription>
                        <ReadMoreLink href="#">Read More</ReadMoreLink>
                    </ServiceCard>
                </ServicesGrid>
            </ServicesSection>


            <TestimonialCard>
                <TestimonialLeft>
                    <ImageContainer>
                        <img
                            src={images["11.jpg"]}
                            alt="Testimonial Author"
                            className="author-image"
                        />
                    </ImageContainer>
                    <ExperienceStats>
                        <StatItem>
                            <StatNumber>09+</StatNumber>
                            <StatLabel>Years Total Work Experience</StatLabel>
                        </StatItem>
                    </ExperienceStats>
                </TestimonialLeft>
                <TestimonialRight>
                    <TestimonialQuote>
                        "Our interaction with Techieify has been nothing short of delightful.
                        Their team's quick and efficient responses"
                    </TestimonialQuote>
                    <AuthorInfo>
                        <AuthorSmallImage
                            src={images["1.jpg"]} 
                            alt="Alex Jhon"
                            className="author-small-image"
                        />
                        <AuthorDetails>
                            <AuthorName>Alex Jhon</AuthorName>
                            <AuthorTitle>Blog Author</AuthorTitle>
                        </AuthorDetails>
                    </AuthorInfo>
                    <ProjectExperienceStats>
                        <StatItem>
                            <StatNumber>1920+</StatNumber>
                            <StatLabel>Total Project Done</StatLabel>
                        </StatItem>
                        <StatItem>
                            <StatNumber>22+</StatNumber>
                            <StatLabel>Years of Experience</StatLabel>
                        </StatItem>
                    </ProjectExperienceStats>
                </TestimonialRight>
            </TestimonialCard>

            
        </Container>
    );
};


export default App;