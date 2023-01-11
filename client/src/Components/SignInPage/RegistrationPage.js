import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./registration.css";
import {
  HiOutlineMail,
  HiOutlineEye,
  HiOutlineLockClosed,
  HiOutlineHome,
} from "react-icons/hi";
export default function Registration() {
  // the registration for the manager;
  // also for the bookshop
  const [next, setNext] = useState(false);
const [errors,setErrors] = useState(null)
  const [formState, setFormState] = useState({});
  // console.log(formState);

  const navigate = useNavigate();

  function formChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormState({ ...formState, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setNext(true);
  }

  function handleRegister(e) {
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
        bookshop_name: formState.bookshop_name,
        bookshop_items_alert_limit: formState.bookshop_items_alert_limit,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data);
          navigate("/manager");
        });
      } else {
        r.json().then((e) => setErrors(e));
      }
    });
  }
console.log(errors)
  return (
    <div className="registration">
      <div className="registration-nav">
        <h2>PIONEER BOOKSHOP MANAGERS</h2>
        <button className="home_button">
          <Link to="*" className="home_link">
            Home
          </Link>
          <HiOutlineHome className="home_icon" />
        </button>
      </div>
      <div className="registration-container">
        <div className="registration-signup-form">
          <h3>Join Us</h3>
          {next ? (
            <form onSubmit={handleRegister} autoComplete="off">
              <div className="registration-inputs-container">
                <input
                  id="name"
                  type="text"
                  name="bookshop_name"
                  placeholder="Bookshop Name"
                  onChange={(e) => formChange(e)}
                />
                <input
                  id="quantity"
                  type="integer"
                  name="bookshop_items_alert_limit"
                  min="100"
                  max="1000"
                  placeholder="Items limit Alert"
                  onChange={(e) => formChange(e)}
                  required
                />
              </div>
              <div className="registration-button-form">
                <button>Register</button>
              </div>
              <p style={{ color: "red", fontStyle: "italic" }}>
              {errors && `${errors.errors}!`}
            </p>
            </form>
          ) : (
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="registration-inputs-container">
                <div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => formChange(e)}
                    required
                  />
                </div>
                <br />
                <div className="login_mail">
                  <HiOutlineMail className="login_left_icon" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={(e) => formChange(e)}
                    required
                  />
                </div>
                <br />
                <div className="login_pass">
                  <HiOutlineLockClosed className="login_left_icon" />
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => formChange(e)}
                    required
                  />
                  <HiOutlineEye id="login_view_pass" />
                </div>
                <br />
                <div className="login_pass">
                  <HiOutlineLockClosed className="login_left_icon" />
                  <input
                    id="passwordConfirm"
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm password"
                    onChange={(e) => formChange(e)}
                    required
                  />
                  <HiOutlineEye id="login_view_pass" />
                </div>
              </div>
              <br />
              <div className="registration-button-form">
                <button type="submit">Continue</button>
              </div>
            </form>
          )}
        </div>
        <div className="registration-footer"></div>
        <div className="registration-welcome-message">
          <img src="/svgs/registration-img.svg" alt="#" />
          <h4>Welcome aboard my friend</h4>
          <p>just a couple of clicks and we start</p>
        </div>
      </div>
    </div>
  );
}
