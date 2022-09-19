import { Layout, Menu} from "antd";
import {getUserInfo} from "../../auth/fbeauth"

const {Sider} = Layout;

import React, { useState } from "react";

import "./style.css"
import { useNavigate } from "react-router-dom";





  
 const usr = getUserInfo();
 
 const handleCollablse =(value) =>{
    console.log(value);
    //setCollapsed(value);
 }
function LeftSlider() {
  let navigate = useNavigate();
  const handleMenuClickEvent =(event) =>{
    console.log(event);
    console.log(event.key);
    
    let key = event.key;
    if(key === "home" || key ==="login"){
      navigate("/", {replace: true});
    }else{
      navigate("/"+key, {replace: true});
    }
    
  }
  const items = [
    { label: 'Home', key: 'home',  onClick: handleMenuClickEvent}, // remember to pass the key prop
    { label: 'About Us', key: 'aboutus' , onClick: handleMenuClickEvent}, 
    {
      label: 'Services',
      key: 'submenu',
      children: [
        { label: 'Development', key: 'development' , onClick: handleMenuClickEvent},
        { label: 'Data Analysis', key: 'analysis' , onClick: handleMenuClickEvent},
        { label: 'Consulting', key: 'consult' , onClick: handleMenuClickEvent}]
    },
    { label: 'Contact Us', key: 'contactus' , onClick: handleMenuClickEvent},
    { label: 'Employee Login', key: 'login', onClick: handleMenuClickEvent }
  ];
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