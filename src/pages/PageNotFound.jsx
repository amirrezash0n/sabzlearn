import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaSearch } from "react-icons/fa";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  text-align: center;
`;

const NotFoundContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const NotFoundTitle = styled.h1`
  font-size: 6rem;
  color: #ff4757;
  margin: 0;
  line-height: 1;
`;

const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  color: #2f3542;
  margin: 1rem 0;
`;

const NotFoundText = styled.p`
  font-size: 1.2rem;
  color: #57606f;
  margin-bottom: 2rem;
`;

const NotFoundImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ff4757"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:first-child {
    background-color: #3742fa;
    color: white;

    &:hover {
      background-color: #5352ed;
      transform: translateY(-2px);
    }
  }

  &:last-child {
    background-color: white;
    color: #3742fa;
    border: 2px solid #3742fa;

    &:hover {
      background-color: #f1f2f6;
      transform: translateY(-2px);
    }
  }
`;

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundImage />
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>صفحه مورد نظر یافت نشد</NotFoundSubtitle>
        <NotFoundText>
          متأسفیم، اما صفحه‌ای که به دنبال آن هستید وجود ندارد، حذف شده یا نام
          آن تغییر کرده است.
        </NotFoundText>

        <ButtonGroup>
          <ActionButton onClick={() => navigate("/")}>
            <FaHome />
            بازگشت به خانه
          </ActionButton>

          <ActionButton onClick={() => navigate(-1)}>
            <FaSearch />
            بازگشت به صفحه قبل
          </ActionButton>
        </ButtonGroup>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default PageNotFound;
