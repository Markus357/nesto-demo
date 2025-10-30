# Nesto Mortgage SPA — Demo Microsite

Welcome! This demo microsite showcases a small React single‑page application and an accompanying design system prepared for Nesto by Mark Davidson.

For your convenience, the microsite and design system are both deployed to Netlify:

[Mortgage Application Microsite](https://nesto-microsite-demo.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fe741299-86cf-4176-b787-857af548c63f/deploy-status)](https://app.netlify.com/projects/nesto-microsite-demo/deploys)

[Storybook Design System](https://nesto-storybook.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/88cebcbe-3bce-4af4-978b-2121ffb24b6a/deploy-status)](https://app.netlify.com/projects/nesto-storybook/deploys)

## Quick start

Prerequisites:
- Node.js 20+ and npm 9+

Install dependencies:

```bash
npm install
```

### Run the app (Vite dev server)

```bash
npm run dev
```

Then open `http://localhost:5173`.

### Run the design system (Storybook)

```bash
npm run storybook
```

Then open `http://localhost:6006`.

### Build and preview

```bash
npm run build
npm run preview
```

## Tech stack (overview)

- React 19 + TypeScript
- Vite 7 for dev/build
- TanStack Router v1 for routing (`src/routes`)
- TanStack Query v5 for data fetching/caching
- Styled‑Components 6 for styling and theming (`src/styles`)
- Zustand for lightweight state (`src/store`)
- React Hook Form for forms
- i18next + react‑i18next for i18n (`src/i18n`)
- Storybook 9 for the design system (`*.stories.tsx`)
- Vitest for unit tests, Playwright for e2e tests
- ESLint for linting

## Useful scripts

- `npm run dev`: start app locally
- `npm run storybook`: start Storybook
- `npm run build`: type‑check and build the app
- `npm run preview`: preview the production build
- `npm run test`: run unit tests
- `npm run test:e2e`: run Playwright tests

## Project layout

- `src/components`: UI components and Storybook stories
- `src/routes`: route files for pages
- `src/api`: simple API clients
- `src/hooks`: reusable hooks (queries, media queries, etc.)
- `src/styles`: theme, globals, responsive helpers
- `src/i18n`: translations and config
- `src/store`: app state with Zustand

## Preview

![Nesto Mortgage Application](./Nesto%20Mortgage%20Application.jpeg)
