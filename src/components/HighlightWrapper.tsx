import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  
  > *:last-child {
    outline: 4px solid var(--highlight-color, var(--golden-yellow));
  }
`;

const Header = styled.div`
  position: absolute;
  top: -24px;
  left: -4px;
  right: 0;
  width: calc(100% + 8px);
  background-color: var(--highlight-color, var(--golden-yellow));
  color: var(--deep-navy);
  padding: 2px 16px 12px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 12px 12px 0 0;
  z-index: 0;
`;

export interface HighlightWrapperProps {
  children: React.ReactNode;
  text: string;
  color?: string; // CSS color value; defaults to golden yellow
}

export const HighlightWrapper: React.FC<HighlightWrapperProps> = ({ children, text, color }) => {
  return (
    <Wrapper style={color ? { ['--highlight-color' as any]: color } : undefined}>
      <Header>{text}</Header>
      {children}
    </Wrapper>
  );
};


