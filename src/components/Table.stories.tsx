import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, Row, Header, Cell } from './Table';

const meta = {
  title: 'Molecules/Table',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A basic table component with header, rows, and cells. Exports TableHeader, TableBody, Row, Header, and Cell subcomponents for flexible table construction.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <Row>
          <Header>Application ID</Header>
          <Header>Product Name</Header>
          <Header>Rate</Header>
          <Header>Date</Header>
        </Row>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>APP-001</Cell>
          <Cell>5 Year Fixed Rate</Cell>
          <Cell>3.99%</Cell>
          <Cell>2024-01-15</Cell>
        </Row>
        <Row>
          <Cell>APP-002</Cell>
          <Cell>5 Year Variable Rate</Cell>
          <Cell>4.59%</Cell>
          <Cell>2024-01-16</Cell>
        </Row>
        <Row>
          <Cell>APP-003</Cell>
          <Cell>3 Year Open Rate</Cell>
          <Cell>5.25%</Cell>
          <Cell>2024-01-17</Cell>
        </Row>
      </TableBody>
    </Table>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <Row>
          <Header>Application ID</Header>
          <Header>Status</Header>
          <Header>Date</Header>
        </Row>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell colSpan={3} style={{ textAlign: 'center', color: '#999' }}>
            No applications found
          </Cell>
        </Row>
      </TableBody>
    </Table>
  ),
};
