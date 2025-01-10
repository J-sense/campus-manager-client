import { ReactNode } from "react";
import { TRoute } from "../routes/routes.admin";
type TRouterPath = {
  name: string;
  path?: string;
  element: ReactNode;
  children?: TRouterPath[];
};
export const routerGenerator = (items: TRouterPath[]) => {
  const adminRoutes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc; // Ensure the accumulator is returned
  }, []);
  return adminRoutes;
};