import React from 'react'
import Product from './product/Product'
import Login from './login/Login'
import Cart from './cart/Cart'
import { Route, Routes } from 'react-router-dom'
import Register from './login/Register'
import ProductDetails from './utils/ProductDetails/ProductDetails'


const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default Pages
