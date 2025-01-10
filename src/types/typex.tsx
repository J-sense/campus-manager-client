import { ReactNode } from "react";

export type TAdminSideBar = {
  key: string;
  label: ReactNode;
  children?: TAdminSideBar[];
};
