import React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'tel';
  error?: boolean;
}

const StyledInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid ${props => props.$error ? 'var(--red-orange)' : '#ccc'};
  border-radius: 8px;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  background-color: var(--white);
  color: var(--deep-navy);

  &:focus {
    outline: none;
    border-color: ${props => props.$error ? 'var(--red-orange)' : 'var(--royal-blue)'};
    box-shadow: 0 0 0 3px ${props => props.$error ? 'rgba(235, 80, 69, 0.1)' : 'rgba(63, 102, 174, 0.1)'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #f5f5f5;
  }

  &::placeholder {
    color: #999;
  }
`;

export const Input: React.FC<InputProps> = ({ type = 'text', error = false, ...props }) => {
  return (
    <StyledInput
      {...props}
      type={type}
      $error={error}
    />
  );
};
