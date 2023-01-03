import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignIn(handleLogin, action = "") {
  // The signIn page
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState("");
  const navigate = useNavigate()

  function handleInput(e) {
    const key = e.target.name;
    const value = e.target.value;

    setErrors("");
    setFormData({ ...formData, [key]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    action
      ? fetch("http://localhost:4000/managers/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((r) => {
          if (r.ok) {
            return r.json().then((user) => {
              console.log(user)
              handleLogin.handleManagerLogin(user);
              localStorage.setItem('managers-token', user.jwt)
              localStorage.setItem('managers', user.manager.id)
              navigate(`/managers/${user.manager.id}/manager`)
            });
          }
        })
      : fetch();
  }

  return (
    <div className="sign-in">
      <div className="registration">
        <div className="registration-nav">
          <h2>PIONEER BOOKSHOP MANAGERS</h2>
          <button>Home</button>
        </div>
        <div className="registration-container">
          <div className="registration-signup-form">
            <h3>Welcome back</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="registration-inputs-container">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
                <br />
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <br />
              <div className="registration-button-form">
                <button>Login</button>
                <span>Register</span>
              </div>
            </form>
          </div>
          <div className="registration-welcome-message">
            {/* <img  src={logo} alt="#"/> */}
            <h5>Hey, welcome back</h5>
            <p>Good to see you again</p>
          </div>
        </div>
      </div>
    </div>
  );
}
