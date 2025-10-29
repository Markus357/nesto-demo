import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LoaderCircle } from 'lucide-react';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoadingSpinnerWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--royal-blue);
`;

const SpinnerIcon = styled(LoaderCircle)`
  animation: ${spin} 1s linear infinite;
  display: block;
`;

type LoadingSpinnerProps = {
  size?: number; // pixel size of the icon (width/height)
  ariaLabel?: string;
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 24,
  ariaLabel = 'Loading',
}) => {
  return (
    <LoadingSpinnerWrapper aria-label={ariaLabel} role="status">
      <SpinnerIcon
        width={size}
        height={size}
        color="currentColor"
        aria-hidden="true"
        focusable="false"
      />
    </LoadingSpinnerWrapper>
  );
};


