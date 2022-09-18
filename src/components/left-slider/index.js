import { Layout, Menu} from "antd";
import "./left-slider.css";
const {Sider} = Layout;

import React, { useState } from "react";


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
  const [collapsed, setCollapsed] = useState(false);
 //const collapsed =false;
 
 const handleCollablse =(value) =>{
    console.log(value);
    //setCollapsed(value);
 }
function LeftSlider() {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo"> CHATENI </div>
        <Menu theme="dark"
            mode="inline" items={items} 
            defaultSelectedKeys={['home']}>

        </Menu>
    </Sider>
  );
}

export default LeftSlider;
