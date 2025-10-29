import React from 'react';
import styled from 'styled-components';

export const ErrorMessageWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const ErrorHeading = styled.h3`
  color: var(--red-orange);
  margin: 0;
`;

type ErrorMessageProps = {
  message: string;
  className?: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className }) => {
  if (!message) return null;
  return (
    <ErrorMessageWrapper className={className}>
      <ErrorHeading>{message}</ErrorHeading>
    </ErrorMessageWrapper>
  );
};


