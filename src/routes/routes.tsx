import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Content from "../pages/Content";
import AdminLayout from "../pages/admin/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/content",
        element: <Content />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <AdminLayout />,
      },
    ],
  },
]);
export default router;
