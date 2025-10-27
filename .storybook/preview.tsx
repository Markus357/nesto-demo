import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { GlobalStyle } from '../src/styles/global';
import i18n from '../src/i18n/config';

const preview: Preview = {
  decorators: [
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
    }
  },
};

export default preview;