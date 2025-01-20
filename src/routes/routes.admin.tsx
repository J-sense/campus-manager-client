import { ReactNode } from "react";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
// import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import CreateAcademciDepartment from "../pages/admin/academicManagement/CreateAcademciDepartment";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import GetAllFaculties from "../pages/admin/academicManagement/GetAllFaculties";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import Students from "../pages/admin/userManagement/Students";
// import { NavLink } from "react-router-dom";
export type TRoute = {
  path: string;
  element: ReactNode;
};
// type TAdminSideBar = {
//   key: string;
//   label: ReactNode;
//   children?: TAdminSideBar[];
// };
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashBoard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademciDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculties",
        path: "academic-faculties",
        element: <GetAllFaculties />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Student",
        path: "students",
        element: <Students />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];
// export const AdminPaths = [
//   {
//     index: true,
//     element: <AdminDashBoard />,
//   },
//   {
//     path: "dashboard",
//     element: <AdminDashBoard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
// ];
// export const adminRoutes = adminPaths2.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc; // Ensure the accumulator is returned
// }, []);
// export const adminSideBar = adminPaths2.reduce((acc: TAdminSideBar[], item) => {
//   if (item.name && item.path) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//       })),
//     });
//   }
//   return acc;
// }, []);
