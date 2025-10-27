import React from 'react';
import styled from 'styled-components';
import { Button, StyledButton } from './Button';
import nestoIconGreyscale from '../assets/nestoIcon-greyscale.png';

export interface ProductCardProps {
  title: string;
  name: string;
  value: number;
  buttonText?: string;
  onSelect: () => void;
  isLoading?: boolean;
}

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--white);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.5px;
  margin: 0;
  width: 100%;
  padding-top: calc(var(--product-card-padding) / 2);
  padding-bottom: calc(var(--product-card-padding) / 2);
  border-top-left-radius: var(--product-card-border-radius);
  border-top-right-radius: var(--product-card-border-radius);
  background-color: var(--royal-blue);
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--deep-navy);
  margin: 0;
  padding-left: var(--product-card-padding);
  padding-right: var(--product-card-padding);
  text-align: center;
`;

const Value = styled.span`
  font-size: 70px;
  font-weight: 700;
`;

const RateSymbol = styled.span`
  font-size: 48px;
  font-weight: 700;
`;

const OuterValueSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: var(--product-card-padding);
  padding-right: var(--product-card-padding);
`;

const ValueSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: bottom;
`;

export const ProductCardWrapper = styled.div`
  --product-card-padding: 24px;
  --product-card-border-radius: 12px;
  
  background-color: var(--white);
  border: 1px solid #000;
  border-radius: var(--product-card-border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  min-width: 300px;
  height: 100%;
  padding-bottom: var(--product-card-padding);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  position: relative;

  ${StyledButton} {
    position: relative;
    z-index: 1;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${nestoIconGreyscale});
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-position: -130px 120px;
    opacity: 0.15;
    pointer-events: none;
    border-radius: var(--product-card-border-radius);
    z-index: 0;
  }
  
  &:hover {
    border-color: var(--deep-navy);
    box-shadow: 0 8px 24px rgba(63, 102, 174, 0.15);
  }
`;

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  name,
  value,
  buttonText = 'Select this product',
  onSelect,
  isLoading = false,
}) => {
  return (
    <ProductCardWrapper>
      <Title>{title}</Title>
      
      <Name>{name}</Name>
      
      <OuterValueSection>
        <ValueSection>
          <Value>{value}</Value>
          <RateSymbol>%</RateSymbol>
        </ValueSection>
      </OuterValueSection>

      <Button onClick={onSelect} disabled={isLoading}>
        {buttonText}
      </Button>
    </ProductCardWrapper>
  );
};
