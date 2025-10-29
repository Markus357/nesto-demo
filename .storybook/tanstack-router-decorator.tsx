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

// New: allow stories to specify an initial path to simulate different routes
export function storyRouterDecoratorWithPath(initialPath: string = "/__story__") {
  const rootRouteLocal = createRootRoute({ notFoundComponent: NotFoundComponent });
  const storyRouteLocal = createRoute({ path: initialPath, getParentRoute: () => rootRouteLocal, component: RenderStory });
  rootRouteLocal.addChildren([storyRouteLocal]);
  const routerLocal = createRouter({ history: createMemoryHistory({ initialEntries: [initialPath] }), routeTree: rootRouteLocal });
  return (storyFn: () => ReactNode) => (
    <CurrentStoryContext.Provider value={storyFn}>
      <RouterProvider router={routerLocal} />
    </CurrentStoryContext.Provider>
  );
}
