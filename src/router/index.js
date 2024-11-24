import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const LazyBoundary = (WrapComp) => (
  <Suspense fallback="loading">
    <WrapComp />
  </Suspense>
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
        path: "/",
        element: LazyBoundary(WindowOpen),
      },
    ],
  },
]);

export default router;
