import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MainNav from "./MainNav";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 3%;
    flex-direction: column;
    gap: 1rem;
  }
`;

const HeaderTitle = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: #69e3a0;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #4ec887;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const LogoIcon = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #69e3a0;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;

    &::after {
      width: 12px;
      height: 12px;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle to="/home">
        <LogoIcon />
        Sabzlearn
      </HeaderTitle>
      <MainNav />
    </HeaderWrapper>
  );
}

export default Header;
