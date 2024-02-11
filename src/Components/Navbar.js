import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

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
      class="menu"
      selectedKeys={isHomepage ? [] : selectedKeys}>      
      <div className="navbarItems" class="navbarItems">

        <Link to="/">
          <div className="Logo-Image">
            <img src={citypay} alt="CityPayLogo"/>
          </div>
        </Link>

        <Link
          to="/"
          class="nav-about">
          <h4 className="navbarItems">Homie</h4>
        </Link>

        <Link
          to="/about"
          class="nav-about">
          <h4 className="navbarItems">About</h4>
        </Link>

        <Link
          to="/services"
          class="nav-about">
          <h4 className="navbarItems">Services</h4>
        </Link>

        <Link
          to="/contact"
          class="nav-about">
          <h4 className="navbarItems">Contact Us</h4>
        </Link>

        <Link
          to="/blog"
          class="nav-about">
          <h4 className="navbarItems">Blog</h4>
        </Link>

        <Link
          to="/news"
          class="nav-about">
          <h4 className="navbarItems">News And Events</h4>
        </Link>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

        <a href="#" onClick={handleAgentSignupClick} class="nav-about">
          <h4 className="navbarItems">Agent Signup</h4>
        </a>

        <button class="playstore"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.ctxpress.citypay",
              "_blank"
            )
          }
        >
          <img
            src={AndDownload}
            alt="Android Download" />
        </button>

        <button class="appstore"
          onClick={() =>
            window.open(
              "https://apps.apple.com/nz/app/citypay-nepal/id1643110573",
              "_blank"
            )}>

          <img
            src={IOSDownload}
            alt="IOS Download"/>
            
        </button>
      </div>
    </Menu>
  );
};

export default Navbar;
