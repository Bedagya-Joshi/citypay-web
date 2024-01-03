import React from "react";
import { Anchor } from "antd"; // import the components from Ant Design
import ScrollToTop from "../Components/ScrollToTop";

const { Link } = Anchor; // destructure the Link component from Anchor

const FAQPage = () => {
  return (
    <div className="faq-page">
      <ScrollToTop />
      <div className="faq-container" id="faq-container">
        <div className="faq-menu" style={{marginTop: "50px", backgroundColor: "cyan", maxWidth: "300px"}}>
            <Anchor
              getContainer={() => document.getElementById("faq-container")}
            >
              <h1 class>Contents:</h1>
              <Link className="TBC" href="#what" title="What is this website about?" />
              <Link className="TBC" href="#how" title="How can I contact you?" />
              <Link className="TBC" href="#why" title="Why should I use this website?" />
              <Link className="TBC" href="#test1" title="Why should I use this website?" />
              <Link className="TBC" href="#test2" title="Why should I use this website?" />
              <Link className="TBC" href="#test3" title="Why should I use this website?" />
              <Link className="TBC" href="#test4" title="Why should I use this website?" />
              <Link className="TBC" href="#test5" title="Why should I use this website?" />
              <Link className="TBC" href="#test6" title="Why should I use this website?" />
              <Link className="TBC" href="#test7" title="Why should I use this website?" />
              <Link className="TBC" href="#test8" title="Why should I use this website?" />
              
            </Anchor>
        </div>
        <h1>FAQ</h1>
        <div className="faq-section" id="what">
          <h2>What is this website about?</h2>
          <p>
            This website is a demo of how to create a FAQ page using React and
            Ant Design.
          </p>
        </div>
        <div className="faq-section" id="how">
          <h2>How can I contact you?</h2>
          <p>
            You can send us an email at example@example.com or call us at
            +1234567890.
          </p>
        </div>
        <div className="faq-section" id="why">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
        <div className="faq-section" id="test1">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
        <div className="faq-section" id="test2">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
        <div className="faq-section" id="test3">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
        <div className="faq-section" id="test4">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
        <div className="faq-section" id="test5">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
        <div className="faq-section" id="test6">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
        <div className="faq-section" id="test7">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
        <div className="faq-section" id="test8">
          <h2>Why should I use this website?</h2>
          <p>
            This website is a great way to learn about React and Ant Design, and
            to see how they can be used to create beautiful and functional web
            pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
