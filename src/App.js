import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, theme } from "antd";
import "./App.css";
import axios from "axios";

//Static Elements Import
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthProvider } from "./Blog/AuthContext";

//Assets Import
import citypay from "./Assets/citypay_logo.png";

//Pages Import
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import BlogPage from "./BlogPage";
import FAQPage from "./FAQPage";
import OurTeamPage from "./OurTeamPage";
import LegalPage from "./LegalPage";
import DownloadPage from "./DownloadPage";
import LoginPage from "./Blog/LoginPage";
import WriteBlogPage from "./Blog/WritePage";
import NewsAndEventsList from "./NewsAndEventsList";
import NewsAndEventsPage from "./NewsAndEventsPage";

// import Blog from "./Blog";

const { Header, Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

   const [newsAndEvents, setNewsAndEvents] = useState([]);

   useEffect(() => {
     const fetchNewsAndEvents = async () => {
       try {
         const response = await axios.get("http://localhost:3001/api/events");
         setNewsAndEvents(response.data);
       } catch (error) {
         console.error(error);
       }
     };

     fetchNewsAndEvents();
   }, []);

  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              height: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              background: "linear-gradient(to right, #1096fe, #05336d)",
            }}
          >
            {/* Logo For CityPay */}
            <Link to="/">
              <div className="Logo Image">
                <img
                  src={citypay}
                  alt="CityPayLogo"
                  style={{ paddingTop: "15px", height: "70px", width: "auto" }}
                />
              </div>
            </Link>

            {/* Navbar Import */}
            <div className="navbar_bot" style={{ marginLeft: "auto" }}>
              <Navbar selectedKey="1" />
            </div>
          </Header>
          <Content style={{ padding: "0 48px" }}>
            {/* Define Routes for Page */}
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <div
                      style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        display: "flex",
                      }}
                    >
                      <div style={{ flex: "3", marginRight: "48px" }}>
                        <DownloadPage />

                        {/* Section 1 */}
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: "16px",
                            marginBottom: "16px",
                          }}
                        >
                          Section 1
                        </div>
                        {/* Section 2 */}
                        <div
                          style={{
                            backgroundColor: "green",
                            padding: "16px",
                            marginBottom: "16px",
                          }}
                        >
                          Section 2
                        </div>
                        {/* Section 3 */}
                        <div
                          style={{
                            backgroundColor: "yellow",
                            padding: "16px",
                            marginBottom: "16px",
                          }}
                        >
                          Section 3
                        </div>
                        {/* Section 4 */}
                        <div
                          style={{
                            backgroundColor: "red",
                            padding: "16px",
                            marginBottom: "16px",
                          }}
                        >
                          Section 4
                        </div>
                        {/* Section 5 */}
                        <div
                          style={{
                            backgroundColor: "black",
                            padding: "16px",
                            marginBottom: "16px",
                          }}
                        >
                          Section 5
                        </div>
                      </div>
                      {/* News and Offers Section */}
                      <div
                        style={{
                          flex: "1",
                          backgroundColor: "purple",
                          padding: "16px",
                          borderRadius: borderRadiusLG,
                          position: "sticky",
                          top: "0",
                          height: "fit-content",
                        }}
                      >
                        <NewsAndEventsList newsAndEventsData={newsAndEvents} />
                      </div>
                    </div>
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div>
                    <ContactPage />
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div>
                    <AboutPage />
                  </div>
                }
              />
              <Route
                path="/Services"
                element={
                  <div>
                    <ServicesPage />
                  </div>
                }
              />
              <Route
                path="/Blog"
                element={
                  <div>
                    <BlogPage />
                  </div>
                }
              />
              <Route
                path="/login"
                element={
                  <div>
                    <LoginPage />
                  </div>
                }
              />
              <Route
                path="/write"
                element={
                  <div>
                    <WriteBlogPage />
                  </div>
                }
              />
              <Route
                path="/faq"
                element={
                  <div>
                    <FAQPage />
                  </div>
                }
              />
              <Route
                path="/ourTeam"
                element={
                  <div>
                    <OurTeamPage />
                  </div>
                }
              />

              <Route
                path="/legal"
                element={
                  <div>
                    <LegalPage />
                  </div>
                }
              />
              <Route
                path="/downloads"
                element={
                  <div>
                    <DownloadPage />
                  </div>
                }
              />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
