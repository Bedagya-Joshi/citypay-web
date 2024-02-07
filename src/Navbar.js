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
import { navItems } from "../Utils/constants";
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
        <div className="itemsContainer"
        selectedKeys={isHomepage ? [] : selectedKeys}>
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
            <img src={citypay} alt="CityPayLogo"/>
      </div>
        <div className="hamburgerIconContainer" onClick={handleMenuClick}>
          {burgerActive ? <FaTimes /> : <FaBars />}
        </div>
        {navItems.map((item, index) => renderNavItems(item))}
        <div onClick={handleAgentSignupClick}>Agent Signup</div>
      </div>
      {burgerActive ? (
        <div className="navModal">
          {navItems.map((item, index) => renderNavItems(item))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;
