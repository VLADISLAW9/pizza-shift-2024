import { lazy, Suspense } from 'react';

import { HomePageSkeleton } from './components/HomePageSkeleton';

const HomePage = lazy(() => import('./HomePage'));

export const HomePageAsync = () => (
  <Suspense fallback={<HomePageSkeleton />}>
    <HomePage />
  </Suspense>
);
