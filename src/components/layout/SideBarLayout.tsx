import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import { sideBarGenerator } from "../../utils/SidebarGenerator";
import { adminPaths } from "../../routes/routes.admin";

const SideBarLayout = () => {
  return (
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
        items={sideBarGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default SideBarLayout;
