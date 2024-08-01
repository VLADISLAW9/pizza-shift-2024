import { ROUTES } from '@constants/routes';
import { IndexPage, IndexPageLoading } from '@pages/IndexPage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute(ROUTES.INDEX)({
  component: IndexPage,
  pendingComponent: IndexPageLoading
});
