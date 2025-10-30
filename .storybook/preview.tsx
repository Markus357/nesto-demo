import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { createGlobalStyle } from 'styled-components';
import { colorVariables } from '../src/styles/colors';
import i18n from '../src/i18n/config';
import { storyRouterDecoratorWithPath } from './tanstack-router-decorator';

const GlobalStyle = createGlobalStyle`
  :root {
    ${colorVariables}
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--white);
    color: var(--deep-navy);
    line-height: 1.6;
  }
`;

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // Use a router decorator with an optional initial path provided per-story
      if (context.title?.includes('Navbar')) {
        const initialPath = context.parameters?.routerInitialPath ?? '/__story__';
        const Decorator = storyRouterDecoratorWithPath(initialPath);
        return Decorator(() => <Story />);
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
          'Atoms',
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