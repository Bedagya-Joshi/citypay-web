import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, theme, Button, Card, Col, Row } from "antd";
import "./App.css";

//Assets Import
import citypay from "./Assets/citypay_logo.png";
import arrow from "./Assets/arrow.png";

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
import BusinessPayments from "./Pages/BusinessPayments";
import CitypayFriendandFamily from "./Pages/CitypayFriendandFamily";
import ScanQR from "./Pages/ScanQR";
import Remittance from "./Pages/Remittance";
import BankTransfer from "./Pages/BankTransfer"; 

//Component Import
import CarouselItem from "./Components/Carousel";
import YTCarouselItem from "./Components/YoutubeCarousel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";


const { Header, Content } = Layout;

const ReadMoreButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <Button
        type="default"
        className="learn-more-btn"
        style={{
          display: "flex",
          alignItems: "center",
          width:"100px",
          height:"50px",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        <div className="learn-more-btn-content">
          <div className="learn-more-btn-content__title">{children}</div>
          <div className="learn-more-btn-content__img">
            <img alt="arrow" src= {arrow} style = {{maxHeight: "10px", maxWidth: "30px"}}/>
          </div>
        </div>
      </Button>
    </Link>
  );
};

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            height: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            background: "linear-gradient(to right, #1096fe, #05336d)",
          }}
        >
          <ScrollToTop />
          {/* Logo For CityPay */}
          <Link to="/">
            <div className="Logo Image">
              <img
                src={citypay}
                alt="CityPayLogo"
                style={{ paddingTop: "15px", height: "70px", width: "auto" }}
              />
            </div>
          </Link>
          {/* Navbar Import */}
          <div className="navbar_bot" style={{ marginLeft: "auto" }}>
            <Navbar selectedKey="1" />
          </div>
        </Header>
        <Content style={{ padding: "0 48px" }}>
          {/* Define Routes for Page */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div
                    style={{
                      padding: 24,
                      minHeight: 380,
                      maxWidth: "95vw",
                      background: colorBgContainer,
                      borderRadius: borderRadiusLG,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        flex: "3",
                        marginRight: "48px",
                        maxWidth: "95vw",
                      }}
                    >
                      <DownloadPage />
                      <div
                        style={{
                          maxHeight: "900px",
                          maxWidth: "86vw",
                          backgroundColor: "black",
                        }}
                      >
                        <CarouselItem />
                      </div>
                      {/* Section 1 */}
                      <div
                        style={{
                          // backgroundColor: "white",
                          padding: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        <div className="title">
                          CityPay to Friends and Family
                        </div>
                        <div
                          className="body"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="landing-page-text">
                            Some text
                            <ReadMoreButton to={"/citypayfriendandfamily"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                          <div className="landing-page-image">Image</div>
                          <div className="bullet-text">
                            <h2 style={{ textAlign: "center" }}>
                              Receive Remittance
                            </h2>
                            <p>
                              Receive remittance directly in your IME Pay wallet
                              and track the payment status easily.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Send Domestic Remittance
                            </h2>
                            <p>
                              Send domestic remittance to any mobile number
                              inside Nepal.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Withdraw Cash
                            </h2>
                            <p>
                              Withdraw cash using “Find Agents” or IME VISA card
                              on any ATM throughout Nepal & India.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Section 2 */}
                      <div
                        style={{
                          // backgroundColor: "green",
                          padding: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        <div className="title">Remittance Services</div>
                        <div
                          className="body"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="bullet-text">
                            <h2 style={{ textAlign: "center" }}>
                              Receive Remittance
                            </h2>
                            <p>
                              Receive remittance directly in your IME Pay wallet
                              and track the payment status easily.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Send Domestic Remittance
                            </h2>
                            <p>
                              Send domestic remittance to any mobile number
                              inside Nepal.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Withdraw Cash
                            </h2>
                            <p>
                              Withdraw cash using “Find Agents” or IME VISA card
                              on any ATM throughout Nepal & India.
                            </p>
                          </div>
                          <div className="landing-page-image">Image</div>
                          <div className="landing-page-text">
                            Some text
                            <ReadMoreButton to={"/remittance"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                        </div>
                      </div>
                      {/* Section 3 */}
                      <div
                        style={{
                          // backgroundColor: "yellow",
                          padding: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        <div className="title">Bank Transfers</div>
                        <div
                          className="body"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="landing-page-text">
                            Some text
                            <ReadMoreButton to={"/banktransfers"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                          <div className="landing-page-image">Image</div>
                          <div className="bullet-text">
                            <h2 style={{ textAlign: "center" }}>
                              Receive Remittance
                            </h2>
                            <p>
                              Receive remittance directly in your IME Pay wallet
                              and track the payment status easily.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Send Domestic Remittance
                            </h2>
                            <p>
                              Send domestic remittance to any mobile number
                              inside Nepal.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Withdraw Cash
                            </h2>
                            <p>
                              Withdraw cash using “Find Agents” or IME VISA card
                              on any ATM throughout Nepal & India.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Section 4 */}
                      <div
                        style={{
                          // backgroundColor: "red",
                          padding: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        <div className="title">Scan QR for payment</div>
                        <div
                          className="body"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="bullet-text">
                            <h2 style={{ textAlign: "center" }}>
                              Receive Remittance
                            </h2>
                            <p>
                              Receive remittance directly in your IME Pay wallet
                              and track the payment status easily.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Send Domestic Remittance
                            </h2>
                            <p>
                              Send domestic remittance to any mobile number
                              inside Nepal.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Withdraw Cash
                            </h2>
                            <p>
                              Withdraw cash using “Find Agents” or IME VISA card
                              on any ATM throughout Nepal & India.
                            </p>
                          </div>
                          <div className="landing-page-image">Image</div>
                          <div className="landing-page-text">
                            Some text
                            <ReadMoreButton to={"/scanQR"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                        </div>
                      </div>
                      {/* Section 5 */}
                      <div
                        style={{
                          // backgroundColor: "grey",
                          padding: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        <div className="title">Business Payments</div>
                        <div
                          className="body"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="landing-page-text">
                            Some text
                            <ReadMoreButton to={"/businesspayments"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                          <div className="landing-page-image">Image</div>
                          <div className="bullet-text">
                            <h2 style={{ textAlign: "center" }}>
                              Receive Remittance
                            </h2>
                            <p>
                              Receive remittance directly in your IME Pay wallet
                              and track the payment status easily.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Send Domestic Remittance
                            </h2>
                            <p>
                              Send domestic remittance to any mobile number
                              inside Nepal.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Withdraw Cash
                            </h2>
                            <p>
                              Withdraw cash using “Find Agents” or IME VISA card
                              on any ATM throughout Nepal & India.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "black",
                          padding: "16px",
                          marginBottom: "16px",
                          maxWidth: "95vw",
                        }}
                      >
                        <div className="title">Perks</div>
                        <Row gutter={16}>
                          <Col span={8}>
                            <Card title="Card title" bordered={false}>
                              Card content
                            </Card>
                          </Col>
                          <Col span={8}>
                            <Card title="Card title" bordered={false}>
                              Card content
                            </Card>
                          </Col>
                          <Col span={8}>
                            <Card title="Card title" bordered={false}>
                              Card content
                            </Card>
                          </Col>
                        </Row>
                      </div>
                      <div
                        style={{
                          // backgroundColor: "cyan",
                          padding: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        <div className="title">Watch the basics</div>
                        <div
                          style={{
                            maxHeight: "900px",
                            maxWidth: "85vw",
                            backgroundColor: "black",
                          }}
                        >
                          <YTCarouselItem />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
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
              path="/services"
              element={
                <div>
                  <ServicesPage />
                </div>
              }
            />
            <Route
              path="/businesspayments"
              element={
                <div>
                  <BusinessPayments />
                </div>
              }
            />
            <Route
              path="/remittance"
              element={
                <div>
                  <Remittance />
                </div>
              }
            />
            <Route
              path="/scanQR"
              element={
                <div>
                  <ScanQR />
                </div>
              }
            />
            <Route
              path="/citypayfriendandfamily"
              element={
                <div>
                  <CitypayFriendandFamily />
                </div>
              }
            />
            <Route
              path="/banktransfers"
              element={
                <div>
                  <BankTransfer />
                </div>
              }
            />
            <Route
              path="/news/*"
              element={
                <div>
                  <NewsPage />
                </div>
              }
            />
            <Route
              path="/blog/*"
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
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
