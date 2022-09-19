import React from "react";
import { Link } from "react-router-dom";
import { Popover, Avatar } from "antd";
import { loginWithEmailPass, logoutEmailUser } from "../../auth/fbeauth";

const ProfileMenu = () => {
  const handleLogout = (event) => {
    event.preventDefault();
    console.log("logging out 00");
    logoutEmailUser();
  };
  const content = (
    <Link to="/" onClick={handleLogout}>
      Logout
    </Link>
  );
  return (
    <div style={{ float: "right", color: "#235BA8" }}>
      <Popover placement="topRight" content={content} trigger="click">
        <b style={{ marginRight: "10px" }}>
          {/* {firstName} {lastName} */} UserName
        </b>
        <Avatar size="large" style={{ color: "#235BA8" }}>
          {/* {firstName.charAt(0)}
          {lastName.charAt(0)} */}
        </Avatar>
      </Popover>
    </div>
  );
};
export default ProfileMenu;
