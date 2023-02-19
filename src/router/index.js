import { lazy, LazyExoticComponent, NamedExoticComponent, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
const LazyBoundary = (WrapComp) => (
  <Suspense fallback="loading">
    <WrapComp />
  </Suspense>
);
const MemoryUsage = lazy(() => import(/* webpackChunkName: "MemoryUsage" */ '../pages/memory-usage'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'memory-usage', 
          element: LazyBoundary(MemoryUsage),
        },
      ],
    },
  ]
);

export default router;
