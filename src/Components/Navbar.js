import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import AndDownload from "../Assets/gplay.png";
import IOSDownload from "../Assets/apple_pay.png";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = {
    color: "white", 
    textDecoration: "none",
    transition: "color 0.3s", 
  };

  const hoverStyle = {
    color: "#1890ff", 
  };

  const handleAgentSignupClick = () => {
    window.open("https://agent.citywallet.com.np/auth/signup", "_blank");
  };

  const selectedKeys = [location.pathname];
  const isHomepage = location.pathname === "/";

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={isHomepage ? [] : selectedKeys}
      style={{
        flex: 1,
        minWidth: 0,
        background: "linear-gradient(to right, #0c72c9, #063773)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ ...linkStyle, ":hover": hoverStyle }}>
          <h4>Home</h4>
        </Link>
        <Link to="/about" style={{ ...linkStyle, ":hover": hoverStyle }}>
          <h4>About</h4>
        </Link>
        <Link to="/services" style={{ ...linkStyle, ":hover": hoverStyle }}>
          <h4>Services</h4>
        </Link>
        <Link to="/blog" style={{ ...linkStyle, ":hover": hoverStyle }}>
          <h4>Blog</h4>
        </Link>
        <Link to="/news" style={{ ...linkStyle, ":hover": hoverStyle }}>
          <h4>News And Events</h4>
        </Link>
        <a
          href="#"
          onClick={handleAgentSignupClick}
          style={linkStyle}
          activeStyle={hoverStyle}
        >
          <h4>Agent Signup</h4>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.ctxpress.citypay"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={AndDownload}
            alt="Android Download"
            style={{
              height: "45px",
              width: "120px",
            }}
          />
        </a>
        <a
          href="https://apps.apple.com/nz/app/citypay-nepal/id1643110573"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IOSDownload}
            alt="IOS Download"
            style={{
              height: "45px",
              width: "120px",
            }}
          />
        </a>
      </div>
    </Menu>
  );
};

export default Navbar;
