import React, { useState } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaCross, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

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
    return (
      <div className="navModal">
        <div
          className="burgerItemsContainer"
          selectedKeys={isHomepage ? [] : selectedKeys}
        >
          <Link to={item.path}>{item.name}</Link>
        </div>
      </div>
    );
  };

  const handleMenuClick = () => {
    if (burgerActive === false) {
      setBurgerActive(true);
    } else {
      setBurgerActive(false);
    }
  };

  return (
    <>
      <div className="navMenu">
        <div className="Logo-Image">
          <img src={citypay} alt="CityPayLogo" />
        </div>
        <div className="hamburgerIconContainer" onClick={handleMenuClick}>
          {/* <div className="Logo-Image">
            <img src={citypay} alt="CityPayLogo" />
          </div> */}
          {burgerActive ? <FaTimes /> : <FaBars />}
        </div>
        {navItems.map((item, index) => renderNavItems(item, index))}
        {/* <div onClick={handleAgentSignupClick}>Agent Signup</div> */}

        <div class="downloadButtons">
          <button
            class="playstore"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.ctxpress.citypay",
                "_blank"
              )
            }
          >
            <img src={AndDownload} alt="Android Download" />
          </button>
          <button
            class="appstore"
            onClick={() =>
              window.open(
                "https://apps.apple.com/nz/app/citypay-nepal/id1643110573",
                "_blank"
              )
            }
          >
            <img src={IOSDownload} alt="IOS Download" />
          </button>
        </div>
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
