import React from "react";
import { useState } from "react";
import "./addOrEdit.css";
export default function EditManagerProfile() {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    bookshop: "",
    password: "",
    limit: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  const handleClick = (e) => {
    setDetails("");
  };

  // Edit the manager's profile form
  return (
    <div className="add-or-edit-manager">
      <div className="managerheading"> Bookshop Manager </div>
      <div className="button">
        <button type="button" className="btn">
          LOGOUT
        </button>
      </div>
      <div className="form">
        <form>
          <label>
            Username: <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            Email:{" "}
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <label>
            Password:{" "}
            <input type="password" name="password" onChange={handleChange} />
          </label>
          <label>
          Bookshop: <input type="text" name="bookshop" onChange={handleChange} />
          </label>
          <label>
           Limit:{" "}
            <input type="number" name="limit" onChange={handleChange} />
          </label>
        </form>
        <button type="add" onClick={handleSubmit} className="add">
          Update
        </button>
        <button type="cancel" onClick={handleClick} className="cancel">
          Delete Profile
        </button>
      </div>
    </div>
  );
}
