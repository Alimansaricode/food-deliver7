import React, { useState } from 'react'
import "./Shop.css"
import { category } from '../../category'
import { dummydata } from '../../damidata'
import Product from '../../product/Product'
const Shop = () => {
   let [cate,setCate]=useState(dummydata)
      function filer(category){
        if(category==="All"){
          setCate(dummydata)
        }else{
          
        }
    const updatedata=dummydata.filter((item)=>(
      item.category===category
    ))
    setCate(updatedata)
      }
  return (
     
    <div>
      <div className="category-section">
              {category.map((item)=>(
               <div className="item-card" onClick={()=>{
                filer(item.name)
               }}>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
               </div> 
      
              ))}
            </div>
            <div className="product-section">
        {/* dummydata.map chang cate it is uding useState */}
        {cate.map((item)=>(   

          <Product name={item.name} price={item.price}image={item.image}id={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Shop
