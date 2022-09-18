import { Layout, Menu, PageHeader } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
const { Header } = Layout;
import React from "react";
import ProfileMenu from "../profile";
Layout;
function AppHeader() {
  return (
    <Header>
      <div className="row">
        <div className="col-6">
          <Menu theme="dark" mode="horizontal" style={{ width: "50vw" }}>
            <Menu.Item>item 1</Menu.Item>
            <Menu.Item>item 2</Menu.Item>
            <Menu.Item>item 3</Menu.Item>
          </Menu>
        </div>
        <div className="col-2" style={{ marginLeft: "300px" }}>
          <ProfileMenu />
        </div>
      </div>
    </Header>
  );
}

export default AppHeader;
