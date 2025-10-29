import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface TableProps {
  children: React.ReactNode;
}

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  $highlight?: boolean;
}

interface HeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

interface CellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.thead`
  background-color: var(--royal-blue);
`;

const rowHighlight = keyframes`
  0% { background-color: #fff5b8; }
  100% { background-color: transparent; }
`;

const StyledRow = styled.tr<{ $highlight?: boolean }>`
  transition: background-color 0.2s ease-in-out;
  
  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }

  ${props => props.$highlight && css`
    animation: ${rowHighlight} 3200ms ease-out;
  `}
`;

const StyledHeaderCell = styled.th`
  padding: 16px 24px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StyledCell = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  color: var(--deep-navy);
`;

const StyledBody = styled.tbody`
  background-color: var(--white);
`;

export const Table: React.FC<TableProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};

export const Row: React.FC<RowProps> = ({ children, ...props }) => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return <StyledHeaderCell {...props}>{children}</StyledHeaderCell>;
};

export const Cell: React.FC<CellProps> = ({ children, ...props }) => {
  return <StyledCell {...props}>{children}</StyledCell>;
};
