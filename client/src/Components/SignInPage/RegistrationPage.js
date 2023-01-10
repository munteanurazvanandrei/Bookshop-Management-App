import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./registration.css";
import {
  HiOutlineMail,
  HiOutlineEye,
  HiOutlineLockClosed,
  HiOutlineHome
} from "react-icons/hi";
export default function Registration() {
  // the registration for the manager;
  // also for the bookshop
  const [next, setNext]= useState(false);

  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

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
        <button className="home_button">
          <Link to="*" className="home_link">Home</Link>
          <HiOutlineHome className="home_icon"/>
        </button>
      </div>
      <div className="registration-container">
        <div className="registration-signup-form">
          <h3>Join Us</h3>
          {next?
          <form></form>:
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
                  <HiOutlineMail  className="login_left_icon"/>
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
                  <HiOutlineLockClosed className="login_left_icon"/>
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
                  <HiOutlineLockClosed className="login_left_icon"/>
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
              <button onClick={(e) => {
                e.preventDefault();
                // TODO: check if all input are filled
                setNext(!next)}}>Continue</button>
            </div>
          </form>}
        </div>
        <div className="registration-footer">
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
