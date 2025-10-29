import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { ApplicationCard } from './ApplicationCard';

const MobileWrapper = styled.div`
  width: 360px;
`;

const meta = {
  title: 'Components/ApplicationCard',
  component: ApplicationCard,
  decorators: [
    (Story) => (
      <MobileWrapper>
        <Story />
      </MobileWrapper>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A mobile-friendly application card with name bar, product, labeled details and an Edit action.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ApplicationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Alex Martin',
    email: 'alex@example.com',
    phone: '555-555-5555',
    productName: '5 Year Fixed Conventional',
    onEdit: () => {},
  },
};


