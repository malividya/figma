import React from 'react';
import styled from 'styled-components';
import images from '../images';

const Section = styled.section`
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  line-height: 1.6;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 10px;
`;

const Label = styled.div`
  color: #e91e63;
  font-size: 0.9em;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.8em;
  margin: 0;
`;

const AllProjectsLink = styled.a`
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;

  &::after {
    content: " →";
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 15px;
`;

const Location = styled.div`
  color: #777;
  font-size: 0.85em;
  margin-bottom: 5px;
`;

const ProjectTitle = styled.div`
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const ViewButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  bottom: 15px;
  left: 15px;

  &::after {
    content: "→";
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
const projects = [
  { img: images["ONE.jpg"], title: "Software Development", location: "Client Work in USA" },
  { img:images["four.jpg"], title: "Web Development", location: "Client Work in USA" },
  { img: images["three.jpg"] , title: "Digital Marketing", location: "Client Work in USA" },
  { img: images["two.jpg"] , title: "Artificial Intelligence", location: "Client Work in USA" },
];

const Projects = () => {
  return (
    <Section>
      <ProjectsContainer>
        <ProjectsHeader>
          <div>
            <SectionButton>Our Projects</SectionButton>
            <Title>Our Latest Tech Projects on Technology Solutions</Title>
          </div>
          <AllProjectsLink href="#">All Projects</AllProjectsLink>
        </ProjectsHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <Card key={index}>
              <Image src={project.img} alt={project.title} />
              <Info>
                <Location>{project.location}</Location>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ViewButton>View Project</ViewButton>
              </Info>
            </Card>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
