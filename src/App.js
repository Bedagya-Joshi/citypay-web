import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import "./Components/footer.css";

//Assets Import
import cashinhand from "./Assets/payment.png";
import cell from "./Assets/cell.png";
import bank from "./Assets/bank.png";
import util from "./Assets/util.png";
import remitance from "./Assets/remitance.png";
import start from "./Assets/start.png";

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
import UnderConstruction from "./Pages/UnderConstruction";

//Component Import
import CarouselItem from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout class="mainLayout">
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

                  <div class="start-img">
                    <img src={start} alt="bank" class="start" />
                  </div>

                  {/* Section 1 */}

                  <div class="Main-container">
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
                      <div className="landing-page-text">
                        <h2>Receive Remittance</h2>
                        <p>
                          Seamlessly directly into your CityPay wallet, with
                          effortless tracking of payment status. Whether it's
                          from a family member abroad or a supportive friend,
                          trust CityPay for secure and prompt fund delivery.
                        </p>
                        <h2>Withdraw Cash</h2>
                        <p>
                          Effortlessly access your funds via CityPay's extensive
                          agent network across Nepal. Use the "Find Agents"
                          feature for convenient cash withdrawal points nearby.
                          Count on CityPay for seamless transactions in both
                          urban hubs and remote areas across Nepal.
                        </p>
                        <h2>Track Remittance</h2>
                        <p>
                          Track your remittance effortlessly with CityPay's
                          intuitive system, providing real-time updates from
                          initiation to delivery. Rest assured with peace of
                          mind and transparency, empowering you to manage your
                          finances confidently.
                        </p>
                      </div>
                    </div>

                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={remitance} alt="bank" class="bankimage" />
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="bullet-text">
                        City Pay simplifies cross-border remittance, enabling
                        seamless transactions and easy tracking of payments.
                        Receive funds directly into your CityPay wallet and
                        manage your finances effortlessly. With our extensive
                        agent network in Nepal, accessing cash is convenient and
                        hassle-free, ensuring you're always connected with your
                        finances.
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}

                  <div class="mid-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="highlight"> CityPay</span>{" "}
                        <span class="lowlight">to Family and Friends</span>
                      </div>
                      <div className="landing-page-text">
                        City Pay is more than just a digital wallet; it's a tool
                        for strengthening bonds among friends and family. With
                        seamless group transactions and real-time updates, City
                        Pay simplifies financial support and fosters meaningful
                        connections.
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={cashinhand} alt="cash" class="bankimage" />
                      </div>
                    </div>
                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>Fund Transfer to Family and Friends</h2>
                        <p>
                          Effortlessly share funds using an intuitive interface.
                          Stay connected with real-time updates, making
                          financial transactions with loved ones easier than
                          ever before.
                        </p>
                        <h2>Send and Receive Money</h2>
                        <p>
                          Instantly to friends and family worldwide, ensuring
                          secure transactions and peace of mind with every
                          transfer. Effortlessly request funds, simplifying
                          financial interactions for stress-free transactions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}

                  <div class="lower-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="highlight">Bank Transfer</span>
                      </div>
                      <div className="landing-page-text">
                        City Pay offers seamless remittance services and
                        convenient bank transfers. Easily load money from your
                        bank account for free, and transfer funds to any bank in
                        Nepal. With our extensive agent network, access your
                        funds conveniently across Nepal. Simplify your financial
                        transactions and stay connected with City Pay.
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={bank} alt="bank" class="bankimage" />
                      </div>
                    </div>
                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>Bank Transfer</h2>
                        <p>
                          Lets you transfer to and from any banks instantly all
                          across Nepal.
                        </p>
                        <h2>Link Bank</h2>
                        <p>
                          To your wallet app to easily load money to and from
                          your bank account without the need to login in each
                          time.
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
                        City Pay simplifies payments with its innovative Scan QR
                        for Payment feature, allowing you to effortlessly
                        transact at local businesses and merchants. Say goodbye
                        to cash hassles and embrace the ease of instant payments
                        with City Pay's seamless QR scanning technology.
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={cell} alt="express" class="cell" />
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>City Pay QR</h2>
                        <p>
                          Effortlessly send money to others using City Pay QR's
                          seamless scan-and-pay feature.
                        </p>
                        <h2>NepalPay and Smart QR</h2>
                        <p>
                          Leverage City Pay QR for effortless payments at
                          merchants accepting NepalPay and Smart QR.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="fifth-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="business">Utility Payment</span>
                      </div>
                      <div className="bullet-text">
                        <h2>Government Services</h2>
                        <p>
                          Access essential government services conveniently
                          through City Pay. From paying fines to accessing
                          governmental utilities, streamline your transactions
                          with our intuitive platform.
                        </p>
                        <h2>Mobile Top-Up</h2>
                        <p>
                          Recharge your mobile credit instantly with City Pay's
                          seamless interface. Enjoy hassle-free top-ups anytime,
                          anywhere, without the need for physical vouchers or
                          cards.
                        </p>
                        <h2>Domestic Flight Ticketing</h2>
                        <p>
                          Book your domestic flight tickets with ease using City
                          Pay's intuitive platform. Enjoy hassle-free booking
                          and seamless payment options, ensuring a smooth travel
                          experience every time.
                        </p>
                      </div>
                    </div>

                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={util} alt="bank" class="bankimage" />
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="landing-page-text">
                        Streamline your essential payments and earn reward
                        points with City Pay's utility payment feature. From
                        mobile top-ups to flight bookings, manage your utilities
                        seamlessly while enjoying rewards for every transaction.
                      </div>
                    </div>
                  </div>

                  <div class="perks">
                    <div className="title" style={{ color: "#0d60b5" }}>
                      <h1>Perks</h1>
                    </div>

                    <div className="perk-heading">
                      <div className="rewards">
                        <h2>More Reward Points</h2>
                        <p>
                          Embark on an exciting journey with City Wallet and
                          unlock a world of exclusive perks! Begin your
                          adventure by earning 10 points simply by signing in.
                          Boost your account security and stature with an
                          exhilarating 50 point when you complete the KYC
                          verification process. Sharing the City Wallet
                          experience is not only fulfilling but also rewarding.
                          Earn a thrilling 25 points for every successful
                          referral. Earn a thrilling 25 points for every
                          successful referral
                        </p>
                      </div>

                      <div className="top-up">
                        <h2>Mobile Top-Up Thrills</h2>
                        <p>
                          Recharge your mobile phone with City Wallet and
                          experience the joy of 3.5% cashback on NTC top-ups.
                          We're not just a wallet; We're your passport to saving
                          and conveniences. Enjoy the seamless process of
                          topping up your phone and witnessing the exciting
                          cashback rewards that follow.
                        </p>
                      </div>

                      <div className="redefine">
                        <h2>Loyalty points</h2>
                        <p>
                          Unlock exclusive benefits and rewards with City Pay's
                          loyalty points program. Earn points with each
                          transaction and move up tiers to access increased
                          rewards and benefits. Redeem your accumulated points
                          for valuable perks or choose to upgrade your loyalty
                          tier for even greater benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            {/* PAGE ROUTES */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/Services" element={<ServicesPage />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/ourTeam" element={<OurTeamPage />} />
            <Route path="/news/*" element={<NewsPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/downloads" element={<DownloadPage />} />
            <Route path="/underconstruction" element={<UnderConstruction />} />
          </Routes>
        </Content>
        <script src="C:/citipay/citypay-web/src/scrollscript.js"></script>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
