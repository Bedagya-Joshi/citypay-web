import React from "react";
import 'boxicons/css/boxicons.min.css';
import "./contactPage.css";

const ContactPage = () => {
  return (
    <div className="contact">
      <div>
        <h2>City Wallet Pvt. Ltd.</h2><br></br><br></br>

        <h1>CONTACT US</h1> 

        <div className="Office">
          <div className="address-container">
            <i class='bx bx-map' ></i>
            <p>Bank Road, Kamaladi-1, Kathmandu, Nepal</p>
          </div>

          <div className="po-container">
            <i class='bx bx-box' ></i>
            <p>Po. Box. No. 21766</p>
          </div><br></br>

        </div>

        <div className="Support">
          <div className="cont1">
            <h3>Contact Details</h3>

            <div className="Email">
              <i class='bx bxs-envelope' ></i>
              <p>Email: citywallet@ctxpress.com </p>
            </div>

            <div className="Tel">
              <i class='bx bx-phone' ></i>
              <p>TelePhone No: 00977-1-4531900 ext -116, 117, 162, 205</p>
            </div>

            <div className="tol">
              <i class='bx bx-user-voice' ></i>
              <p>Toll-Free No: +16600 11 12 13</p>
            </div>

            <div className="Call">
              <i class='bx bx-phone-call'></i>
              <p>Call Center: 00977-1-5970225</p><br></br>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
