// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Layout, theme } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

import SideBarLayout from "./SideBarLayout";

const { Header, Content, Footer } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin">Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Student",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "Create Admin",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <SideBarLayout />
      <Layout>
        <Header style={{ padding: 0, backgroundColor: "blue" }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
