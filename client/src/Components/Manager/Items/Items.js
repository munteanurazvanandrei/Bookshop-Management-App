import { useState, useEffect } from "react";
import "./items.css";
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import {GrAddCircle} from 'react-icons/gr'
import {Link} from 'react-router-dom';

function Items() {
  const [myItems, setMyItems] = useState([]);
  const [query, setQuery] = useState("");
    
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyItems(data);
      });
  }, []);
  const myItem = myItems.filter((items) =>
    items.name_or_title.toLowerCase().includes(query)
  ).map((items) => (
        <div className="card" key={items.id}>
          
          <img src={items.img_url} alt={items.img_url} />
          <div className="centered">
            <h6> Name :{items.name_or_title}</h6>
            {/* <h6> Author :{items.manufacturer_or_author}</h6> */}
            <h6>Price :{items.price_per_item}</h6>
            <h6>Qty :{items.qty}</h6>
            {/* 4000/manager/add_or_edit_item/${item.id} */}
            {/* nav("/manager/add_or_edit_item/${item.id}") */}
            <Link to={`/manager/add_or_edit_item/${items.id}`}>
            <button className="view-more"><FiEdit/></button>
            <button className="view-more"><RiDeleteBin6Line/></button>
            </Link>
          </div>
          
          
      </div>
  ));
  return (
    <div className="main-div">
      <h1>Bookshop Manager</h1>
      <div className="search-div">
        
      <input type="text"
       placeholder="Search in lowercase" 
       className="search"
       onChange={(e) => setQuery(e.target.value)}     
       /> 
       <Link to={'/manager/add_or_edit_item'}>
      <button className="add"> <GrAddCircle/> </button>
      </Link>
       </div>
    <div className="items-container">
       {myItem} 
    </div>
    </div>
  );
}

export default Items;
