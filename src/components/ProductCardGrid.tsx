import React from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard';
import type { ProductCardProps } from './ProductCard';

interface ProductCardGridProps {
  products: (ProductCardProps & { Wrapper?: React.ComponentType<{ children: React.ReactNode }> })[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 400px);
  gap: 24px;
  width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 320px);
  }
`;

export const ProductCardGrid: React.FC<ProductCardGridProps> = ({ products }) => {
  return (
    <GridContainer>
      {products.map((
        { title, name, value, buttonText, loadingButtonText, onSelect, isLoading, Wrapper },
        index
      ) => {
        const card = (
          <ProductCard
            key={index}
            title={title}
            name={name}
            value={value}
            buttonText={buttonText}
            loadingButtonText={loadingButtonText}
            onSelect={onSelect}
            isLoading={isLoading}
          />
        );

        return Wrapper ? <Wrapper key={index}>{card}</Wrapper> : card;
      })}
    </GridContainer>
  );
};
