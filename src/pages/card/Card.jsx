import React from 'react'
import CartCard from '../../compornents/CartCard/CartCard'
import './Card.css'
import { useSelector } from 'react-redux'
import car from "../../assets/emptycart.png"
function card() {
    let items=useSelector(state=>state)
    let Total=items.cart.reduce((a,b)=>a+b.price,0)
  return (
    <div className='card'>
        {items.cart.length<=0?<div className="card-top">
            <img src={car} alt="" />
            <h1>Empty Card</h1>
        </div>:
        <div className="cardCard">
          {items.cart.map((item)=>(
            <CartCard name={item.name} image={item.image} price={item.price} id={item.id}/>
          ))}
        <div className="price-Seation">
          <span>Total product:   {items.cart.length}</span>
          <span>Total price:{Total}</span>
        </div>
        </div>
          } 
    </div>
  )
}

export default card
