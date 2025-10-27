import React, {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  useRouterState,
  type NotFoundRouteProps,
} from "@tanstack/react-router";

function RenderStory() {
  const storyFn = useContext(CurrentStoryContext);
  if (!storyFn) {
    throw new Error("Storybook root not found");
  }
  return storyFn();
}

export const CurrentStoryContext = createContext<(() => ReactNode) | undefined>(undefined);

function NotFoundComponent(_props: NotFoundRouteProps) {
  const state = useRouterState();
  return (
    <div>
      <i>Warning:</i> Simulated route not found for path <code>{state.location.href}</code>
    </div>
  );
}

const storyPath = "/__story__";
const storyRoute = createRoute({
  path: storyPath,
  getParentRoute: () => rootRoute,
  component: RenderStory,
});

const rootRoute = createRootRoute({
  notFoundComponent: NotFoundComponent,
});
rootRoute.addChildren([storyRoute]);

export const storyRouter = createRouter({
  history: createMemoryHistory({ initialEntries: [storyPath] }),
  routeTree: rootRoute,
});

export function storyRouterDecorator(storyFn: () => ReactNode) {
  return (
    <CurrentStoryContext.Provider value={storyFn}>
      <RouterProvider router={storyRouter} />
    </CurrentStoryContext.Provider>
  );
}
