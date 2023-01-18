import React from "react";
import { useState } from "react";
import "./addOrEdit.css";
export default function AddOrEditItem() {
  const user = JSON.parse(localStorage.getItem("user"))
  return(<div className="add-edit-item">
    <h1>{user &&user.bookShopName? user.bookShopName:"BookShop"} Manager</h1>
    <form>
    <div>
      <input type="text" placeholder={user&& user.name}/>
    </div> 
    </form>
  </div>)
}
