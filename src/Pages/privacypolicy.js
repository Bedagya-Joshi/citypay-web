import React from "react";
import ScrollToTop from "../Components/ScrollToTop";

import "./privacypage.css";

const privacypolicy = () => {
  return (
    <section class="policy">
      <ScrollToTop />
      <h1 class="policy-title">Privacy Policy</h1>
      <p class="policy-head">
        Welcome to City Wallet! Your privacy is important to us, and we are
        committed to protecting your personal information. This Privacy Policy
        is designed to help you understand how we collect, use, disclose, and
        safeguard your personal information when you use City Wallet/cityPay,
        our mobile wallet application (referred to as the "App") and related
        services (collectively, the "Services"). Please take a moment to review
        this Privacy Policy carefully.
      </p>

      <div class="point-1">
        <h3 class="point-1-title">
          1. Information We Collect We collect information that you provide
          directly to us, as well as information we collect automatically when
          you use the Services. This information may include:
        </h3>
        <p class="point-1-para">
          Personal Information: Your name, email address, phone number, and
          other identifying information when you create an account. Transaction
          Information: Details about your transactions using City Wallet,
          including the date, time, amount, recipient's information, and
          transaction history. Location Information: We may collect your precise
          location information if you enable location services for the App. This
          information is used to provide location-based services such as finding
          nearby merchants. Device Information: Information about your mobile
          device, including its operating system, device type, and unique device
          identifiers. Usage Information: Information about how you use the App,
          such as your interactions with features, content, and other users.
        </p>
      </div>
      <div class="point-2">
        <h3 class="point-1-title">
          2. How We Use Your Information We use your information for various
          purposes, including:
        </h3>
        <p class="point-1-para">
          Providing and maintaining the Services. Processing transactions and
          providing customer support. Personalizing and improving the App's
          functionality and user experience. Communicating with you about your
          account, updates, and promotional offers. Investigating and preventing
          fraudulent or unauthorized activity. Complying with legal and
          regulatory requirements.
        </p>
      </div>
      <div class="point-3">
        <h3 class="point-1-title">
          3. Information Sharing We may share your information in the following
          circumstances:
        </h3>
        <p class="point-1-para">
          With vendors, service providers, and business partners who assist us
          in providing the Services. With other users of the App, as necessary
          for transaction processing. With law enforcement, government agencies,
          or authorized third parties in response to legal requests or to
          prevent fraud or protect our rights. In connection with a merger,
          sale, or asset transfer of all or part of our business. With your
          consent or as otherwise disclosed at the time of collection.
        </p>
      </div>
      <div class="point-4">
        <h3 class="point-1-title">
          4. Your Choices • You can access and update your account information
          through the App.
        </h3>
        <p class="point-1-para">
          You can opt-out of receiving promotional emails from us by following
          the instructions in those emails. You can disable location services
          through your device settings, although this may affect certain
          features of the App.
        </p>
      </div>
      <div class="point-5">
        <h3 class="point-1-title">
          5. Security We take reasonable measures to protect your information
          from unauthorized access, disclosure, alteration, and destruction.
          However, no method of transmission over the internet or electronic
          storage is 100% secure.
        </h3>
      </div>
      <div class="point-6">
        <h3 class="point-1-title">
          6. Children's Privacy The Services are not intended for children under
          the age of 13. We do not knowingly collect personal information from
          children under 13. If you are a parent or guardian and believe your
          child has provided us with personal information, please contact us.
        </h3>
      </div>
      <div class="point-7">
        <h3 class="point-1-title">
          7. Changes to this Privacy Policy We may update this Privacy Policy
          from time to time. The most current version will be posted on the App,
          and the "Last Updated" date will be revised accordingly. Your
          continued use of the Services after such changes will indicate your
          acceptance of the revised Privacy Policy.
        </h3>
      </div>
      <div class="point-8">
        <h3 class="point-1-title">
          8. Contact Us If you have any questions or concerns about this Privacy
          Policy or our data practices, please contact us at 01-5970225 By using
          the City Wallet App and Services, you agree to the terms outlined in
          this Privacy Policy.
        </h3>
      </div>

      {/* Add your contact information here */}
    </section>
  );
};

export default privacypolicy;
