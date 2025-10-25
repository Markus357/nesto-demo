import styled from 'styled-components';
import { colors } from '../styles/colors';

interface ButtonProps {
  variant?: 'primary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{ variant: 'primary' }>`
  background: linear-gradient(120deg, ${colors.goldenYellow} 0%, ${colors.redOrange} 100%);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover:not(:disabled) {
    background: linear-gradient(150deg, ${colors.goldenYellow} 0%, ${colors.redOrange} 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};
