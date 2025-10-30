import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ProductsPage } from './ProductsPage';
import type { Product } from '../types';
import hexBg from '../assets/what-the-hex.png';

const meta = {
  title: 'Pages/ProductsPage',
  component: ProductsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The products page displaying mortgage products with fixed and variable rate tabs.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', backgroundImage: `url(${hexBg})`, backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProducts = [
  {
    id: 1,
    name: "5 Year Fixed Conventional",
    type: "FIXED",
    term: "5_YEAR",
    bestRate: 4.95,
  },
  {
    id: 2,
    name: "3 Year Variable Conventional",
    type: "VARIABLE",
    term: "3_YEAR",
    bestRate: 5.25,
  },
  {
    id: 3,
    name: "10 Year Fixed High Ratio",
    type: "FIXED",
    term: "10_YEAR",
    bestRate: 5.45,
  },
] as Product[];

export const Default: Story = {
  args: {
    products: mockProducts,
    onProductTypeChange: fn(),
    onProductSelect: fn(),
  },
};

export const Loading: Story = {
  args: {
    products: [],
    isLoading: true,
    onProductTypeChange: fn(),
    onProductSelect: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays the ProductsPage in its loading state.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    products: [],
    isLoading: false,
    errorMessage: 'Error loading products. Please try again later.',
    onProductTypeChange: fn(),
    onProductSelect: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays an error message passed via the errorMessage prop.',
      },
    },
  },
};
