import React from "react";
import "./landingPage.css"
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  // Landing page
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-page-nav">
        <h2>PIONEER BOOKSHOP MANAGERS</h2>
            <div className="landing-button">
            <button onClick={() => navigate("/signin")}>Login</button>
            <button>Discover</button>
            </div>
      </div>
      <div className="landing-page-message">
        <h1>The companion app to manage your bookshop</h1>
        <img src="/svgs/landing-books.svg" alt="Books logo"></img>
      </div>
      <div className="landing-page-message">
        <h5>Make sales , Track orders, track cash in any device at any time.</h5>
      </div>
      <div className="landing-button">
        <button id="landing-join-us-button" onClick={() => navigate("/signup")}>Join Us</button>
      </div>
    </div>
  );
}
