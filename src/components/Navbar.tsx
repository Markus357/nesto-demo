import React from 'react';
import styled from 'styled-components';
import { Link } from '@tanstack/react-router'
import nestoLogo from '../assets/nesto-EN_Primary.png';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px var(--mobile-padding);
  background-color: var(--white);
  border-bottom: 1px solid #e5e5e5;
  
  @media (min-width: 769px) {
    padding: 16px var(--desktop-padding);
  }
`;

const Logo = styled.img`
  height: 32px;
  width: auto;
  display: block;
  
  @media (min-width: 769px) {
    height: 40px;
  }
`;

const NavbarLink = styled(Link)`
  color: var(--deep-navy);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
`;

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">
        <Logo 
          src={nestoLogo} 
          alt="Nesto" 
        />
      </NavbarLink>

      <NavbarLink to="/applications">
        Applications
      </NavbarLink>
    </NavbarContainer>
  );
};
