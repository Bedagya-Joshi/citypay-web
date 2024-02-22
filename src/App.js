import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import "./Components/footer.css";

//Assets Import
import bankvector from "./Assets/request.jpg";
import cashinhand from "./Assets/payment.png";
import cityexpress from "./Assets/cityexpress.png";
import cell from "./Assets/cell.jpg";
import bank from "./Assets/bank-removebg.png";

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

                  {/* Section 1 */}
                  <div class="Main-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="highlight">Receive Remittance</span>
                      </div>
                      <div className="landing-page-text">
                        City Pay simplifies cross-border remittance, enabling
                        seamless transactions and easy tracking of payments.
                        Receive funds directly into your CityPay wallet and
                        manage your finances effortlessly. With our extensive
                        agent network in Nepal, accessing cash is convenient and
                        hassle-free, ensuring you're always connected with your
                        finances.
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={bankvector} alt="bank" class="bankimage" />
                      </div>
                    </div>
                    <div class="grid-3">
                      <div className="bullet-text">
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
                  </div>

                  {/* Section 2 */}

                  <div class="Main-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="highlight">Bank Transfers</span>
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
                        <img src={cashinhand} alt="bank" class="bankimage" />
                      </div>
                    </div>
                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>City Pay to Friends and Family</h2>
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
                        <span class="highlight">Bank Transfers</span>
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
                  </div>

                  <div class="fifth-container">
                    <div class="grid-1">
                      <div className="title">
                        <span class="business">Merchant Payments</span>
                      </div>
                      <div className="landing-page-text">
                        Empower your business with City Pay's streamlined
                        merchant payment solutions. Accept payments
                        effortlessly, both in-store and online, while enjoying
                        real-time transaction monitoring for peace of mind and
                        efficiency.
                      </div>
                    </div>

                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={cityexpress} alt="express" class="pay" />
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>Pay in stores</h2>
                        <p>
                          With City Pay Wallet enables secure and convenient
                          transactions at physical retail outlets using stored
                          digital funds. Simply scan a QR code to complete
                          purchases hassle-free, eliminating the need for cash
                          or physical cards."
                        </p>
                        <h2>Pay in Apps and online</h2>
                        <p>
                          Empowers you to seamlessly transact with online
                          businesses and applications, utilizing the funds
                          stored in your account. Enjoy the convenience of
                          making secure payments across a variety of platforms,
                          enhancing your digital shopping and financial
                          experiences with ease.
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