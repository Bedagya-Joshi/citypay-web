import React, { useState, useEffect } from "react";
import client from "../services/sanityClient";
import IosDownload from "../Assets/apple_pay.png";
import AndroidDownload from "../Assets/gplay.png";
import ScrollToTop from "../Components/ScrollToTop";

const DownloadPage = () => {
  const [totalDownloads, setTotalDownloads] = useState(0);

  const fetchTotalDownloads = async () => {
    try {
      const response = await client.fetch(
        `*[_type == "downloads"][0]{
          totalDownloads
        }`
      );

      setTotalDownloads(response.totalDownloads || 0);
    } catch (error) {
      console.error("Error fetching total downloads:", error);
    }
  };

  useEffect(() => {
    // Fetch total downloads immediately when the component mounts
    fetchTotalDownloads();

    // Set up an interval to fetch total downloads every second
    const intervalId = setInterval(fetchTotalDownloads, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const animateCounter = (element, targetNumber) => {
    let currentNumber = 0;

    const updateCounter = () => {
      const displayValue = formatNumber(currentNumber);
      element.textContent = displayValue; // Display the formatted number

      if (currentNumber < targetNumber) {
        currentNumber += Math.ceil(targetNumber / 100); // Adjust the speed of the animation here
        requestAnimationFrame(updateCounter);
      } else {
        const finalDisplayValue = formatNumber(targetNumber);
        element.textContent = finalDisplayValue; // Ensure the final number is accurate
      }
    };

    // Function to format the number
    const formatNumber = (number) => {
      if (number >= 1000 && number < 10000) {
        return `${number.toLocaleString()}`;
      } else if (number >= 10000) {
        const roundedValue = Math.round(number / 100) / 10;
        return `${roundedValue}k+`;
      } else {
        return number.toLocaleString();
      }
    };

    updateCounter();
  };

  useEffect(() => {
    // Animate the counter when component mounts or when totalDownloads changes
    const totalDownloadsElement = document.getElementById("totalDownloads");
    animateCounter(totalDownloadsElement, totalDownloads);
  }, [totalDownloads]);

  return (
    <div>
      <ScrollToTop />
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
      <div className="total-downloads" style={{ textAlign: "center" }}>
        <p>Total Downloads</p>
        <div id="totalDownloads" className="total-downloads"></div>
      </div>
    </div>
  );
};

export default DownloadPage;
