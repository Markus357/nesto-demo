import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  pill?: boolean;
  size?: 'md' | 'sm';
  fullWidth?: boolean;
}

export const StyledButton = styled.button<{ $variant: 'primary'; $pill: boolean; $size: 'md' | 'sm'; $fullWidth: boolean }>`
  background: linear-gradient(120deg, var(--golden-yellow) 0%, var(--red-orange) 140%);
  border: 1px solid #666;
  border-radius: ${p => (p.$pill ? '9999px' : '4px')};
  padding: ${p => (p.$size === 'sm' ? '6px 14px' : '12px 24px')};
  font-size: ${p => (p.$size === 'sm' ? '14px' : '16px')};
  min-height: ${p => (p.$size === 'sm' ? '32px' : '44px')};
  line-height: ${p => (p.$size === 'sm' ? '1.1' : '1.2')};
  width: ${p => (p.$fullWidth ? '100%' : 'auto')};
  font-weight: 600;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover:not(:disabled) {
    background: linear-gradient(140deg, var(--golden-yellow) 0%, var(--red-orange) 140%);
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
  variant = 'primary', // Will probably add another variant
  children,
  onClick,
  disabled = false,
  type = 'button',
  pill = false,
  size = 'md',
  fullWidth = false,
}) => {
  return (
    <StyledButton
      $variant={variant}
      $pill={pill}
      $size={size}
      $fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};
