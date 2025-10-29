import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Tabs } from './Tabs';

const meta = {
  title: 'Atoms/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A pill-shaped tabs component with internal active state management. The active tab has a royal blue background.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicTabs = [
  { id: 'fixed', label: 'Fixed Rate' },
  { id: 'variable', label: 'Variable Rate' },
];

const threeTabs = [
  { id: 'best', label: 'Best Rate' },
  { id: 'most', label: 'Most Flexible' },
  { id: 'lowest', label: 'Lowest Payment' },
];

export const Default: Story = {
  args: {
    tabs: basicTabs,
    onTabChange: fn(),
  },
};

export const WithThreeTabs: Story = {
  args: {
    tabs: threeTabs,
    onTabChange: fn(),
  },
};

export const WithDefaultTab: Story = {
  args: {
    tabs: basicTabs,
    onTabChange: fn(),
    defaultTab: 'variable',
  },
};
