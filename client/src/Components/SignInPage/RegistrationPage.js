import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./registration.css";
export default function Registration() {
  // the registration for the manager;
  // also for the bookshop

  const [formState, setFormState] = useState({});
  const navigate = useNavigate();
  // const myRouteLocation = window.location.pathname;

  function formChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        password: formState.password,
        password_confirmation: formState.password_confirmation,
      }),
    })
      .then((r) => r.json())
      .then((data) => data);
  }
  return (
    <div className="registration">
      <div className="registration-nav">
        <h2>PIONEER BOOKSHOP MANAGERS</h2>
        <button>
          <Link to="*">Home</Link>
        </button>
      </div>
      <div className="registration-container">
        <div className="registration-signup-form">
          <h3>Join Us</h3>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="registration-inputs-container">
             <div>
             <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                // value={formState.name}
                onChange={(e) => formChange(e)}
                required
              />
             </div> 
              <br />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                // value={formState.email}
                onChange={(e) => formChange(e)}
                required
              />
              <br />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                // value={formState.password}
                onChange={(e) => formChange(e)}
                required
              />
              <br />
              <input
                id="passwordConfirm"
                type="password"
                name="password_confirmation"
                placeholder="Confirm password"
                // value={passConfirmation.passwordConfirm}
                onChange={(e) => formChange(e)}
                required
              />
            </div>
            <br />
            <div className="registration-button-form">
              <button onClick={() => navigate("/signin")}>Continue</button>
            </div>
          </form>
        </div>
        <div className="registration-footer">
          {/* <div className="register">
            <p>
              Have an account?
              <span>
                <Link
                  to={
                    myRouteLocation !== "/manager/signup"
                      ? "/login"
                      : "/manager/login"
                  }
                >
                  Login
                </Link>
              </span>
            </p>
          </div> */}
        </div>
        <div className="registration-welcome-message">
          <img src="/svgs/registration-img.svg" alt="#" />
          <h4>Welcome aboard my friend</h4>
          <p>just a couple of clicks and we start</p>
        </div>
      </div>
    </div>
  );
}
