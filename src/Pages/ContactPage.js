import React from "react";
import "./contactPage.css";

const ContactPage = () => {
  return (
    <div className="contact">

      <div>
        <h2>City Wallet Private Limited</h2><br></br>
        <div className="Office">
          <h3>Registered Office</h3>
          <p>City Express Complex, 5th Floor</p>
          <p>Bank Road, Kamaladi, Kathmandu, Nepal</p>
          <p>Po. Box. No. 21766</p><br></br>
        </div>
        <div className="Support">

          <div className="cont1">
            <h3>Contact Details</h3>
            <p>Email: citywallet@ctxpress.com </p>
            <p>TelePhone No: 00977-1-4531900 ext -116, 117, 162, 205</p>
            <p>Call Center: 00977-1-5970225</p>
            <p>Toll-Free No: +16600 11 12 13</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
