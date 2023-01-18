import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./addOrEdit.css";
export default function AddOrEditEmployee({employees, setEmployees}) {
  const nav = useNavigate();
  const {itemId} = useParams();
  const editItem = employees&& employees.find(item=>item.id== itemId)
  const [userInfo, setUserInfo] = useState(editItem?editItem:null);
  const user = JSON.parse(localStorage.getItem("user"));
  function handleUpdate(e){
    e.preventDefault();
    console.log(userInfo)
    if(userInfo){
      itemId?  fetch(`https://bma-server-production.up.railway.app/items/${itemId}`,{
          method:"PATCH",
          body:JSON.stringify({...userInfo, price_per_item:parseInt(userInfo.price_per_item),
            qty: parseInt(userInfo.qty)}),
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "role":"manager"
          }
        })
        .then(nav("/dash/items"))
        .catch(e=>console.log(e))
        :
        fetch("https://bma-server-production.up.railway.app/items",{
          method:"POST",
          body:JSON.stringify(userInfo),
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "role":'manager'
          }
        })
        .then(()=>nav("/dash/items"))
        .catch(e=>console.log(e))
    }
  }
  function handleChange(e){
      setUserInfo(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div className="add-edit-main">
      <div className="title-logout">
        <h1>{user &&user.bookshop_name? user.bookshop_name:"BookShop"} Manager</h1>
        <div>Logout<img src="/svgs/logout.svg" alt=""/></div>
      </div>
      <form onSubmit={handleUpdate} id="form">
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
        <div className="buttons">
          <button type="submit" className="add-update">{itemId?"Update":"Add"}</button>
        </div>
      
    </form>
  </div>
  );
}

