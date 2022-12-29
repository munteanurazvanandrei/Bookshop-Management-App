import React from "react";
import { useState } from "react";
import "./addOrEdit.css";
export default function EditManagerProfile() {
  const [details, setDetails] = useState({
    name: "",
    publisher: "",
    quantity: "",
    price: "",
    img_url: "",
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
            Name: <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            Publisher:{" "}
            <input type="text" name="publisher" onChange={handleChange} />
          </label>
          <label>
            Img_url:{" "}
            <input type="text" name="img_url" onChange={handleChange} />
          </label>
          <label>
            Price: <input type="number" name="price" onChange={handleChange} />
          </label>
          <label>
            Quantity:{" "}
            <input type="number" name="quantity" onChange={handleChange} />
          </label>
        </form>
        <button type="add" onClick={handleSubmit} className="add">
          Add
        </button>
        <button type="cancel" onClick={handleClick} className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}
