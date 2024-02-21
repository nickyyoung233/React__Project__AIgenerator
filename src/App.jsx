import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import HomePage from "./pages/HomePage";
import GoodsPage from "./pages/GoodsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },

      {
        path: "/goods",
        element: <GoodsPage />,
      },
      { path: "/tools", element: <HomePage /> },
      {
        path: "/source",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <HomePage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
