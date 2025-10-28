import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { BestCardWrapper } from './BestCardWrapper';
import { ProductCard } from './ProductCard';

const meta = {
  title: 'Components/BestCardWrapper',
  component: BestCardWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A wrapper component that applies a golden yellow outline to its first child and overlays the BestBadge on the top right corner.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BestCardWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <ProductCard
        title="Fixed Rate"
        name="5 Year Fixed Conventional"
        value={5.25}
        buttonText="Select this product"
        onSelect={fn()}
      />
    ),
  },
};

export const WithLoading: Story = {
  args: {
    children: (
      <ProductCard
        title="Variable Rate"
        name="3 Year Variable Conventional"
        value={4.95}
        buttonText="Select this product"
        onSelect={fn()}
        isLoading={true}
      />
    ),
  },
};