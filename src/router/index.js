import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const LazyBoundary = (WrapComp) => (
  <Suspense fallback="loading">
    <WrapComp />
  </Suspense>
);
const MemoryUsage = lazy(() =>
  import(/* webpackChunkName: "MemoryUsage" */ "../pages/memory-usage")
);
const Images = lazy(() =>
  import(/* webpackChunkName: "Images" */ "../pages/memory-usage/images")
);

const WindowOpen = lazy(() =>
  import(/* webpackChunkName: "WindowOpen" */ "../pages/window-open")
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "memory-usage",
        element: LazyBoundary(MemoryUsage),
      },
      {
        path: "window-open",
        element: LazyBoundary(WindowOpen),
      },
      {
        path: "images",
        element: LazyBoundary(Images),
      },
    ],
  },
]);

export default router;
