import { NavLink } from "react-router-dom";
// import { TAdminSideBar } from "../types/typex";
import { ReactNode } from "react";
import { TAdminSideBar } from "../types/typex";
interface AdminPath {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: AdminPath[]; // Optional property for nested paths
}

export const sideBarGenerator = (items: AdminPath[], role: string) => {
  const sideBar = items.reduce((acc: TAdminSideBar[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sideBar;
};
