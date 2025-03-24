import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex bg-[#EC9B98] items-center justify-between'>
      <div>
        <img src={assets.logo} className='w-[80px] ml-5' alt="" />
      </div>
      <div className='hidden sm:flex gap-16 items-center font-hedvigLettersSerif text-xl'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/collections'>Collections</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div className='flex gap-6 px-5'>
        <img src={assets.search} className='w-6' alt="" />
        <img src={assets.login} className='w-6' alt="" />
        <img src={assets.cart} className='w-6' alt="" />
      </div>
    </div>
  )
}

export default NavBar