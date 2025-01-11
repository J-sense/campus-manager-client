import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import { sideBarGenerator } from "../../utils/SidebarGenerator";
import { adminPaths } from "../../routes/routes.admin";
import { facultyPaths } from "../../routes/routes.faculty";
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const SideBarLayout = () => {
  const role = "faculty";
  let sideBarItems;
  switch (role) {
    case userRole.ADMIN:
      sideBarItems = sideBarGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = sideBarGenerator(facultyPaths, userRole.FACULTY);
      break;

    default:
      break;
  }
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
        items={sideBarItems}
      />
    </Sider>
  );
};

export default SideBarLayout;
