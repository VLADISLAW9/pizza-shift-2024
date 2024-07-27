import { Layout } from '@components/Layout/Layout';
import { Routes } from '@constants/routes';
import { AuthPage } from '@pages/AuthPage';
import { HomePage } from '@pages/HomePage';
import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  )
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.HOME,
  component: () => <HomePage />
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.AUTH,
  component: () => <AuthPage />
});

export const routeTree = rootRoute.addChildren([homeRoute, authRoute]);
