import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #186c65;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #69e3a0;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #69e3a0;

    &::after {
      width: 100%;
    }
  }

  &.active {
    color: #69e3a0;
    font-weight: 600;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.3rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const NavIcon = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #69e3a0;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 5px;
    height: 5px;
  }
`;

function MainNav() {
  return (
    <NavList>
      <li>
        <StyledNavLink to="/home">
          <NavIcon />
          Home
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/products">
          <NavIcon />
          Products
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/news">
          <NavIcon />
          News
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/contact">
          <NavIcon />
          Contact
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/about">
          <NavIcon />
          About
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default MainNav;
