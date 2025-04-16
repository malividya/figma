import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const Nav = styled.nav`
  /* Styles for navigation */
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: normal;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }
`;

const CTAButton = styled(Button)`
  background-color:#E46D47;
  color:rgb(109, 28, 1);
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(211, 55, 2);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer className="container">
        <Logo to="/">Techieify</Logo>
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
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;