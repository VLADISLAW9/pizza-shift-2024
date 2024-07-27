import { createRouter, RouterProvider as TanStackRouterProvider } from '@tanstack/react-router';

import { routeTree } from './constants/routes';

const router = createRouter({
  routeTree
});

export const RouterProvider = () => <TanStackRouterProvider router={router} />;
