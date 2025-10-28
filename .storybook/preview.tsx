import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { GlobalStyle } from '../src/styles/global';
import i18n from '../src/i18n/config';
import { storyRouterDecorator } from './tanstack-router-decorator';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // Only apply router decorator to Navbar stories that need routing (breaks controls live update)
      if (context.title?.includes('Navbar')) {
        return storyRouterDecorator(() => <Story />);
      }
      return <Story />;
    },
    (Story) => {
      return (
        <I18nextProvider i18n={i18n}>
          <GlobalStyle />
          <Story />
        </I18nextProvider>
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Components',
          'Molecules',
          'Organisms',
          'Pages',
        ],
      },
    },

    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
  },
};

export default preview;