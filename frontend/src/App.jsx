import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'
import Profile from './pages/profile/Profile'
import ProductDetail from './pages/productDetail/ProductDetail'
import WishList from './pages/wishList/WishList'
import Sucess from './pages/Payment_page/Sucess'
import Cancel from './pages/Payment_page/Cancel'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/products' element={<Products/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/detail/:productdetail' element={<ProductDetail/>} />
        <Route path='/sucess' element={<Sucess/>} />
        <Route path='/cancel' element={<Cancel/>} />
      </Routes>
    </BrowserRouter>
  )
}
