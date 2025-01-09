export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "AdminDashBoard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CreateAdmin",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CreateFaculty",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CreateStudent",
      },
    ],
  },
];
const newArray = adminPaths2.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: "NavLink",
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: "NavLink",
      children: item.children.map((child) => ({
        key: child.name,
        label: "NavLink",
      })),
    });
  }
  console.log(acc);
  return acc;
}, []);
console.log(JSON.stringify(newArray));
