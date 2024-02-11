import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";

//Assets Import
import bankvector from "./Assets/request.jpg";
import cashinhand from "./Assets/payment.jpg";
import cityexpress from "./Assets/cityexpress.png";
import cell from "./Assets/cell.jpg";
import bank from "./Assets/bank.jpg";
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

//Component Import
import CarouselItem from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      <Layout style={{ backgroundColor: 'blue', margin: "0", padding: "0" }}>
        <Header class="header">
=======
       <Layout  class="mainLayout">
        <Header class="header">  
 
>>>>>>> origin/anurag-test
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

        <Content style={{ padding: "0 48px" }}>
          {/* Define Routes for Page */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div class="body-container">
                  <div class="carousel-container">
                    <CarouselItem />
                  </div>

                  {/* Section 1 */}

                  <div class="Main-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="highlight"> CityPay</span>{" "}
                        <span class="lowlight">to Friends and Family</span>
                      </div>
                      <div className="landing-page-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tortor tortor, venenatis a arcu id, semper ultricies
                        enim. Aliquam turpis tellus, venenatis sit amet mattis
                        a, viverra ac lorem. In condimentum quam ut nibh congue
                        fermentum. Duis quis pulvinar lectus, a aliquam massa.
                      </div>
                    </div>

                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={bankvector} alt="bank" class="bankimage" />
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>Fund Transfer to Friends and Family</h2>
                        <p>
                          Fund transfer has never been easier and secure, with
                          CityPay.<br></br>Transfer funds to your friends or
                          family using their phone number or the QR.
                        </p>
                        <h2>Send or Request</h2>
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
                          <span class="highlight">
                            Remittance
                            <span
                              class="lesslight"
                              style={{ color: "#0D60B5" }}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tortor tortor, venenatis a arcu id, semper ultricies
                        enim. Aliquam turpis tellus, venenatis sit amet mattis
                        a, viverra ac lorem. In condimentum quam ut nibh congue
                        fermentum. Duis quis pulvinar lectus, a aliquam massa.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tortor tortor, venenatis a arcu id, semper ultricies
                        enim. Aliquam turpis tellus, venenatis sit amet mattis
                        a, viverra ac lorem. In condimentum quam ut nibh congue
                        fermentum. Duis quis pulvinar lectus, a aliquam massa.
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img
                          src={cityexpress}
                          alt="express"
                          class="bankimage"
                        />
                      </div>
                    </div>
                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>Bank Transfer</h2>
                        <p>
                          Lets you transfer to and from any banks instantly all
                          across Nepal.
                        </p>
                        <h2>Co-operative Transfers</h2>
                        <p>
                          Helps you make transactions easier, faster and safer
                          with real time deposits.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}

                  <div class="fourth-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="highlight">Scan QR</span>
                        <span class="lowlight"> for payment</span>
                      </div>
                      <div className="landing-page-text">
                        Not just the QR code in our app but we have made it
                        possible to pay your local businesses, stores,
                        merchant's or any available QR. Just a simple scan and
                        payment success.
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={cell} alt="express" class="cell" />
                      </div>
                    </div>
                  </div>

                  <div class="fifth-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="business">Business Payments</span>
                      </div>
                      <div className="landing-page-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tortor tortor, venenatis a arcu id, semper ultricies
                        enim. Aliquam turpis tellus, venenatis sit amet mattis
                        a, viverra ac lorem. In condimentum quam ut nibh congue
                        fermentum. Duis quis pulvinar lectus, a aliquam massa.
                      </div>
                    </div>

                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={bank} alt="bank" class="bankimage" />
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>Pay in stores</h2>
                        <p>
                          No searching or cash or change. Just pay with a simple
                          scan from CityPay QR.
                        </p>
                        <h2>Pay in Apps and online</h2>
                        <p>
                          You can pay to any online businesses or apps with the
                          amount in your Citypay Wallet.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="perks">
                    <div className="title">
                      <h1>Perks</h1>
                    </div>

                    <div className="sub-heading">
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
                      </div>

                      <div className="top-up">
                        <h2>Mobile Topup Thrills</h2>
                        <p>
                          Recharge your mobile phone with City Wallet and
                          experience the joy of 3.5% cashback on NTC top-ups.
                          We're not just a wallet; We're your passport to saving
                          and conveniences. Enjoy your passport to saving and
                          convenience. Enjoy the seamless process of topping up
                          your phone and witnessing the exciting cashback
                          rewards that follow.
                        </p>
                      </div>

                      <div className="redefine">
                        <h2>Convenience Redefined</h2>
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
                      <img src={youtube} alt="youtube" class="youtube"></img>
                    </div>

                    <div className="sub">
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
                    </div>
                    {/* <YTCarouselItem /> */}
                  </div>
                </div>
              }
            />

            {/* PAGE ROUTES */}
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
