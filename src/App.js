import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, theme, Button, Card, Col, Row } from "antd";
import { RightCircleTwoTone } from '@ant-design/icons';
import "./App.css";

//Assets Import
import citypay from "./Assets/citypay_logo.png";
import bankvector from "./Assets/bank-vector.png";
import cashinhand from "./Assets/cashinhand.png";
import cityexpress from "./Assets/cityexpress.png";
import cell from "./Assets/cell.png";
import simpson from "./Assets/simpson.png";
import youtube from "./Assets/youtube.png";

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
          width: "100px",
          height: "50px",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        <div className="learn-more-btn-content">
          <div className="learn-more-btn-content__title">{children}</div>
          <div className="learn-more-btn-content__img">
            <RightCircleTwoTone />
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
            justifyContent: "space-around",
            // rowGap:"50px",
            alignItems: "center",
            background: "#0e83e3",
          }}
        >
          <ScrollToTop />
          {/* Logo For CityPay */}
          <Link to="/">
            <div className="Logo Image">
              <img
                src={citypay}
                alt="CityPayLogo"
                style={{ paddingTop: "15px", height: "90px", width: "90px", marginLeft:"15px"}}
              />
            </div>
          </Link>
          {/* Navbar Import */}
          <div className="navbar_bot">
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
                      <div
                        style={{
                          maxHeight: "1000px",
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
                         <span class="highlight"> CityPay</span> to Friends and Family
                        </div>
                        <div
                          className="body"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="landing-page-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa. 
                            <ReadMoreButton to={"/citypayfriendandfamily"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                          <div className="landing-page-image">
                            <img src={bankvector} alt="bank" class="bankimage"/>
                          </div>
                          <div className="bullet-text">
                            <h2 style={{ textAlign: "", marginBottom:"0px", }}>
                            Fund Transfer to Friends and Family
                            </h2>
                            <p>
                              Fund transfer has never been easier and secure, with CityPay.<br></br>Transfer funds to your friends or family using
                              their phone number or the QR.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Send or Request
                            </h2>
                            <p>
                              You can send or request funds from one wallet to
                              another.
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
                        <div className="title"><span class="remittance">Remittance Services</span></div>
                        <div
                          className="body"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="bullet-text">
                            <br></br>
                            <br></br>
                            <h2 style={{ textAlign: "center" }}>
                              Receive Remittance
                            </h2>
                            <p>
                              Receive remittance directly in your CityPay wallet
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
                              Withdraw cash using “Find Agents” on any part of
                              Nepal.
                            </p>
                          </div>
                          <div className="landing-page-image">
                          <img src={cashinhand} alt="cash" class="bankimage"/>
                          </div>
                          <div className="landing-page-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.                            <ReadMoreButton to={"/remittance"}>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.                            <ReadMoreButton to={"/banktransfers"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                          <div className="landing-page-image">
                          <img src={cityexpress} alt="express" class="bankimage"/>
                          </div>
                          <div className="bullet-text">
                            <h2 style={{ textAlign: "center" }}>
                              Bank Transfer
                            </h2>
                            <p>
                              Lets you transfer to and from any banks instantly
                              all across Nepal.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Co-operative Transfers
                            </h2>
                            <p>
                              Helps you make transactions easier, faster and
                              safer with real time deposits.
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
                            justifyContent: "start",
                          }}
                        >
                          <div
                            className="landing-page-text"
                            style={{
                              paddingLeft: "",
                              textAlign: "left",
                            }}
                          >
                            Not just the QR code in our app but we have made it
                            possible to pay your local businesses, stores,
                            merchant's or any available QR. Just a simple scan
                            and payment success.
                            <ReadMoreButton to={"/scanQR"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                          <div className="landing-page-image"
                            style={{paddingLeft: "400px",}}>
                          <img src={cell} alt="express" class="cell"/>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.                            <ReadMoreButton to={"/businesspayments"}>
                              Read more
                            </ReadMoreButton>
                          </div>
                          <div className="landing-page-image">
                          <img src={simpson} alt="express" class="bankimage"/>
                          </div>
                          <div className="bullet-text">
                            <h2 style={{ textAlign: "center" }}>
                              Pay in stores
                            </h2>
                            <p>
                              No searching or cash or change. Just pay with a
                              simple scan from CityPay QR.
                            </p>
                            <h2 style={{ textAlign: "center" }}>
                              Pay in Apps and online
                            </h2>
                            <p>
                              You can pay to any online businesses or apps with
                              the amount in your Citypay Wallet.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: "16px",
                          marginBottom: "16px",
                          maxWidth: "95vw",
                        }}
                      >
                        <div className="title">Perks</div>
                        <Row gutter={16}>
                          <Col span={8}>
                            <Card title="More Reward Points" bordered={false} style={{
                          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa. Sed vel lacus quis dolor laoreet commodo. Nulla posuere sem vitae commodo cursus. Nulla sagittis pharetra lorem ac dictum. Phasellus cursus dui a ex interdum, in tristique erat iaculis. Nulla porttitor ut leo porta facilisis. Nullam rutrum quam non malesuada feugiat.
                            </Card>
                          </Col>
                          <Col span={8}>
                            <Card title="Mobile Topup Perks" bordered={false} style={{
                          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa. Sed vel lacus quis dolor laoreet commodo. Nulla posuere sem vitae commodo cursus. Nulla sagittis pharetra lorem ac dictum. Phasellus cursus dui a ex interdum, in tristique erat iaculis. Nulla porttitor ut leo porta facilisis. Nullam rutrum quam non malesuada feugiat.
                            </Card>
                          </Col>
                          <Col span={8}>
                            <Card title="Free Transactions" bordered={false} style={{
                          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa. Sed vel lacus quis dolor laoreet commodo. Nulla posuere sem vitae commodo cursus. Nulla sagittis pharetra lorem ac dictum. Phasellus cursus dui a ex interdum, in tristique erat iaculis. Nulla porttitor ut leo porta facilisis. Nullam rutrum quam non malesuada feugiat.
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
                        <div className="title" id="watchyt"><span class="basics">Watch the basics</span>
                        <img src={youtube} alt="youtube" class="youtube"></img>
                        </div>
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
