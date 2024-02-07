import React from "react";
import "./contactPage.css";

const ContactPage = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div>
        <h2>CityPay Pvt. Ltd.</h2>
        <div className="Office">
          <h3>Registered Office</h3>
          <p>Kamaladi, Kathmandu, Nepal</p>
        </div>
        <div className="Support">
          <h3>Customer Support</h3>
          <p>Toll-Free No: (For NTC only)</p>
          <p>Toll-Free No: (For Ncell only)</p>
          <p>Email: </p>
          <p>Phone No: </p>
          <p>Phone No: </p>
          <p>Phone No: </p>
          <p>Phone No: </p>
          <p>Phone No: </p>
          <p>(For general inquiry and technical assistance)</p>
        </div>
        <div className="Branch">
          <h3>Branch Offices:</h3>
          <p></p>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
