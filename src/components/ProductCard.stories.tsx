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

const CardHeightDecorator = (minHeight: number = 300) => (Story: React.ComponentType) => {
  const StyledWrapper = styled(CardWrapper)`
    ${ProductCardWrapper} {
      min-height: ${minHeight}px;
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
  decorators: [CardHeightDecorator(400)],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed above product name',
    },
    name: {
      control: 'text',
      description: 'Product name',
    },
    value: {
      control: 'number',
      description: 'Best rate value',
    },
    buttonText: {
      control: 'text',
      description: 'Text for the action button',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback when product is selected',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state for the button',
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FixedRate: Story = {
  args: {
    title: 'Best Fixed',
    name: '5 Year Fixed Rate',
    value: 3.99,
    buttonText: 'Start Application',
    onSelect: fn(),
  },
};

export const VariableRate: Story = {
  args: {
    title: 'Best Variable',
    name: '5 Year Variable Rate',
    value: 4.59,
    buttonText: 'Start Application',
    onSelect: fn(),
  },
};
 