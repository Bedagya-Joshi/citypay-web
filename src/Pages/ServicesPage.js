import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import "./servicePage.css";

const ServicesPage = () => {
  return (
    <div class="grid-container">
      <ScrollToTop />
      <div class="services">
       <h1> Our Services:</h1>
      </div>
      <div class="grid-serv">
        <div  class="grid-1">
          1. Send and Receive Money from all the Bank’s in Nepal
        </div>
        <div  class="grid-1">
          2. Receive remittance from Wallet
        </div>
        <div class="grid-1">
          3. Receive remittance directly to wallet
        </div>
      </div>
      <div class="grid-serv" >
        <div class="grid-2">
          4. QR Payment : in Smart QR and Nepal Pay QR
        </div>
        <div class="grid-2">
          5. Request funds
        </div>
        <div class="grid-2">
          6. NFC Payment
        </div>
      </div>
      <div class="grid-serv">
        <div class="grid-2">
          7. Utility Payments
        </div>
        <div class="grid-2">
          8. Government Payments
        </div>
        <div class="grid-2">
          9. MPOS Service
        </div>
      </div>
    </div>
    );
};

export default ServicesPage;
