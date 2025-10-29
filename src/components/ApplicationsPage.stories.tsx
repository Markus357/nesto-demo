import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationsPage } from './ApplicationsPage';
import type { Application } from '../types/api';
import type { Product } from '../types';

const meta = {
  title: 'Pages/ApplicationsPage',
  component: ApplicationsPage,
  parameters: {
    docs: {
      description: {
        component:
          'Applications list page rendering applications with columns for Full Name, Email, Phone, Product and an Edit action.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ApplicationsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProducts: Product[] = [
  ({ id: 1, name: 'Nesto 5yr Fixed' } as unknown) as Product,
  ({ id: 2, name: 'Nesto 3yr Variable' } as unknown) as Product,
];

const mockApplications: Application[] = [
  {
    id: 'app_1',
    token: 'tok_1',
    type: 'NEW',
    applicants: [
      { firstName: 'Alice', lastName: 'Anderson', email: 'alice@example.com', phone: '123-456-7890' },
    ],
    productId: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'app_2',
    token: 'tok_2',
    type: 'RENEWAL',
    applicants: [
      { firstName: 'Bob', lastName: 'Baker', email: 'bob@example.com', phone: '987-654-3210' },
    ],
    productId: 2,
    createdAt: new Date().toISOString(),
  },
];

export const Default: Story = {
  args: {
    applications: mockApplications,
    products: mockProducts,
    onEditApplication: (id: string) => {
      // eslint-disable-next-line no-console
      console.log('Edit application clicked:', id);
    },
  },
};


