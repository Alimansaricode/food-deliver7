import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import "./Nav.css"
import { Link } from 'react-router-dom';
import {useDispatch, useSelector}from 'react-redux'


function Nav() {
  let dispath = useDispatch()
  let items = useSelector(state=>state)
  console.log(items);

  return (
    <div className='nav'>
      <div className="top-nav">
       <Link to="/"> <div className="logo">
            <span>COCO-Shop</span>
            <FaShopify />
        </div></Link>
        <form className="search-box">
            <input type="text" placeholder='Search Item..' />
            <button><IoSearchSharp /></button>
        </form>
        <Link to="/Card"><div className="card-box">
           <avg><FaCartArrowDown /></avg>
<span>{items.cart.length}</span>
        </div></Link>

      </div>
      <div className="bottom-nav">
        <Link to='/'><li>Home</li></Link>
        <Link to="/Shop"><li>Shop</li></Link>
        <Link to="/Card"><li>Card</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
        

      </div>
    </div>
  )
}

export default Nav
