import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';


const FooterWrapper = styled.footer`
  background-color: #1a232e;
  color: #e0e0e0;
  padding: 40px 20px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

const FooterLogoInfo = styled.div`
  text-align: left;
`;

const FooterLogo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #ff6f00;
  margin-bottom: 10px;

  span {
    font-size: 2em;
  }
`;

const FooterDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const OpenHours = styled.div`
  font-size: 0.9em;

  strong {
    color: #fff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #26323e;
  color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  text-decoration: none;
`;

const SectionTitle = styled.h3`
  color: #fff;
  font-size: 1.1em;
  margin-bottom: 15px;
  text-align: left;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #ccc;
  text-decoration: none;
  font-size: 0.9em;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const FooterBottom = styled.div`
  background-color: #131b23;
  color: #999;
  text-align: center;
  padding: 15px 0;
  font-size: 0.8em;
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <FooterLogoInfo>
            <FooterLogo>
              <span>T</span>echiefy
            </FooterLogo>
            <FooterDescription>
              There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
            </FooterDescription>
            <OpenHours>
              <strong>Open Hours:</strong>
              <br />
              Mon to Sat: 6am to 9pm
              <br />
              Sunday: Close
            </OpenHours>
            <SocialIcons>
  <SocialIcon href="#" aria-label="Facebook">
    <FaFacebookF />
  </SocialIcon>
  <SocialIcon href="#" aria-label="Twitter">
    <FaTwitter />
  </SocialIcon>
  <SocialIcon href="#" aria-label="Instagram">
    <FaInstagram />
  </SocialIcon>
  <SocialIcon href="#" aria-label="Dribbble">
    <FaDribbble />
  </SocialIcon>
</SocialIcons>

          </FooterLogoInfo>

          <div>
            <SectionTitle>Menu</SectionTitle>
            <List>
              <ListItem><Link href="#">Home</Link></ListItem>
              <ListItem><Link href="#">About Us</Link></ListItem>
              <ListItem><Link href="#">Services</Link></ListItem>
              <ListItem><Link href="#">Project</Link></ListItem>
              <ListItem><Link href="#">Contact Us</Link></ListItem>
            </List>
          </div>

          <div>
            <SectionTitle>Links</SectionTitle>
            <List>
              <ListItem><Link href="#">Password Protected</Link></ListItem>
              <ListItem><Link href="#">404 Page</Link></ListItem>
              <ListItem><Link href="#">Style Guide</Link></ListItem>
              <ListItem><Link href="#">Licenses</Link></ListItem>
              <ListItem><Link href="#">Changelog</Link></ListItem>
            </List>
          </div>

          <div>
            <SectionTitle>Links</SectionTitle>
            <List>
              <ListItem>
                <strong>Email Address:</strong>
                <br />
                <Link href="mailto:demomail@gmail.com">demomail@gmail.com</Link>
              </ListItem>
              <ListItem>
                <strong>Phone Number:</strong>
                <br />
                <Link href="tel:+00123456789">+00 123 456 789</Link>
              </ListItem>
              <ListItem>
                <strong>Our Location:</strong>
                <br />
                4967 Sardis Sta, Victoria 8007,
                <br />
                Montreal.
              </ListItem>
            </List>
          </div>
        </FooterContainer>
      </FooterWrapper>

      <FooterBottom>All right reserved techiefy 2025</FooterBottom>
    </>
  );
};

export default Footer;
