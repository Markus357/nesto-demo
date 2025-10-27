import React from 'react';
import styled from 'styled-components';
import { ProductCard, ProductCardWrapper } from './ProductCard';
import type { ProductCardProps } from './ProductCard';

interface ProductCardGridProps {
  products: ProductCardProps[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 24px;
  width: 100%;

  ${ProductCardWrapper} {
    min-height: 400px;
  }
`;

export const ProductCardGrid: React.FC<ProductCardGridProps> = ({ products }) => {
  return (
    <GridContainer>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          name={product.name}
          value={product.value}
          buttonText={product.buttonText}
          onSelect={product.onSelect}
          isLoading={product.isLoading}
        />
      ))}
    </GridContainer>
  );
};
