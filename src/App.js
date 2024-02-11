import React, { useState, useEffect, Component } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
=======
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
import { Layout, theme, Button, Card, Col, Row } from "antd";
import "./App.css";


//Assets Import
<<<<<<< HEAD
import bankvector from "./Assets/request.jpg";
import cashinhand from "./Assets/payment.jpg";
import cityexpress from "./Assets/cityexpress.png";
import cell from "./Assets/cell.jpg";
import bank from "./Assets/bank.jpg";
=======
import bankvector from "./Assets/cityremit.png";
import cashinhand from "./Assets/payment-1.png";
import cityexpress from "./Assets/cityexpress.png";
import cell from "./Assets/cell.png";
import simpson from "./Assets/simpson.png";
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
import youtube from "./Assets/youtube.png";
import atm from "./Assets/atm.png";
import ytb from "./Assets/ytb.png";
import coin from "./Assets/coin.png";

//Pages Import
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import BlogPage from "./Pages/BlogPage";
import NewsPage from "./Pages/NewsPage";
import FAQPage from "./Pages/FAQPage";
import OurTeamPage from "./Pages/OurTeamPage";
import LegalPage from "./Pages/LegalPage";
import DownloadPage from "./Pages/DownloadPage";
<<<<<<< HEAD

=======
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771

//Component Import
import CarouselItem from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
<<<<<<< HEAD
import SizeContext from "antd/es/config-provider/SizeContext";

const { Header, Content } = Layout;





=======

const { Header, Content } = Layout;

>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
const App = () => {

  return (
    <Router>
<<<<<<< HEAD
      <Layout style={{ backgroundColor: 'white', margin: "0", padding: "0" }}>
        <Header class="header">
          <ScrollToTop />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Logo For CityPay */}
          {/* Navbar Import */}
          <div className="navbar_bot">
            <Navbar selectedKey="1" />
          </div>
        </Header>

=======
      <Layout style={{ backgroundColor: "white" }}>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
        <Content style={{ padding: "0 48px" }}>
          {/* Define Routes for Page */}
          <Routes>
            <Route
<<<<<<< HEAD
              exact path="/"
              element={
                <div class="body-container">


=======
              exact
              path="/"
              element={
                <div class="body-container">
                  <Header class="header">
                    <ScrollToTop />
                    <meta
                      name="viewport"
                      content="width=device-width, initial-scale=1.0"
                    />
                    {/* Logo For CityPay */}
                    {/* Navbar Import */}
                    <div className="navbar_bot">
                      <Navbar selectedKey="1" />
                    </div>
                  </Header>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771

                  <div class="carousel-container">
                    <CarouselItem />
                  </div>

                  {/* Section 1 */}

                  <div class="Main-container">
                    <div class="grid-1">
                      <div className="title">
<<<<<<< HEAD
                        <span class="highlight"> CityPay</span> <span class="lowlight">to Friends and Family</span>
                      </div>
                      <div className="landing-page-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.
=======
                        <span class="highlight"> CityPay</span>{" "}
                        <span class="lowlight">to Friends and Family</span>
                      </div>
                      <div className="landing-page-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tortor tortor, venenatis a arcu id, semper ultricies
                        enim. Aliquam turpis tellus, venenatis sit amet mattis
                        a, viverra ac lorem. In condimentum quam ut nibh congue
                        fermentum. Duis quis pulvinar lectus, a aliquam massa.
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>
                    </div>

                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={bankvector} alt="bank" class="bankimage" />
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="bullet-text">
<<<<<<< HEAD
                        <h2>
                          Fund Transfer to Friends and Family
                        </h2>
                        <p>
                          Fund transfer has never been easier and secure, with CityPay.<br></br>Transfer funds to your friends or family using
                          their phone number or the QR.
                        </p>
                        <h2>
                          Send or Request
                        </h2>
=======
                        <h2>Fund Transfer to Friends and Family</h2>
                        <p>
                          Fund transfer has never been easier and secure, with
                          CityPay.<br></br>Transfer funds to your friends or
                          family using their phone number or the QR.
                        </p>
                        <h2>Send or Request</h2>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                        <p>
                          You can send or request funds from one wallet to
                          another.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}

                  <div class="mid-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="remittance">
<<<<<<< HEAD
                          <span class="highlight">Remittance<span class="lesslight" style={{ color: "#0D60B5", }}> Services
                          </span></span>
                        </span>
                      </div>
                      <div className="bullet-text">
                        <h2>
                          Receive Remittance
                        </h2>
                        <p>
                          Receive remittance directly in your CityPay wallet
                          and track the payment status easily.
                        </p>
                        <h2>
                          Send Domestic Remittance
                        </h2>
                        <p>
                          Send domestic remittance to any mobile number
                          inside Nepal.
                        </p>
                        <h2>
                          Withdraw Cash
                        </h2>
=======
                          <span class="highlight">
                            Remittance
                            <span
                              style={{ fontSize: "50px", color: "#0D60B5" }}
                            >
                              {" "}
                              Services
                            </span>
                          </span>
                        </span>
                      </div>
                      <div className="bullet-text">
                        <h2>Receive Remittance</h2>
                        <p>
                          Receive remittance directly in your CityPay wallet and
                          track the payment status easily.
                        </p>
                        <h2>Send Domestic Remittance</h2>
                        <p>
                          Send domestic remittance to any mobile number inside
                          Nepal.
                        </p>
                        <h2>Withdraw Cash</h2>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                        <p>
                          Withdraw cash using “Find Agents” on any part of
                          Nepal.
                        </p>
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={cashinhand} alt="cash" class="bankimage" />
                      </div>
                    </div>
                    <div class="grid-3">
                      <div className="landing-page-text">
<<<<<<< HEAD
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.

=======
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tortor tortor, venenatis a arcu id, semper ultricies
                        enim. Aliquam turpis tellus, venenatis sit amet mattis
                        a, viverra ac lorem. In condimentum quam ut nibh congue
                        fermentum. Duis quis pulvinar lectus, a aliquam massa.{" "}
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}

                  <div class="lower-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="highlight">Bank Transfers</span>
                      </div>
                      <div className="landing-page-text">
<<<<<<< HEAD
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.

=======
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tortor tortor, venenatis a arcu id, semper ultricies
                        enim. Aliquam turpis tellus, venenatis sit amet mattis
                        a, viverra ac lorem. In condimentum quam ut nibh congue
                        fermentum. Duis quis pulvinar lectus, a aliquam massa.{" "}
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
<<<<<<< HEAD
                        <img src={cityexpress} alt="express" class="bankimage" />
=======
                        <img
                          src={cityexpress}
                          alt="express"
                          class="bankimage"
                        />
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>
                    </div>
                    <div class="grid-3">
                      <div className="bullet-text">
<<<<<<< HEAD
                        <h2>
                          Bank Transfer
                        </h2>
                        <p>
                          Lets you transfer to and from any banks instantly
                          all across Nepal.
                        </p>
                        <h2>
                          Co-operative Transfers
                        </h2>
                        <p>
                          Helps you make transactions easier, faster and
                          safer with real time deposits.
=======
                        <h2>Bank Transfer</h2>
                        <p>
                          Lets you transfer to and from any banks instantly all
                          across Nepal.
                        </p>
                        <h2>Co-operative Transfers</h2>
                        <p>
                          Helps you make transactions easier, faster and safer
                          with real time deposits.
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}

                  <div class="fourth-container">
                    <div class="grid-1">
                      <div className="title">
