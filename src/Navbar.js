import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const navbarItemNames = [
        "About",
        "Services",
        "Contact",
        "Blog",
        "Agent Signup",
    ];

    const handleAgentSignupClick = () => {
        // Redirect to the external URL when "Agent Signup" is clicked
        window.open("https://agent.citywallet.com.np/auth/signup", "_blank");
    };

    const selectedKeys = [location.pathname];

    // const selectedKeys = [location.pathname];
    const isHomepage = location.pathname === "/";

    const items = navbarItemNames.map((item, index) => (
        <Menu.Item key={String(index + 1)}>
        {item === "Agent Signup" ? (
            <span onClick={handleAgentSignupClick}>{item}</span>
        ) : (
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
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
