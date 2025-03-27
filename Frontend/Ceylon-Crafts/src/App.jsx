import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home-page/Home'
import Collections from './pages/collections-page/Collections'
import About from './pages/about-page/About'
import Contact from './pages/contact-page/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collections' element={<Collections/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
