import React from "react";
import { useState } from "react";
import "./addOrEdit.css";
import { useNavigate } from "react-router-dom";
export default function AddOrEditItem() {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  function handleUpdate(e){
    e.preventDefault();
    console.log(userInfo)
  }
  function handleChange(e){
      setUserInfo(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  function handleDelete(e){
    fetch("https://bma-server-production.up.railway.app/me",{
      method:"DELETE",
      headers:{"Authorization":localStorage.getItem("token"),
      "role":"manager"
    }
    }).then(r=>{
      if(r.ok){
        nav("/")
      }
    })
  }
  return(<div className="add-edit-item">
    <div className="title-logout">
      <h1>{user &&user.bookShopName? user.bookShopName:"BookShop"} Manager</h1>
      <button>logout<img src="/svgs/logout.svg" alt=""/></button>
    </div>
    <form onSubmit={handleUpdate}>
      <div>
        <span>username: </span><input required onChange={handleChange} name="name" type="text" placeholder={user&& user.name}/>
      </div> 
      <div>
        <span>Email: </span><input required onChange={handleChange} name="email" type="email" placeholder={user&& user.email}/>
      </div> 
      <div>
        <span>Password: </span><input required onChange={handleChange} name="password" type="password"/>
      </div>
      <div>
        <span>BookShop <br/>Name: </span><input required onChange={handleChange} name="bookshop_name" type="text" placeholder={user&& user.bookshop_name}/>
      </div>
      <div>
        <span>Items Alert<br/>Limit: </span><input required onChange={handleChange} name="bookshop_items_alert_limit" type="number" placeholder={user && user.bookshop_items_alert_limit}/>
      </div>
      <div className="buttons">
        <button type="submit" className="add-update">Update</button>
        <button className="delete" onClick={handleDelete}>Delete Profile</button>
      </div>
      
    </form>
  </div>)
}
