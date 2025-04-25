import styled from 'styled-components';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { FaBars } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 15px 20px;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
   
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Nav = styled.nav`
  
  display: flex;

  @media (max-width: 768px) {
    
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin-left: 15px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: normal;
  transition: color 0.3s ease;
  display: block;
  padding: 8px 0;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid #555;
    padding: 10px 0;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const CTAButton = styled(Button)`
  background-color: #E46D47;
  color: rgb(109, 28, 1);
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  display: none; 

  @media (min-width: 769px) {
    display: block; 
  }
`;

const MobileCTAButton = styled(CTAButton)`
  display: none; 

  @media (max-width: 768px) {
    display: block; 
    
    /* margin-top: 15px; */ 
    /* width: 100%; */    
  }
`;

const MenuIcon = styled.div`
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    justify-self: center;
  }
`;

const FullNav = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer className="container">
        <Logo to="/" onClick={() => setIsMenuOpen(false)}>Techieify</Logo>
        <MenuIcon onClick={toggleMenu}>
          <FaBars />
        </MenuIcon>
        
        <MobileCTAButton>Get Started</MobileCTAButton>
        <Nav style={{ display: isMenuOpen ? 'flex' : 'none' }}>
          <NavList>
            <NavItem>
              <NavLink to="/" onClick={() => closeMenuAndNavigate('/')}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={() => closeMenuAndNavigate('/about')}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services" onClick={() => closeMenuAndNavigate('/services')}>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/project" onClick={() => closeMenuAndNavigate('/project')}>project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" onClick={() => closeMenuAndNavigate('/blog')}>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" onClick={() => closeMenuAndNavigate('/contact')}>Contact</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <FullNav>
          <Nav>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/project">project</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavList>
          </Nav>
          
          <CTAButton>Get Started</CTAButton>
        </FullNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;