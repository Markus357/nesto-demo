import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  --product-card-border-radius: 12px;
  --outline-size: 4px;

  position: relative;
  display: inline-block;
  
  > *:last-child {
    outline: var(--outline-size) solid var(--golden-yellow);
  }
`;

const BestRateHeader = styled.div`
  position: absolute;
  top: -24px;
  left: -4px;
  right: 0;
  width: calc(100% + 8px);
  background-color: var(--golden-yellow);
  color: var(--deep-navy);
  padding: 2px 16px 12px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: var(--product-card-border-radius) var(--product-card-border-radius) 0 0;
  z-index: 0;
`;

export interface BestCardWrapperProps {
  children: React.ReactNode;
}

export const BestCardWrapper: React.FC<BestCardWrapperProps> = ({ children }) => {
  return (
    <Wrapper>
      <BestRateHeader>🏆 OUR BEST RATE 🏆</BestRateHeader>
      {children}
    </Wrapper>
  );
};