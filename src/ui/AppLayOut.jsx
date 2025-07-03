import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #f9f9f9 0%, #e6f0f9 100%);
`;

const Main = styled.main`
  flex: 1;
  padding: 3rem 5%;
  background-color: #fff;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 2rem 3%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 2%;
  }
`;

const Footer = styled.footer`
  padding: 1.5rem 5%;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  color: #186c65;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 1rem 3%;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer>
        © {new Date().getFullYear()} Sabzlearn. All rights reserved.
      </Footer>
    </StyledAppLayout>
  );
}

export default AppLayout;
