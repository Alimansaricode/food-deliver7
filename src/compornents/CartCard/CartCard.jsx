import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import image1 from "../../assets/image1.jpg"
import './CartCard.css'
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';



function CartCard({name,price,image,id}) {
  let dispath=useDispatch()
  return (
    <div className='cardcard'>
      <div className="leftcard">
        <img src={image} alt="" />
        <div className="name-price">
            <span>{name}</span>
            <span>Rs {price}/-</span>
        </div>
      </div>
      <div className="rightcard">
        <button onClick={()=>{
          dispath(RemoveItem(id))
          alert("product Removed Successfull..")
        }}>Remove<RiDeleteBin6Line /></button>
      </div>
    </div>
  )
}

export default CartCard
