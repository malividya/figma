import React from 'react';
import image from '../images';
import styled from 'styled-components';

const Container = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  line-height: 1.6;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
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

const Heading = styled.h2`
  color: #333;
  font-size: 1.8em;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.article`
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardDate = styled.div`
  color: #777;
  font-size: 0.85em;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  font-size: 1em;
`;

const CardLink = styled.a`
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
`;

const BlogSection = () => {
  const blogData = [
    {
      image: image['6.jpg'],
      alt: 'Navigating the Tech Terrain',
      date: 'December 2023',
      title: 'Navigating the Tech Terrain Insights for IT Business.',
      link: '#',
    },
    {
      image: image['11.jpg'],
      alt: 'Cyber Business Guide',
      date: 'December 2023',
      title: 'Cyber Business a Guide to Thriving in the Digital Age.',
      link: '#',
    },
    {
      image: image['5.jpg'],
      alt: 'Driving Digital Success',
      date: 'December 2023',
      title: 'Driving Digital Success in the Business Landscape.',
      link: '#',
    },
  ];

  return (
    <Container>
      <Section>
        <SectionButton>Our Blog</SectionButton>
        <Heading>Read Our Latest News & Blog</Heading>
        <Grid>
          {blogData.map((blog, index) => (
            <Card key={index}>
              <CardImage src={blog.image} alt={blog.alt} />
              <CardContent>
                <CardDate>{blog.date}</CardDate>
                <CardTitle>{blog.title}</CardTitle>
                <CardLink href={blog.link} aria-label={`Read more about ${blog.title}`}>
                  Read More →
                </CardLink>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default BlogSection;