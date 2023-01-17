import {FiCheck} from "react-icons/fi"
import Checkbox from "react-custom-checkbox";
export default function ItemCard({ item, isDisplayingCart,setItems }) {
  const {id,name_or_title,isCartItem,img_url,manufacturer_or_author,qty,price_per_item, sell_qty} = item
  function handleAItemCart(){
    setItems(prev=>prev.map(item=>item.id===id?{...item, isCartItem: !item.isCartItem, sell_qty: 1}:item))
  }
  function handleQtySold(opt){
    setItems(prev=>prev.map(item=>item.id===id?{...item, sell_qty: (opt==="add" ?item.sell_qty+ 1: item.sell_qty-1)}:item))
  }
  return (
    <div className="item-card">
      <div className="div-20">
        <img src={img_url} alt="" />
      </div>
      <div className="div-40">
        <p>{name_or_title}</p>
      </div>
      <div className="div-40">
        <p>{manufacturer_or_author}</p>
      </div>
      <div className="div-40 sell-qty">
        {isDisplayingCart ? <>
            <p>{sell_qty}</p>
            <button onClick={()=>item.qty> item.sell_qty&&handleQtySold("add")}>Qty +</button>
            <button onClick={()=>item.sell_qty> 1 && handleQtySold("")}>Qty -</button>
        </>:<p>{qty}</p>}
      </div>
      <div className="price-and-checkbox">
        <p>Ksh {isDisplayingCart ? (sell_qty*price_per_item).toLocaleString():price_per_item.toLocaleString()}</p>
        {isDisplayingCart ? <img src="/svgs/delete-icon.svg" onClick={()=>handleAItemCart()}/>:
        <Checkbox className="custom-checkbox" borderColor = "white" borderRadius={4}
        type="checkbox" checked={isCartItem} 
        icon={
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "blue",
                alignSelf: "stretch",
                borderRadius: "4px"
              }}
            >
              <FiCheck color="white" size={20} />
            </div>
          }
        onChange={()=>handleAItemCart()}
        /> }
      </div>
    </div>
  )
}
