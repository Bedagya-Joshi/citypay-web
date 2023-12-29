// Footer.js
import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

//Import Assets
import fb_logo from "../Assets/fb_logo.png";
import ig_logo from "../Assets/ig_logo.png";
import citypay from "../Assets/citypay_logo.png";
import qrcode from "../Assets/QRcode.jpeg";

// import MapComponent from "./MapComponent";


const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        display: "flex",
        backgroundColor: "#f0f0f0",
        justifyContent: "space-between",
      }}
    >
      <div
        className="Logo Image"
        style={{ display: "flex", flexDirection: "column", gap:"10px" }}
      >
        <img
          src={citypay}
          alt="CityPayLogo"
          style={{ height: "70px", width: "auto" }}
        />
        <img
          src={qrcode}
          alt="QR Scan"
          style={{ height: "70px", width: "auto" }}
        />
      </div>
      <div
        className="ContactUs"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div>Email:citypaywallet@gmail.com</div>
        <div>Tel No:+977 23213123321</div>
        <div>Toll Free:+128321412412</div>
        <div>Location: Kamaladi, Kathmandu, Nepal</div>
      </div>
      <div className="Connect">
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Implement map */}
          <div className="Map">
            {/* <MapComponent /> */}
          </div>
          <div>Connect with us:</div>
          <a
            href="https://www.facebook.com/citypaydigital"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={fb_logo}
              alt="Facebook"
              style={{ height: "35px", width: "auto", margin: "10px" }}
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img
              src={ig_logo}
              alt="Instagram"
              style={{ height: "35px", width: "auto", margin: "10px" }}
            />
          </a>
        </div>
      </div>
      <div
        className="NavBar Content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/news">News</Link>
        <a
          href="https://agent.citywallet.com.np/auth/signup"
          target="_blank"
          rel="noreferrer"
        >
          Agent Signup
        </a>
      </div>
      <div
        className="Footer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Link to="/faq">FAQ</Link>
        <Link to="/ourTeam">Our Team</Link>
        <a
          href="https://agent.citywallet.com.np/auth/signup"
          target="_blank"
          rel="noreferrer"
        >
          Become an Agent
        </a>
        <Link to="/legal">Legal</Link>
        <Link to="/downloads">Downloads</Link>
      </div>
    </Footer>
  );
};

export default CustomFooter;
