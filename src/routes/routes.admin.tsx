import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashBoard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Dashboard",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Dashboard",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <CreateStudent />,
      },
    ],
  },
];
export const AdminPaths = [
  {
    index: true,
    element: <AdminDashBoard />,
  },
  {
    path: "dashboard",
    element: <AdminDashBoard />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
];
