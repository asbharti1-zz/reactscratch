import { Layout, Menu} from "antd";
import {getUserInfo} from "../../auth/fbeauth"

const {Sider} = Layout;

import React, { useState } from "react";

import "./style.css"
const items = [
    { label: 'Home', key: 'home'}, // remember to pass the key prop
    { label: 'About Us', key: 'aboutus' }, 
    {
      label: 'Services',
      key: 'submenu',
      items: [
        { label: 'Development', key: 'appdev' },
        { label: 'Data Analysis', key: 'analys' },
        { label: 'Consultation', key: 'consult' }]
    },
    { label: 'Contact Us', key: 'contact' },
    { label: 'Employee Login', key: 'login' }
  ];
  const handleMenuClickEvent =(event) =>{
    console.log(event);
  }

 const usr = getUserInfo();
 
 const handleCollablse =(value) =>{
    console.log(value);
    //setCollapsed(value);
 }
function LeftSlider() {
  const [collapsed, setCollapsed] = useState(false);
  console.log("User in Slider",usr);
  return (
    <Sider collapsible 
    collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
    style={{
      overflow: 'auto',
      height: '100vh',     
    }}>
        <div className="logo"> CHATENI </div>
        <Menu theme="dark"
            mode="inline" items={items} 
            defaultSelectedKeys={['home']}>

        </Menu>
    </Sider>
  );
}

export default LeftSlider;