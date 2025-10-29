import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ProductCardGrid } from './ProductCardGrid';

const meta = {
  title: 'Organisms/ProductCardGrid',
  component: ProductCardGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A grid layout component that displays multiple ProductCards in a responsive grid.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Reusable product mocks
const fixedRateProduct = {
  title: 'Best Fixed',
  name: '5 Year Fixed Rate',
  value: 3.99,
  onSelect: fn(),
};

const variableRateProduct = {
  title: 'Best Variable',
  name: '5 Year Variable Rate',
  value: 4.59,
  onSelect: fn(),
};

const flexibleRateProduct = {
  title: 'Most Flexible',
  name: '3 Year Open Rate',
  value: 5.25,
  onSelect: fn(),
};

export const Default: Story = {
  args: {
    products: [fixedRateProduct, variableRateProduct],
  },
};

export const ThreeProducts: Story = {
  args: {
    products: [fixedRateProduct, variableRateProduct, flexibleRateProduct],
  },
};

export const WithCustomButtonText: Story = {
  args: {
    products: [
      { ...fixedRateProduct, buttonText: 'Apply Now' },
      { ...variableRateProduct, buttonText: 'Learn More' },
    ],
  },
};

export const WithLoadingState: Story = {
  args: {
    products: [
      { ...fixedRateProduct, isLoading: true, loadingButtonText: 'Submitting…' },
      variableRateProduct,
    ],
  },
};
