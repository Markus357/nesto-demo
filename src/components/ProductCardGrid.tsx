import React from 'react';
import styled from 'styled-components';
import { ProductCard, ProductCardWrapper } from './ProductCard';
import type { ProductCardProps } from './ProductCard';

interface ProductCardGridProps {
  products: (ProductCardProps & { Wrapper?: React.ComponentType<{ children: React.ReactNode }> })[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 24px;
  width: 100%;
  justify-content: center;

  ${ProductCardWrapper} {
    min-height: 420px;
  }
`;

export const ProductCardGrid: React.FC<ProductCardGridProps> = ({ products }) => {
  return (
    <GridContainer>
      {products.map((
        { title, name, value, buttonText, onSelect, isLoading, Wrapper },
        index
      ) => {
        const card = (
          <ProductCard
            key={index}
            title={title}
            name={name}
            value={value}
            buttonText={buttonText}
            onSelect={onSelect}
            isLoading={isLoading}
          />
        );

        return Wrapper ? <Wrapper key={index}>{card}</Wrapper> : card;
      })}
    </GridContainer>
  );
};
