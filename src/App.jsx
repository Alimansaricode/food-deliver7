import React from 'react'

import Home from "./pages/home/Home"
import Nav from './compornents/nav/Nav'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from './pages/shop/Shop'
import Card from './pages/card/Card'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
