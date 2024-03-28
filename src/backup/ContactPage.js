import React from "react";
import 'boxicons/css/boxicons.min.css';
import "./contactPage.css";

const ContactPage = () => {
  return (
    <div className="background">
      <div className="contact">
        <div>
          <h2>City Wallet Pvt. Ltd</h2><br></br><br></br>

          <div className="Office">
            <h1>CONTACT US</h1>
            <div className="address-container">
              <i class='bx bx-map' ></i>
              <p>Address: Bank Road, Kamaladi-1, Kathmandu, Nepal</p>
            </div>

            <div className="po-container">
              <i class='bx bx-box' ></i>
              <p>Po. Box. No: 21766</p>
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

              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2411303126355!2d85.3189306751358!3d27.709840325382153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19008dcc9663%3A0xd213f8fcbca10475!2sCity%20Express%20Money%20Transfer%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1711432417213!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  title="Map"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
   
  );
};

export default ContactPage;
