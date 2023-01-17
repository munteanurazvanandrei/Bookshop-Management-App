import { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function ItemCard({item, setItems}){
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [action, setAction] = useState("");
    const [error, setError] = useState();
    const nav = useNavigate();
    const {id, name_or_title, img_url, price_per_item, active}=item;
    const unknownError=()=>{
        setTimeout(()=>{setError(()=>({message:"Unknown Error.\nContact Support."}))},1250)
        setTimeout(()=>{setLoading(false)},1000);
      }
    
      const errorOccurred=(e)=>{
        setTimeout(()=>{setError(()=>e)},1250)
        setTimeout(()=>{setLoading(false);setError(()=>null);},3000);
      }

    function handleDelete(){
        setLoading(true)
        setAction("delete")
        fetch(`http://localhost:3000/items/${id}`,{method:"DELETE",
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "role": "manager"},
        })
        .then(res=>{
            if(res.ok){
                setTimeout(()=>{setLoaded(()=>true);setLoading(false);},1000)
                setTimeout(()=>{
                    setItems(prev=>prev.filter(itm=>itm.id !== id))
                },3000);
            }else{
                unknownError();
            }
        })
        .catch(e=>{
            errorOccurred(e);
        })
    }

    function handleActive(){
        console.log("Active")
        setAction("update")
        setLoading(true)
        fetch(`http://localhost:3000/items/${id}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "role": "manager"},
            body:JSON.stringify({...item, active:!item.active}),
            method:"PATCH"})
            .then(r=>{
                if(r.ok){
                    setTimeout(()=>{setLoaded(()=>true);setLoading(false);},1000)
                    setTimeout(()=>{
                        setItems(prev=>prev.map(item=>item.id===id?{...item, active:!item.active}:item))
                    },3000);
    
                }else{
                    unknownError();
                }
            })
            .catch(e=>{
                errorOccurred(e);
            })
    }
    return (
        <div className="item-card">
            {loading ? 
                (error ?
                <div className='item-error'><p>{error.message}</p></div>
                : <div className="dot-spinner">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                </div>)
                :(loaded? <div className='success-delete'>
                                <p><strong>{action === "update"? "UPDATED":"DELETED"}</strong> <br/>{name_or_title}</p>
                            </div>:
                    <>
                    <p className="item-title">{name_or_title}</p>
                    <img src={img_url}/>
                    <div className="qty-amt">
                        <p className="qty-paragraph">Qty: {price_per_item} <small></small></p>
                        <span>ksh {price_per_item}</span>
                    </div>
                    <div className="buttons">
                        <img src={`/svgs/${active?"closed-eye-icon.svg":"eye-icon.svg"}`} alt="icon" onClick={()=>handleActive()}/>
                        <img src="/svgs/edit-icon.svg" alt="icon" onClick={()=>nav(`/manager/add_or_edit_item/${id}`)}/>
                        <img src="/svgs/delete-icon.svg" alt="icon" onClick={handleDelete} />
                    </div>
                    </>
                )
            }
        </div>);
}