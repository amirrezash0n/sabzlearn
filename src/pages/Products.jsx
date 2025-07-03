import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Product from "../features/products/Product";

const ProductsContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: right;
  direction: rtl;
`;

const ProductsHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductsTitle = styled.h2`
  font-size: 2rem;
  color: #2f3542;
  position: relative;
  padding-bottom: 0.5rem;
  margin: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 3px;
    background-color: #69e3a0;
  }
`;

const ProductsFilter = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button.attrs(({ $isActive }) => ({
  "data-active": $isActive ? "true" : "false",
}))`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.$isActive ? "#69e3a0" : "#f1f2f6")};
  color: ${(props) => (props.$isActive ? "white" : "#2f3542")};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#69e3a0" : "#d1f5e0")};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const NoProductsMessage = styled.p`
  text-align: center;
  color: #57606f;
  font-size: 1.2rem;
  margin: 2rem 0;
`;

const Products = ({ products = [], title = "دوره‌های آموزشی" }) => {
  const [filter, setFilter] = React.useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <ProductsContainer>
      <ProductsHeader>
        <ProductsTitle>{title}</ProductsTitle>

        <ProductsFilter>
          <FilterButton
            $isActive={filter === "all"}
            onClick={() => setFilter("all")}
          >
            همه دوره‌ها
          </FilterButton>
          <FilterButton
            $isActive={filter === "frontend"}
            onClick={() => setFilter("frontend")}
          >
            فرانت‌اند
          </FilterButton>
          <FilterButton
            $isActive={filter === "backend"}
            onClick={() => setFilter("backend")}
          >
            بک‌اند
          </FilterButton>
        </ProductsFilter>
      </ProductsHeader>

      {filteredProducts.length > 0 ? (
        <ProductsGrid>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsGrid>
      ) : (
        <NoProductsMessage>هیچ دوره‌ای یافت نشد</NoProductsMessage>
      )}
    </ProductsContainer>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      instructor: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.oneOf(["frontend", "backend", "other"]),
      rating: PropTypes.number,
      students: PropTypes.number,
      currentPrice: PropTypes.number,
      originalPrice: PropTypes.number,
      description: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

Products.defaultProps = {
  products: [],
  title: "دوره‌های آموزشی",
};

export default Products;
