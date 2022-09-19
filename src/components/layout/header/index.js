import { Layout, Menu, PageHeader } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
const { Header } = Layout;
import React from "react";
import Employee from "../../../pages/sampletable";
import ProfileMenu from "../profile";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  let navigate = useNavigate();
  const handleSampleAPIClickEvent =(event) =>{
    console.log(event);
    console.log(event.key);
    navigate("/employee", {replace: true});    
    
  }
  return (
    <Header>
      <div className="row">
        <div className="col-6">
          <Menu theme="dark" mode="horizontal" style={{ width: "50vw" }}>
            <Menu.Item key={"employee"} onClick={handleSampleAPIClickEvent}>Sample Data API</Menu.Item>
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
