import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home-page/Home'
import Collections from './pages/collections-page/Collections'
import About from './pages/about-page/About'
import Contact from './pages/contact-page/Contact'
import Login from './components/login/Login'
import Cart from './pages/cart-page/Cart'
import ProductDetailsPage from './pages/product-details-page/ProductDetailsPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collections' element={<Collections/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product/:productId' element={<ProductDetailsPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
