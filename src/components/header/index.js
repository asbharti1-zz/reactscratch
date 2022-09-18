import { Layout, Menu, PageHeader} from "antd";

const {Header} = Layout;

import React from "react";
Layout
function AppHeader() {
  return (
   
        <Header >
            {/* <PageHeader> */}
                <Menu theme="dark" mode="horizontal">
                  <Menu.Item>item 1</Menu.Item>
                  <Menu.Item>item 2</Menu.Item>
                  <Menu.SubMenu title="sub menu">
                    <Menu.Item>item 3</Menu.Item>
                  </Menu.SubMenu>
                </Menu>
                <div>
                  
                </div>
            {/* </PageHeader> */}
        </Header>
  );
}

export default AppHeader;
