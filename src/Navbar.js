import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import AndDownload from "./Assets/gplay.png";
import IOSDownload from "./Assets/apple_pay.png";

const Navbar = () => {
    const location = useLocation();
    
    const handleAgentSignupClick = () => {
        // Redirect to the external URL when "Agent Signup" is clicked
        window.open("https://agent.citywallet.com.np/auth/signup", "_blank");
    };

    const navbarItems = [
      { name: "About" },
      { name: "Services" },
      { name: "Contact" },
      { name: "Blog" },
      { name: "Agent Signup", onClick: handleAgentSignupClick },
    //   {
    //     name: "Android Download",
    //     image: AndDownload,
    //     style: { width: "20px", height: "20px" },
    //   },
    //   {
    //     name: "IOS Download",
    //     image: IOSDownload,
    //     style: { width: "10px", height: "10px" },
    //   },
    ];


    const selectedKeys = [location.pathname];
    const isHomepage = location.pathname === "/";

    const items = navbarItems.map((item, index) => (
        <Menu.Item key={String(index + 1)}>
            {item.onClick ? (
                <span onClick={item.onClick}>{item.name}</span>
            ) : item.image ? (
                <img
                    src={item.image}
                    alt={item.name}
                    style={{ height: "70px", width: "auto" }}
                />
            ) : (
                <Link to={`/${item.name.toLowerCase()}`}>{item.name}</Link>
            )}
        </Menu.Item>
    ));

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={isHomepage ? [] : selectedKeys}
            style={{
                flex: 1,
                minWidth: 0,
                background: "linear-gradient(to left, #1096fe, #05336d)",
            }}
        >
            {items}
        </Menu>
    );
};

export default Navbar;
