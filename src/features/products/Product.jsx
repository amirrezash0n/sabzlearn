import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaStar, FaUsers } from "react-icons/fa";

const ProductCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductCategory = styled.span`
  display: inline-block;
  background-color: #e3f9ee;
  color: #186c65;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
  align-self: flex-start;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2f3542;
`;

const ProductInstructor = styled.p`
  color: #57606f;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProductMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
`;

const ProductRating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #ffb800;
  font-weight: 600;
`;

const ProductStudents = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #57606f;
  font-size: 0.9rem;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const CurrentPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #186c65;
`;

const OriginalPrice = styled.span`
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
`;

const ProductAction = styled(NavLink)`
  display: block;
  text-align: center;
  padding: 0.8rem;
  background-color: #69e3a0;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4ec887;
  }
`;

const Product = ({ product }) => {
  // مقدار پیش‌فرض برای محصول
  const safeProduct = {
    currentPrice: 0,
    originalPrice: 0,
    rating: 0,
    students: 0,
    category: "other",
    ...product,
  };

  return (
    <ProductCard>
      <ProductImage
        src={
          safeProduct.image ||
          "https://via.placeholder.com/300x200?text=No+Image"
        }
        alt={safeProduct.title}
      />
      <ProductContent>
        <ProductCategory>
          {safeProduct.category === "frontend"
            ? "فرانت‌اند"
            : safeProduct.category === "backend"
            ? "بک‌اند"
            : "سایر"}
        </ProductCategory>
        <ProductTitle>{safeProduct.title}</ProductTitle>
        <ProductInstructor>
          مدرس: {safeProduct.instructor || "نامشخص"}
        </ProductInstructor>

        <ProductMeta>
          <ProductRating>
            <FaStar />
            {safeProduct.rating.toFixed(1)}
          </ProductRating>
          <ProductStudents>
            <FaUsers />
            {safeProduct.students.toLocaleString()}
          </ProductStudents>
        </ProductMeta>

        <ProductPrice>
          {safeProduct.currentPrice > 0 ? (
            <>
              <CurrentPrice>
                {safeProduct.currentPrice.toLocaleString()} تومان
              </CurrentPrice>
              {safeProduct.originalPrice > safeProduct.currentPrice && (
                <OriginalPrice>
                  {safeProduct.originalPrice.toLocaleString()} تومان
                </OriginalPrice>
              )}
            </>
          ) : (
            <CurrentPrice>رایگان</CurrentPrice>
          )}
        </ProductPrice>
      </ProductContent>

      <ProductAction to={`/products/${safeProduct.id}`}>
        مشاهده دوره
      </ProductAction>
    </ProductCard>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.oneOf(["frontend", "backend", "other"]),
    rating: PropTypes.number,
    students: PropTypes.number,
    currentPrice: PropTypes.number,
    originalPrice: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

Product.defaultProps = {
  product: {
    instructor: "نامشخص",
    image: "",
    category: "other",
    rating: 0,
    students: 0,
    currentPrice: 0,
    originalPrice: 0,
    description: "",
  },
};

export default Product;
