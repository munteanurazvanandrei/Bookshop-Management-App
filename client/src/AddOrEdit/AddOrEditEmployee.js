import React from "react";
import { useState } from "react";
import "./addOrEdit.css";
export default function AddOrEditEmployee() {
  const [details, setDetails] = useState({
    name: "",
    password: "",
    email: ""
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
  // Add or edit an employee form
  return(
    <div className="add-or-edit-employee">
      <div className="employeeheading"> Bookshop Manager </div>
      <div className="employee-button">
        <button type="button" className="employee-btn">
          LOGOUT
        </button>
      </div>
      <div className="employee-form">
        <form>
          <label>
            Name: <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            Email:{" "}
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <label>
            Password:{" "}
            <input type="password" name="password" onChange={handleChange} />
          </label>
          
          
        </form>
        <button type="add" onClick={handleSubmit} className="employee-add">
           Add/Edit
        </button>
        <button type="cancel" onClick={handleClick} className=" employee-cancel">
          Cancel
        </button>
      </div>
    </div>
    );
}
