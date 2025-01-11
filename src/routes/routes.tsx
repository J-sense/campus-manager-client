import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Content from "../pages/Content";
import { adminPaths } from "./routes.admin";

import { routerGenerator } from "../utils/RouterGenerator";
import { facultyPaths } from "./routes.faculty";
import Login from "../pages/Login";

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
    path: "admin",
    element: <App />,
    children: routerGenerator(adminPaths),
  },
  {
    path: "faculty",
    element: <App />,
    children: routerGenerator(facultyPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
