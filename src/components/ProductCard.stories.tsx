import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import { ProductCard, ProductCardWrapper } from './ProductCard';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardSizeDecorator = () => (Story: React.ComponentType) => {
  const StyledWrapper = styled(CardWrapper)`
    ${ProductCardWrapper} {
      min-height: 400px;
      max-width: 320px;
    }
  `;
  return (
    <StyledWrapper>
      <Story />
    </StyledWrapper>
  );
};

const meta = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component displaying mortgage product information with title, name, best rate value, and a select button.',
      },
    },
  },
  decorators: [CardSizeDecorator()],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed at the top of the card',
    },
    name: {
      control: 'text',
      description: 'The product name displayed in the center',
    },
    value: {
      control: { type: 'number', min: 0, max: 10, step: 0.01 },
      description: 'The interest rate value displayed prominently',
    },
    buttonText: {
      control: 'text',
      description: 'The text displayed on the select button',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback function when the select button is clicked',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FixedRate: Story = {
  args: {
    title: '5 Year Fixed',
    name: 'Standard',
    value: 3.99,
    buttonText: 'Start Application',
    onSelect: fn(),
  },
};

export const VariableRate: Story = {
  args: {
    title: '5 Year Variable',
    name: 'Value Flex (longer term, see details)',
    value: 4.59,
    buttonText: 'Start Application',
    onSelect: fn(),
  },
};