<<<<<<< HEAD
                        <span class="highlight">Scan QR</span><span class="lowlight"> for payment</span>
=======
                        <span class="highlight">Scan QR</span>
                        <span class="lowlight"> for payment</span>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>
                      <div className="landing-page-text">
                        Not just the QR code in our app but we have made it
                        possible to pay your local businesses, stores,
<<<<<<< HEAD
                        merchant's or any available QR. Just a simple scan
                        and payment success.

=======
                        merchant's or any available QR. Just a simple scan and
                        payment success.
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={cell} alt="express" class="cell" />
                      </div>
                    </div>
                  </div>

                  <div class="fifth-container">
<<<<<<< HEAD

=======
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                    <div class="grid-1">
                      <div className="title">
                        <span class="business">Business Payments</span>
                      </div>
                      <div className="landing-page-text">
<<<<<<< HEAD
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.

=======
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tortor tortor, venenatis a arcu id, semper ultricies
                        enim. Aliquam turpis tellus, venenatis sit amet mattis
                        a, viverra ac lorem. In condimentum quam ut nibh congue
                        fermentum. Duis quis pulvinar lectus, a aliquam massa.{" "}
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>
                    </div>

                    <div class="grid-2">
                      <div className="landing-page-image">
<<<<<<< HEAD
                        <img src={bank} alt="bank" class="bankimage" />
=======
                        <img src={simpson} alt="express" class="bankimage" />
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="bullet-text">
<<<<<<< HEAD
                        <h2>
                          Pay in stores
                        </h2>
                        <p>
                          No searching or cash or change. Just pay with a
                          simple scan from CityPay QR.
                        </p>
                        <h2>
                          Pay in Apps and online
                        </h2>
                        <p>
                          You can pay to any online businesses or apps with
                          the amount in your Citypay Wallet.
=======
                        <h2>Pay in stores</h2>
                        <p>
                          No searching or cash or change. Just pay with a simple
                          scan from CityPay QR.
                        </p>
                        <h2>Pay in Apps and online</h2>
                        <p>
                          You can pay to any online businesses or apps with the
                          amount in your Citypay Wallet.
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                        </p>
                      </div>
                    </div>
                  </div>

<<<<<<< HEAD

=======
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                  <div class="perks">
                    <div className="title">
                      <h1>Perks</h1>
                    </div>

                    <div className="sub-heading">
