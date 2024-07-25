import { createRouter, RouterProvider as TanStackRouterProvider } from '@tanstack/react-router';
import { routeTree } from './consts/routes';

const router = createRouter({
  routeTree: routeTree
});

export const RouterProvider = () => <TanStackRouterProvider router={router} />;
