import React from 'react'
import "./Product.css"
import image1 from "../assets/image1.jpg"
import {useDispatch} from 'react-redux'
import { AddItem } from '../redux/cartSlice'

const Product = ({id,name,price,image}) => {
  let dispath=useDispatch()
  return (
    <div  className='product'>
      <img src={image} alt="" />
      <div className="product-details">
        <span className="name">{name}</span>
        <span className="money">RS/-{price}</span>
        <button onClick={()=>{
          dispath(AddItem({id:id,name:name,image:image,price:price}))
          alert("product Added Successfull..")
        }}>Abb +</button>
      </div>
    </div>
  )
}

export default Product
