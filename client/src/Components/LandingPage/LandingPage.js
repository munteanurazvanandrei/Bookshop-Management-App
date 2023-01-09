import "./landingPage.css"

export default function LandingPage() {
  // Landing page
  return (
    <div className="landing-page">
      <div className="landing-page-nav">
        <h2>PIONEER BOOKSHOP MANAGERS</h2>
            <div className="landing-button">
            <button>Login</button>
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
        <button id="landing-join-us-button">Join Us</button>
      </div>
    </div>
  );
}
