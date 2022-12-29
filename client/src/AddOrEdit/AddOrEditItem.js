import React from "react";
import { useState } from "react";
import "./addOrEdit.css";
export default function AddOrEditItem() {
  const [details, setDetails] = useState({
    name: "",
    publisher: "",
    img_url: "",
    price: "",
    category: "",
    quantity:""
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
  // Add or edit an item form
  return (
    <div className="add-or-edit-item">
      <div className="itemheading"> Bookshop Manager </div>
      <div className="item-button">
        <button type="button" className="item-btn">
          LOGOUT
        </button>
      </div>
      <div className="item-form">
        <form>
          <label>
            Name: <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            Publisher: <input type="text" name="publisher" onChange={handleChange} />
          </label>
          <label>
            Img_url:{" "}
            <input type="img_url" name="img_url" onChange={handleChange} />
          </label>
          <label>
            Price:{" "}
            <input type="number" name="price" onChange={handleChange} />
          </label>
          <label>
            Category:
             <input type="number" name="category" onChange={handleChange} />
          </label>
          <label>
            Quantity:
             <input type="number" name="quantity" onChange={handleChange} />
          </label>
        </form>
        
      </div>
    </div>
  );
}
