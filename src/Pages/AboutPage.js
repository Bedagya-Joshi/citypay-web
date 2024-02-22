import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import "./aboutPage.css";

import what from "../Assets/wallet.png";
import bankvector from "../Assets/request.jpg";

const AboutPage = () => {
  return (
    <div class="container">
      <ScrollToTop />
      <div class="top-section">
        <div class="top-content">
          <div class="top-header">
            <h1> CityPay </h1>
          </div>
          <div class="top-paragraph">
            <h3>
              City Pay is a digital wallet app designed for our customers and
              agents, offering initial benefits and secure access for receiving
              remittances and provides a range of useful and essential services,
              including government services and utility payment top-ups fund
              transfer send or request fund. City Pay enables transactions from
              nation to nation, family to family, relatives to relatives, and
              friends to friends.
            </h3>
          </div>
        </div>
        <div class="top-image">
          <img src={bankvector} alt="bank" class="bankimage" />
        </div>
      </div>

      <div className="box-container">
        <div className="headingTxt">
          <h1> About Us:</h1>
        </div>
        <div className="sub-heading">
          <div className="what">
            <div class="icon">
              <img src={what} alt="wallet" class="wallet" />
            </div>
            <h2>What our wallet is about</h2>
            <p>
              City Wallet “CityPAY” is where seamless transactions meet
              innovation. At CityPAY, we pride ourselves on redefining the way
              you experience payments. As a leading player in the financial
              technology landscape, we bring cutting-edge solutions to simplify
              and elevate your payment experiences.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              At the heart of CityPAY is a commitment to empower individuals and
              businesses with secure, efficient, and forward-thinking payment
              solutions. We believe in making financial transactions accessible
              to everyone, fostering economic growth, and enhancing the overall
              quality of life.
            </p>
          </div>
          <div className="vision">
            <h2>Our vision for the future</h2>
            <p>
              As we continue to grow, our vision is to be the most preferred
              payment application of remittance beneficiaries.
            </p>
          </div>
        </div>
        {/* <div className="headingTxt">
        <h1> What sets us apart </h1>
      </div>
      <div className="sub-heading">
        <div className="Innovation">
          <h2>Innovation</h2>
          <p>
            CityPAY thrives on innovation. We stay ahead of the curve by
            leveraging the latest technologies to provide you with
            state-of-the-art payment solutions. From contactless payments to
            secure online transactions, we're at the forefront of the
            digital payment revolution.
          </p>
        </div>
        <div className="Reliability">
          <h2>Reliability</h2>
          <p>
            Trust is the cornerstone of any successful financial service,
            and at CityPAY, we understand the importance of reliability. Our
            robust systems based on the full-fledged ledger engine and
            stringent security measures ensure that your transactions are
            not only convenient but also safe.
          </p>
        </div>
        <div className="approach">
          <h2>Customer-Centric Approach</h2>
          <p>
            Customer’s satisfaction is at the heart of CityPAY. We are
            dedicated to understanding Customer’s unique needs and tailoring
            our services to exceed customer’s expectations. Our customer
            support team is always ready to assist you, providing a
            personalized experience that sets us apart.
          </p>
        </div>
      </div>
      <h1>Our Promoters:</h1>
      <div className="promotors">
        <p>
          CityPAY is promoted by City Express Money Transfer Pvt. Ltd, one
          of the largest remittance service providers in Nepal. With over 17
          years of experience in the field of remittance management, City
          Express Money Transfer Pvt. Ltd is one of the leading remittance
          providers with a huge customer base and agent network across
          different parts of Nepal.
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
