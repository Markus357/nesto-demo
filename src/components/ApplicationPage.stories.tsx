import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationPage } from './ApplicationPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Product } from '../types';

const queryClient = new QueryClient();

const meta = {
  title: 'Pages/ApplicationPage',
  component: ApplicationPage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Application page showing the selected product and a contact form. Text changes based on the mode prop.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ApplicationPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProduct = {
  id: 101,
  name: '5 Year Fixed Conventional',
  type: 'FIXED',
  term: '5_YEAR',
  bestRate: 5.25,
} as Product;

export const Complete: Story = {
  args: {
    product: mockProduct,
    initialData: {
      firstName: 'Alex',
      lastName: 'Martin',
      email: 'alex@example.com',
      phone: '555-555-5555',
    },
    onSubmit: () => {},
    mode: 'COMPLETE',
  },
};

export const Edit: Story = {
  args: {
    product: mockProduct,
    initialData: {
      firstName: 'Alex',
      lastName: 'Martin',
      email: 'alex@example.com',
      phone: '555-555-5555',
    },
    onSubmit: () => {},
    mode: 'EDIT',
  },
};

export const Loading: Story = {
  args: {
    onSubmit: () => {},
    isLoading: true,
    mode: 'COMPLETE',
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays the ApplicationPage in its loading state with no product rendered.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    onSubmit: () => {},
    isLoading: false,
    errorMessage: 'Error loading application. Please try again later.',
    mode: 'COMPLETE',
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays an error message passed via the errorMessage prop.',
      },
    },
  },
};


