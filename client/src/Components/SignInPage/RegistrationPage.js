import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Registration() {
  // the registration for the manager;
  // also for the bookshop

  const [formState, setFormState] = useState({});
  const navigate = useNavigate();
  const myRouteLocation = window.location.pathname;

  function formChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("", {
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
      <div className="manager-login-form">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="login-inputs-container">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              // value={formState.name}
              onChange={(e) => formChange(e)}
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              // value={formState.email}
              onChange={(e) => formChange(e)}
              required
            />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              // value={formState.password}
              onChange={(e) => formChange(e)}
              required
            />
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

          <div className="logins-button-form">
            <button onClick={() => navigate("/login")}>Signup</button>
          </div>
        </form>
      </div>
      <div className="login-footer">
        <div className="register">
          <p>
            Have an account?
            <span>
              <Link
                to={myRouteLocation !== "/manager/signup" ? "/login" : "/manager/login"}
              >
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
