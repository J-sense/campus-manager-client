// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import { adminPaths2, adminSideBar } from "../../routes/routes.admin";
import { sideBarGenerator } from "../../utils/SidebarGenerator";

const { Header, Content, Footer, Sider } = Layout;

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
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            height: "40px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <h1
            style={{
              fontWeight: "bold",
              fontFamily: "monospace",
              color: "white",
            }}
          >
            campus manager
          </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sideBarGenerator(adminPaths2, "admin")}
        />
      </Sider>
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
