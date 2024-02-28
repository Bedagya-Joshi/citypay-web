// Footer.js
import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

//Import Assets
import fb_logo from "../Assets/fb_logo.png";
import yt_logo from "../Assets/ytb.png";
import citypay from "../Assets/citypay_logo.png";
import qrcode from "../Assets/QRcode.jpeg";
import "../App.css";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        display: "flex",
        backgroundColor: "white",
        justifyContent: "space-around",
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
        <div class="infos">Email: citywallet@ctxpress.com</div>
        <div class="infos">Tel No: 00977-1-4531900 ext -116, 117, 162, 205</div>
        <div class="infos">Toll Free: +16600 11 12 13</div>
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
              href="https://www.youtube.com/@citypaynp"
              target="_blank"
              rel="noreferrer"
            >
              <img src={yt_logo} alt="Youtube" class="social-logo" />
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
        <Link to="/underconstruction">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/underconstruction">Blog</Link>
        <Link to="/underconstruction">News</Link>
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
        <Link to="https://www.citywallet.com.np">Downloads</Link>
      </div>
    </Footer>
  );
};

export default CustomFooter;