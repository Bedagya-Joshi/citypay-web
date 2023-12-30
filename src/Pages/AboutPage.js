import React from "react";
import ScrollToTop from "../Components/ScrollToTop";

const AboutPage = () => {
  return (
    <div>
      <ScrollToTop />
      <h1>About Us:</h1>
      <div className="About">
        <h3>What our wallet is about</h3>
        <p>
          City Wallet “CityPAY” is where seamless transactions meet innovation.
          At CityPAY, we pride ourselves on redefining the way you experience
          payments. As a leading player in the financial technology landscape,
          we bring cutting-edge solutions to simplify and elevate your payment
          experiences.
        </p>
      </div>
      <hr/>
      <div className="Our Mission">
        <h3>Our Mission</h3>
        <p>
          At the heart of CityPAY is a commitment to empower individuals and
          businesses with secure, efficient, and forward-thinking payment
          solutions. We believe in making financial transactions accessible to
          everyone, fostering economic growth, and enhancing the overall quality
          of life.
        </p>
      </div>
      <hr/>
      <div className="Our Vision">
        <h3>Our Vision for the future</h3>
        <p>
          As we continue to grow, our vision is to be the most preferred payment
          application of remittance beneficiaries.
        </p>
      </div>
      <hr/>
      <div className="Our Values">
        <h3>What Sets Us Apart</h3>
        <h4>Innovation:</h4>
        <p>
          {" "}
          CityPAY thrives on innovation. We stay ahead of the curve by
          leveraging the latest technologies to provide you with
          state-of-the-art payment solutions. From contactless payments to
          secure online transactions, we're at the forefront of the digital
          payment revolution.
        </p>
        <h4> Reliability:</h4>
        <p>
          Trust is the cornerstone of any successful financial service, and at
          CityPAY, we understand the importance of reliability. Our robust
          systems based on the full-fledged ledger engine and stringent security
          measures ensure that your transactions are not only convenient but
          also safe.
        </p>
        <h4>Customer-Centric Approach: </h4>
        <p>
          Customer’s satisfaction is at the heart of CityPAY. We are dedicated
          to understanding Customer’s unique needs and tailoring our services to
          exceed customer’s expectations. Our customer support team is always
          ready to assist you, providing a personalized experience that sets us
          apart.
        </p>
        <hr/>
        <h3>Our Promoters:</h3>
        <div className="OurPromoters">
          <p>
            CityPAY is promoted by, City Express Money Transfer Pvt. Ltd, the one
            of the largest remittance service provider of Nepal. With over 17
            years of experience in the field of remittance management, City
            Express Money Transfer Pvt. Ltd is one of the leading remittance
            providers with huge customer base and agent network across different
            parts of Nepal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
