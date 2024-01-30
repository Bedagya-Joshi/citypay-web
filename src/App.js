import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, theme, Button, Card, Col, Row } from "antd";
import { RightCircleTwoTone } from '@ant-design/icons';
import "./App.css";

//Assets Import
import bankvector from "./Assets/cityremit.png";
import cashinhand from "./Assets/payment-1.png";
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
import SizeContext from "antd/es/config-provider/SizeContext";

const { Header, Content } = Layout;

const ReadMoreButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <Button
        type="default"
        className="learn-more-btn">
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

  return (
    <Router>
      <Layout>
        <Header class="header">
          <ScrollToTop />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          {/* Logo For CityPay */}
          {/* Navbar Import */}
          <div className="navbar_bot">
            <Navbar selectedKey="1" />
          </div>
        </Header>
        <Content style={{ padding: "0 48px" }}>
          {/* Define Routes for Page */}
          <Routes>
            <Route
              exact path="/"
              element={
                    <div class="body-container">
                      <div class="carousel-container">
                        <CarouselItem />
                      </div>

                      {/* Section 1 */}

                      <div class="Main-container">
                            <div class="grid-1">
                              <div className="title">
                                <span class="highlight"> CityPay</span> <span class="lowlight">to Friends and Family</span>
                              </div>
                              <div className="landing-page-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa. 
                              <ReadMoreButton to={"/citypayfriendandfamily"}>
                                Read more
                              </ReadMoreButton>
                              </div>
                            </div>
                            <div class="grid-2">
                              <div className="landing-page-image">
                                <img src={bankvector} alt="bank" class="bankimage"/>
                              </div>
                            </div>
                            <div class="grid-3">
                              <div className="bullet-text">
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
                              <span class="highlight">Remittance<span style={{fontSize:"50px",color:"#0D60B5",}}> Services 
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
                            <p>
                              Withdraw cash using “Find Agents” on any part of
                              Nepal.
                            </p>
                          </div>
                        </div>
                        <div class="grid-2">
                          <div className="landing-page-image">
                            <img src={cashinhand} alt="cash" class="bankimage"/>
                          </div>
                        </div>
                        <div class="grid-3">
                          <div className="landing-page-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.                            <ReadMoreButton to={"/remittance"}>
                              Read more
                            </ReadMoreButton>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.                            <ReadMoreButton to={"/banktransfers"}>
                            Read more
                            </ReadMoreButton>
                          </div>
                        </div>
                        <div class="grid-2">
                          <div className="landing-page-image">
                            <img src={cityexpress} alt="express" class="bankimage"/>
                          </div>
                        </div>
                        <div class="grid-3">
                          <div className="bullet-text">
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
                              </p>
                            </div>
                        </div> 
                      </div>

                      {/* Section 4 */}

                      <div class="fourth-container">
                        <div class="grid-1">
                          <div className="title">
                            <span class="highlight">Scan QR</span><span class="lowlight"> for payment</span>
                          </div>
                          <div className="landing-page-text">
                            Not just the QR code in our app but we have made it
                            possible to pay your local businesses, stores,
                            merchant's or any available QR. Just a simple scan
                            and payment success.
                            <ReadMoreButton to={"/scanQR"}>
                              SCAN HERE
                            </ReadMoreButton>
                          </div>
                        </div>
                        <div class="grid-2">
                          <div className="landing-page-image">
                            <img src={cell} alt="express" class="cell"/>
                            </div>
                        </div>
                      </div>

                      <div class="fifth-container">
                        <div class="grid-1">
                          <div className="title">
                            <span class="business">Business Payments</span>
                          </div>
                          <div className="landing-page-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor tortor, venenatis a arcu id, semper ultricies enim. Aliquam turpis tellus, venenatis sit amet mattis a, viverra ac lorem. In condimentum quam ut nibh congue fermentum. Duis quis pulvinar lectus, a aliquam massa.                            <ReadMoreButton to={"/businesspayments"}>
                            Read more
                            </ReadMoreButton>
                          </div>
                        </div>
                        <div class="grid-2">
                          <div className="landing-page-image">
                            <img src={simpson} alt="express" class="bankimage"/>
                          </div>
                        </div>
                        <div class="grid-3">
                          <div className="bullet-text">
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
                            </p>
                          </div>
                        </div>
                      </div>


                      <div class="perks">
                        <div className="title">
                          <h1>Perks</h1>
                        </div>
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
                      <div class="vid-container">
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
              }
            />

            {/* PAGE ROUTES */}
            <Route
               exact path="/contact"
              element={
                <div>
                  <ContactPage />
                </div>
              }
            />
            <Route path="/about" exact Component={AboutPage}/>

            <Route path="/services" exact Component={ServicesPage}/>

            <Route path="/businesspayments" exact Component={BusinessPayments}/>

            <Route path="/remittance" exact Component={Remittance}/>

            <Route path="/scanQR" exact Component={ScanQR}/>

            <Route path="/citypayfriendandfamily" exact component={CitypayFriendandFamily}/>

            <Route path="/banktransfers" exact component={ BankTransfer}/>

            <Route path="/news/*" exact component={NewsPage}/>

            <Route path="/blog/*" exact component={BlogPage}/>

            <Route path="/faq" exact component={FAQPage}/>

            <Route path="/ourTeam" exact component={OurTeamPage}/>
            
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
