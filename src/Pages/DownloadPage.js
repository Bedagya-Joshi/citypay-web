import React from "react";

//import images
import IosDownload from "../Assets/apple_pay.png";
import AndroidDownload from "../Assets/gplay.png";

const DownloadPage = () => {
  return (
    <div>
      <h1>Get the App Today!!</h1>
      <div
        className="Downloads"
        style={{ display: "flex", margin: "10px", justifyContent: "center" }}
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.ctxpress.citypay"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={AndroidDownload}
            alt="Android Download"
            style={{ height: "auto", width: "150px", margin: "10px" }}
          />
        </a>
        <a
          href="https://apps.apple.com/nz/app/citypay-nepal/id1643110573"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IosDownload}
            alt="IOS DOWNLOAD"
            style={{
              height: "auto",
              width: "150px",
              margin: "10px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default DownloadPage;
