import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import citypay from "../Assets/citypay_logo.png";
import AndDownload from "../Assets/gplay.png";
import IOSDownload from "../Assets/apple_pay.png";

const Navbar = () => {
  const location = useLocation();

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
        background: "#0e83e3",
      }}
    >
      <div
        className="navbarItems"
        style={{
          display: "flex",
          flexDirection: "row",
          // flexWrap: "nowrap",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(#0e83e3,#F5F5F5 99%)",
          border:"none",
          gap: "50px",
        }}
      >
          <Link to="/">
            <div className="Logo Image">
              <img
                src={citypay}
                alt="CityPayLogo"
                style={{ paddingTop: "15px", height: "90px", width: "90px", marginLeft:"15px"}}
              />
            </div>
          </Link>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <h4 className="navbarItems">Home</h4>
        </Link>
        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <h4 className="navbarItems">About</h4>
        </Link>
        <Link
          to="/services"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <h4 className="navbarItems">Services</h4>
        </Link>
        <Link
          to="/blog"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <h4 className="navbarItems">Blog</h4>
        </Link>
        <Link
          to="/news"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <h4 className="navbarItems">News And Events</h4>
        </Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          onClick={handleAgentSignupClick}
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          <h4 className="navbarItems">Agent Signup</h4>
        </a>
        <button
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.ctxpress.citypay",
              "_blank"
            )
          }
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <img
            src={AndDownload}
            alt="Android Download"
            style={{
              height: "45px",
              width: "130px",
            }}
          />
        </button>
        <button
          onClick={() =>
            window.open(
              "https://apps.apple.com/nz/app/citypay-nepal/id1643110573",
              "_blank"
            )
          }
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <img
            src={IOSDownload}
            alt="IOS Download"
            style={{
              height: "45px",
              width: "130px",
            }}
          />
        </button>
      </div>
    </Menu>
  );
};

export default Navbar;
