
import bg from '../../assets/bg12.gif'
import { category } from '../../category'
import "./Home.css"
import Product from '../../product/Product'
import { dummydata } from '../../damidata'
import { useState } from 'react'
import Footer from '../../footer/Footer'


function Home() {
  let [cate,setCate]=useState(dummydata)
  function filer(category){
const updatedata=dummydata.filter((item)=>(
  item.category===category
))
setCate(updatedata)
  }
  return (
    <div className='home'>
      
      <div className='hero-bg'>
        <img src={bg} alt="" />
      </div>
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
      <h1>Trading Prodect</h1>
      <div className="product-section">
        {/* dummydata.map chang cate it is uding useState */}
        {cate.slice(0,10).map((item)=>(                            
          <Product name={item.name} price={item.price}image={item.image} />
        ))}
      </div>
      <div className="footerss">
        <Footer/>
      </div>
    </div>
  )
}

export default Home
