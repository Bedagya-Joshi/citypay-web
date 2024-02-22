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
import bank from "./Assets/bank.jpg";

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
                        <span class="highlight"> CityPay</span>{" "}
                        <span class="lowlight">to Family and Friends</span>
                      </div>
                      <div className="landing-page-text">
                        Many of our family and friends are engaged in different
                        nations and continents, earning income for themselves
                        and their families. City Pay is a simple and secure app
                        for receiving remittances wallet-to-wallet, maintaining
                        bonds from family to family and friend to friend.
                        Additionally, City Pay offers a refer-and-earn points
                        system for inviting family, relatives, and friends,
                        further strengthening these bonds.
                      </div>
                    </div>

                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={bankvector} alt="bank" class="bankimage" />
                      </div>
                    </div>

                    <div class="grid-3">
                      <div className="bullet-text">
                        <h2>Fund Transfer to Family and Friends</h2>
                        <p>
                          Funds transfers are now easy and swift with City Pay.
                          You can transfer funds to family and friends in a
                          secure and convenient way using their City Pay ID
                          (phone number) or QR code (City Pay Partnership Smart
                          QR Nepal Pay).
                        </p>
                        <h2>Send or Request</h2>
                        <p>
                          Customers and agents can easily request or send funds
                          from one City Pay wallet to another in a simple and
                          secure way.
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
                          Receiving remittance is quite easy and simple with
                          City Pay. You can receive remittance directly into
                          your City Pay wallet and easily track the payment
                          status.
                        </p>
                        <h2>Send Domestic Remittance</h2>
                        <p>
                          Easily send domestic remittances to any mobile number
                          within Nepal using City Pay.
                        </p>
                        <h2>Withdraw Cash</h2>
                        <p>
                          We include a beneficial service called "Find Agents"
                          to withdraw cash from any part of Nepal.
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
                        City Pay offers seamless remittance services and convenient bank transfers. Easily receive remittance, load money from your bank account for free, and transfer funds to any bank in Nepal. With our extensive agent network, access your funds conveniently across Nepal. Simplify your financial transactions and stay connected with City Pay.
                      </div>
                    </div>
                    <div class="grid-2">
                      <div className="landing-page-image">
                        <img src={cityexpress} alt="express" class="pay" />
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
                        payment success.<br></br>
                        <br></br>
                        Our innovative Scan QR for Payment feature goes beyond in-app QR codes, allowing you to seamlessly transact with local businesses, stores, and merchants. Simply scan any available QR code, and experience the satisfaction of instant payment success. Whether you're shopping at your favorite neighborhood store or exploring new merchants, City Pay ensures a seamless payment experience with just a simple scan. Say goodbye to cash hassles and embrace the future of effortless transactions with City Pay.

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
                        City pay Business payment  typically refers to the ability for businesses to accept payments from customers using a citypay wallet. This can include accepting payments for goods or services purchased online or in-person. For businesses, this feature enables them to expand their payment options, streamline transactions, and potentially reach a wider customer base.
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