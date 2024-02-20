// Footer.js
import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

//Import Assets
import fb_logo from "../Assets/fb_logo.png";
import ig_logo from "../Assets/ig_logo.png";
import citypay from "../Assets/citypay_logo.png";
import qrcode from "../Assets/QRcode.jpeg";
import "../App.css";

// import MapComponent from "./MapComponent";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer
      style={{
        // marginTop: "125px",
        textAlign: "center",
        display: "flex",
        backgroundColor: "white",
        justifyContent: "space-around",
        // borderTop:"1px solid black",
        boxShadow: "1px 60px 100px 1px grey",
      }}
    >
      <div class="Logo-Image">
        <img src={citypay} alt="CityPayLogo" class="footer-img" />
        <img src={qrcode} alt="QR Scan" class="footer-img" />
      </div>

      <div
        className="ContactUs"
        style={{
          fontFamily: "catamaran, sans-serif",
          fontSize: "15px",
          fontWeight: "Medium",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          columnGap: "5px",
          justifyContent: "space-between",
          textAlign: "left",
        }}
      >
        <div class="infos">Email:citypaywallet@gmail.com</div>
        <div class="infos">Tel No:+977 23213123321</div>
        <div class="infos">Toll Free:+128321412412</div>
        <div class="infos">Location: Kamaladi, Kathmandu, Nepal</div>
      </div>
      <div className="Connect">
        <div
          style={{
            fontFamily: "catamaran, sans-serif",
            fontSize: "17px",
            fontWeight: "Bold",
            marginTop: "50px",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Implement map */}
          <div className="Map">{/* <MapComponent /> */}</div>
          <div class="con">Connect with us:</div>
          <div class="social">
            <a
              href="https://www.facebook.com/citypaydigital"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fb_logo} alt="Facebook" class="social-logo" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ig_logo} alt="Instagram" class="social-logo" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="NavBar Content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          textAlign: "left",
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
          alignItems: "flex-start",
          justifyContent: "space-between",
          textAlign: "left",
        }}
      >
        <Link to="/underconstruction">FAQ</Link>
        <Link to="/underconstruction">Our Team</Link>
        <a
          href="https://agent.citywallet.com.np/auth/signup"
          target="_blank"
          rel="noreferrer"
        >
          Become an Agent
        </a>
        <Link to="/underconstruction">Legal</Link>
        <Link to="/underconstruction">Downloads</Link>
      </div>
    </Footer>
  );
};

export default CustomFooter;
