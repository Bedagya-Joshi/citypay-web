import React from "react";
import ScrollToTop from "../Components/ScrollToTop";

const ServicesPage = () => {
  return (
    <div>
      <ScrollToTop />
      <div
        style={{
          backgroundColor: "cyan",
          padding: "16px",
          marginBottom: "16px",
          fontSize: "17px",
          fontWeight: "bold",
          marginTop: "10px",
          textDecoration: "underline",
        }}
      >
        Our Services:
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          1. Send and Receive Money from all the Bank’s in Nepal
        </div>
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          2. Receive remittance from Wallet
        </div>
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          3. Receive remittance directly to wallet
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          4. QR Payment : in Smart QR and Nepal Pay QR
        </div>
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          5. Request funds
        </div>
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          6. NFC Payment
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          7. Utility Payments
        </div>
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          8. Government Payments
        </div>
        <div style={{ backgroundColor: "cyan", padding: "8px", margin: "8px" }}>
          9. MPOS Service
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
