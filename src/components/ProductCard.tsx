import React from 'react';
import styled from 'styled-components';
import { Button, StyledButton } from './Button';
import nestoIconGreyscale from '../assets/nestoIcon-greyscale.png';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

export interface ProductCardProps {
  title: string;
  name: string;
  value: number;
  buttonText?: string;
  loadingButtonText?: string;
  onSelect: () => void;
  isLoading?: boolean;
  renderButton?: (args: { isDesktop: boolean; isLoading: boolean; buttonText: string }) => React.ReactNode;
}

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.5px;
  margin: 0;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top-left-radius: var(--product-card-border-radius);
  border-top-right-radius: var(--product-card-border-radius);
  background-color: var(--royal-blue);

  @media (min-width: 768px) {
    font-size: 16px;
    padding-top: calc(var(--product-card-padding) / 2);
    padding-bottom: calc(var(--product-card-padding) / 2);
  }
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--deep-navy);
  margin: 0;
  padding-left: var(--product-card-padding);
  padding-right: var(--product-card-padding);
  text-align: center;
  line-height: 1.2;
  overflow: visible;
  display: block;
  height: auto;

  @media (min-width: 768px) {
    font-size: 24px;
    height: calc(2 * 1.2em);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Value = styled.span`
  font-size: 40px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 70px;
  }
`;

const RateSymbol = styled.span`
  position: absolute;
  top: 8px;
  left: 100%;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    top: 16px;
    font-size: 36px;
  }
`;

const OuterValueSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 12px 0;

  @media (min-width: 768px) {
    justify-content: center;
    flex: 1;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

const ValueSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: flex-end;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

const ActionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  padding: 0 var(--product-card-padding);

  @media (min-width: 768px) {
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    align-items: center; /* center value and button horizontally on desktop */
    padding: 0;
  }
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
  width: 100%;
  min-width: 0;
  height: 100%;
  padding-bottom: 0;
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
    background-position: -140px 140px;
    opacity: 0.05;
    pointer-events: none;
    border-radius: var(--product-card-border-radius);
    z-index: 0;
  }
  
  &:hover {
    border-color: var(--deep-navy);
    box-shadow: 0 8px 24px rgba(63, 102, 174, 0.15);
  }

  @media (min-width: 768px) {
    width: auto;
    min-width: 300px;
    padding-bottom: var(--product-card-padding);

    &::before {
      opacity: 0.15;
    }
  }
`;

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  name,
  value,
  buttonText = 'Select this product',
  loadingButtonText,
  onSelect,
  isLoading = false,
  renderButton,
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { t } = useTranslation();
  const mobileButtonText = t('productCard.applyShort') ?? 'apply';
  const baseButtonText = isDesktop
    ? buttonText
    : mobileButtonText.charAt(0).toUpperCase() + mobileButtonText.slice(1);
  const finalButtonText = isLoading && loadingButtonText ? loadingButtonText : baseButtonText;
  const buttonNode = renderButton
    ? renderButton({ isDesktop, isLoading, buttonText: finalButtonText })
    : (
        <Button onClick={onSelect} disabled={isLoading} pill={!isDesktop} size={isDesktop ? 'md' : 'sm'}>
          {finalButtonText}
        </Button>
      );
  return (
    <ProductCardWrapper>
      <Title>{title}</Title>
      <Content>
        <Name>{name}</Name>
        <ActionRow>
          <OuterValueSection>
            <ValueSection>
              <Value>{value}</Value>
              <RateSymbol>%</RateSymbol>
            </ValueSection>
          </OuterValueSection>
          {buttonNode}
        </ActionRow>
      </Content>
    </ProductCardWrapper>
  );
};