<<<<<<< HEAD

                      <div className="rewards">
                        <h2>More Reward Points</h2>
                        <p>Embark on an exciting journey with City Wallet and unlock a world of exclusive perks! Begin your adventure by earning 10 points simply by signing in. Boost your account security and stature with an exhilarating 50 point when you complete the KYC verification process. Sharing the City Wallet experience is not only fulfilling but also rewarding <br></br>
                          Earn a thrilling 25 points for every successful referral</p>
=======
                      <div className="rewards">
                        <h2>More Reward Points</h2>
                        <p>
                          Embark on an exciting journey with City Wallet and
                          unlock a world of exclusive perks! Begin your
                          adventure by earning 10 points simply by signing in.
                          Boost your account security and stature with an
                          exhilarating 50 point when you complete the KYC
                          verification process. Sharing the City Wallet
                          experience is not only fulfilling but also rewarding{" "}
                          <br></br>
                          Earn a thrilling 25 points for every successful
                          referral
                        </p>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>

                      <div className="top-up">
                        <h2>Mobile Topup Thrills</h2>
<<<<<<< HEAD
                        <p>Recharge your mobile phone with City Wallet and experience the joy of 3.5% cashback on NTC top-ups. We're not just a wallet; We're your passport to saving and conveniences. Enjoy your passport to saving and convenience. Enjoy the seamless process of topping up your phone and witnessing the exciting cashback rewards that follow.</p>
=======
                        <p>
                          Recharge your mobile phone with City Wallet and
                          experience the joy of 3.5% cashback on NTC top-ups.
                          We're not just a wallet; We're your passport to saving
                          and conveniences. Enjoy your passport to saving and
                          convenience. Enjoy the seamless process of topping up
                          your phone and witnessing the exciting cashback
                          rewards that follow.
                        </p>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      </div>

                      <div className="redefine">
                        <h2>Convenience Redefined</h2>
<<<<<<< HEAD
                        <p>Dive deeper into the City Wallet experience with seamless utility payments. Settle bills effortlessly, from electricity to water, all within the City Wallet platform. And for those cross-border moments, enjoy the ease of sending and receiving money with our integrated remittance services. <br></br>City Wallet -the thrilling blend of rewards savings, and convenienve awaits you!</p>
                      </div>
                    </div>

                  </div>



                  <div class="vid-container">
                    <div className="title" id="watchyt"><span class="basics">Watch the basics</span>
=======
                        <p>
                          Dive deeper into the City Wallet experience with
                          seamless utility payments. Settle bills effortlessly,
                          from electricity to water, all within the City Wallet
                          platform. And for those cross-border moments, enjoy
                          the ease of sending and receiving money with our
                          integrated remittance services. <br></br>City Wallet
                          -the thrilling blend of rewards savings, and
                          convenienve awaits you!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="vid-container">
                    <div className="title" id="watchyt">
                      <span class="basics">Watch the basics</span>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      <img src={youtube} alt="youtube" class="youtube"></img>
                    </div>

                    <div className="sub">
<<<<<<< HEAD

=======
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                      <div className="card">
                        <img src={atm} alt="atm-img" class="atm"></img>
                        <h2>ATM Card</h2>
                      </div>

                      <div className="you">
                        <img src={ytb} alt="yt-img" class="atm"></img>
                        <h2>YouTube Tutorials</h2>
                      </div>

                      <div className="coin">
                        <img src={coin} alt="coin-img" class="atm"></img>
                        <h2>Get Coins</h2>
                      </div>
<<<<<<< HEAD

                    </div>
                    {/* <YTCarouselItem /> */}
                  </div>

=======
                    </div>
                    {/* <YTCarouselItem /> */}
                  </div>
>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
                </div>
              }
            />

            {/* PAGE ROUTES */}
<<<<<<< HEAD
=======

>>>>>>> 8b4e98f1b03e08f15f03f792c25265af51e2a771
            <Route
              path="/contact"
              element={
                <div>
                  <ContactPage />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <AboutPage />
                </div>
              }
            />
            <Route
              path="/Services"
              element={
                <div>
                  <ServicesPage />
                </div>
              }
            />
            <Route
              path="/Blog"
              element={
                <div>
                  <BlogPage />
                </div>
              }
            />
            <Route
              path="/faq"
              element={
                <div>
                  <FAQPage />
                </div>
              }
            />
            <Route
              path="/ourTeam"
              element={
                <div>
                  <OurTeamPage />
                </div>
              }
            />
            <Route
              path="/news"
              element={
                <div>
                  <NewsPage />
                </div>
              }
            />
            <Route
              path="/legal"
              element={
                <div>
                  <LegalPage />
                </div>
              }
            />
            <Route
              path="/downloads"
              element={
                <div>
                  <DownloadPage />
                </div>
              }
            />
          </Routes>
        </Content>
        <script src="C:/citipay/citypay-web/src/scrollscript.js"></script>
        <Footer />
      </Layout>
    </Router>
  );
};


export default App;
