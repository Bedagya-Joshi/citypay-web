import React, { useState } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
<<<<<<< HEAD
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaCross, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
=======
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771

import citypay from "../Assets/citypay_logo.png";
import AndDownload from "../Assets/gplay.png";
import IOSDownload from "../Assets/apple_pay.png";
import { navItems } from "../utils/constants.js";
import { FaHamburger } from "react-icons/fa";
// import { divIcon } from "leaflet";
// import { divIcon } from "leaflet";
// import { divIcon } from "leaflet";


const Navbar = () => {
  const location = useLocation();

  const handleAgentSignupClick = () => {
    window.open("https://agent.citywallet.com.np/auth/signup", "_blank");
  };

  const selectedKeys = [location.pathname];
  const isHomepage = location.pathname === "/";
  const [burgerActive, setBurgerActive] = useState(false);

  const renderNavItems = (item) => {
    return (
      <div className="navBarItemsContainer">
        <div
          className="itemsContainer"
          selectedKeys={isHomepage ? [] : selectedKeys}
        >
          <Link to={item.path}>{item.name}</Link>
        </div>
      </div>
    );
  };

  // burger menu 
  const burgerNavItems = (item) => {
    return(
      <div className="navModal">
        <div
          className="burgerItemsContainer"
          selectedKeys={isHomepage ? [] : selectedKeys}
        >
          <Link to={item.path}>{item.name}</Link>
        </div>
      </div>
    )
  }

  const handleMenuClick = () => {
    if (burgerActive === false) {
      setBurgerActive(true);
    } else {
      setBurgerActive(false);
    }
  };

  return (
<<<<<<< HEAD
    <>
      <div className="navMenu">
        <div className="Logo-Image">
          <img src={citypay} alt="CityPayLogo" />
        </div>
        <div className="hamburgerIconContainer" onClick={handleMenuClick}>
          {burgerActive ? <FaTimes /> : <FaBars />} 
        </div>
        {navItems.map((item, index) => renderNavItems(item, index))}
        <div onClick={handleAgentSignupClick}>Agent Signup</div>
        <button
          class="playstore"
=======
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
          <h4 className="navbarItems">Home</h4>
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
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.ctxpress.citypay",
              "_blank"
            )
          }
        >
<<<<<<< HEAD
          <img src={AndDownload} alt="Android Download" />
        </button>
        <button
          class="appstore"
=======
          <img
            src={AndDownload}
            alt="Android Download" />
        </button>

        <button class="appstore"
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
          onClick={() =>
            window.open(
              "https://apps.apple.com/nz/app/citypay-nepal/id1643110573",
              "_blank"
<<<<<<< HEAD
            )
          }
        >
          <img src={IOSDownload} alt="IOS Download" />
=======
            )}>

          <img
            src={IOSDownload}
            alt="IOS Download"/>
            
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
        </button>
      </div>
      {burgerActive ? (
        <div className="navModal">
          {/* <div class="burgerInactiveClass"> */}
            {navItems.map((item, index) => burgerNavItems(item))}
          {/* </div> */}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;
