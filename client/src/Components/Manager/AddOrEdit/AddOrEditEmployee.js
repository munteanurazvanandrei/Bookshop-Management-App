import React from "react";
import { useState } from "react";
import "./addOrEdit.css";
export default function AddOrEditEmployee() {
  const [details, setDetails] = useState({
    name: "",
    password: "",
    email: "",
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

  const handleDelete = (id) => {
    const newDetails = [...details];
    newDetails.splice(id, 1);
    setDetails(newDetails);
  };
  // Add or edit an employee form
  return (
    <div className="add-or-edit-form">
      <div className="heading"> Bookshop Manager </div>

      <button type="button" className="btn"> Logout <span></span>
        <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C13.5527 1.99884 15.0842 2.35978 16.4729 3.05414C17.8617 3.74851 19.0693 4.75718 20 6H17.29C16.1352 4.98176 14.7112 4.31836 13.1887 4.0894C11.6663 3.86044 10.1101 4.07566 8.70689 4.70922C7.30371 5.34277 6.11315 6.36776 5.27807 7.66119C4.44299 8.95462 3.99887 10.4615 3.999 12.0011C3.99913 13.5407 4.4435 15.0475 5.27879 16.3408C6.11409 17.6341 7.30482 18.6589 8.7081 19.2922C10.1114 19.9255 11.6676 20.1405 13.19 19.9113C14.7125 19.6821 16.1364 19.0184 17.291 18H20.001C19.0702 19.243 17.8624 20.2517 16.4735 20.9461C15.0846 21.6405 13.5528 22.0013 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"
          fill="white"
          fill-opacity="0.96"
        />
      </svg>
        </button>

      <div className="form">
        <form>
          <label>
            Name: <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            Email: <input type="email" name="email" onChange={handleChange} />
          </label>
          <label>
            Password:{" "}
            <input type="password" name="password" onChange={handleChange} />
          </label>
        </form>
        <button type="add" onClick={handleSubmit} className="employee-add">
          Add/Edit
        </button>
        <button
          type="cancel"
          onClick={handleDelete}
          className=" employee-cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

