import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { Search, ShoppingCart, LogIn, Menu, X } from 'lucide-react'
import Login from '../login/Login'

const NavBar = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const navItems = [
    {name:'HOME', path:'/'},
    {name:'COLLECTIONS', path:'/collections'},
    {name:'ABOUT', path:'/about'},
    {name:'CONTACT', path:'/contact'}
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position
      const scrollY = window.scrollY;
      const maxScrollThreshold = 200; // Adjust this value to control when fade starts

      // Linear fade-out calculation
      const opacity = Math.max(0, 1 - (scrollY / maxScrollThreshold));
      
      setScrollOpacity(opacity);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleLoginPopup = () =>{
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }

  return (
    <div 
      className='fixed top-0 left-0 right-0 z-50 flex bg-[#EC9B98]/0 items-center justify-between shadow-xl px-4 sm:px-5 rounded'
      style={{ 
        opacity: scrollOpacity,
        transform: scrollOpacity < 0.1 ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
      }}
    >
      {/* Logo */}
      <Link to={'/'}>
        <img src={assets.logo} className='w-[70px] sm:w-[90px] ml-2 sm:ml-5' alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-8 lg:gap-14 items-center font-hedvigLettersSerif text-base lg:text-lg'>
        {navItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path}
            className='text-black hover:text-[#8A2846] hover:-translate-y-1 hover:shadow-xl font-medium'
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      
      {/* Right Side Icons */}
      <div className='flex gap-4 sm:gap-6 items-center'>
        {/* Search for Desktop */}
        <div className='hidden md:relative md:flex items-center'>
          <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" 
            size={16} 
          />
          <input
            className="placeholder:text-gray-500 placeholder:italic bg-[#EC9B98]/10 w-48 lg:w-72 h-8 px-10 rounded-lg border-2 border-gray-400 transition-all"
            placeholder={`Search for anything...`}
            type="text"
            name="search" 
          />
        </div>

        {/* Mobile Search Toggle */}
        <button 
          className='md:hidden'
          onClick={toggleSearchVisibility}
        >
          <Search size={20} className='text-black hover:text-[#8A2846]' />
        </button>

        {/* Login Button */}
        <button 
          onClick={toggleLoginPopup} 
          className='flex font-unna gap-2 sm:w-28 md:w-24 w-10 rounded-xl sm:bg-[#D4A6A6] bg-transparent items-center justify-center font-semibold px-3 py-1 text-xl shadow-lg hover:translate-y-1 hover:shadow-xl transition duration-150'
        >
          <LogIn />
          <span className='hidden sm:inline'>Login</span>
        </button>

        {/* Shopping Cart */}
        <Link 
          to='/cart' 
          className='relative inline-block hover:translate-y-1 hover:shadow-xl transition duration-150'
        >
          <ShoppingCart className='hover:text-gray-600 cursor-pointer' size={24}/>
          <p className='absolute -top-2 -right-2 bg-black text-white
                        rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>0</p>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className='md:hidden'
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Search (Overlay) */}
      {isSearchVisible && (
        <div className='absolute top-full left-0 right-0 md:hidden bg-white p-4 shadow-lg z-50'>
          <div className='relative flex items-center'>
            <Search 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" 
              size={16} 
            />
            <input
              className="placeholder:text-gray-500 placeholder:italic bg-[#EC9B98]/10 w-full h-10 px-10 rounded-lg border-2 border-gray-400 transition-all"
              placeholder={`Search for anything...`}
              type="text"
              name="search" 
            />
            <button 
              onClick={toggleSearchVisibility} 
              className='absolute right-3 top-1/2 -translate-y-1/2'
            >
              <X size={20} className='text-gray-500' />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu (Overlay) */}
      {isMobileMenuOpen && (
        <div className='absolute top-full left-0 right-0 md:hidden bg-white shadow-lg z-50 font-hedvigLettersSerif '>
          <div className='flex flex-col'>
            {navItems.map((item, index) => (
              <NavLink 
                key={index}
                to={item.path}
                onClick={toggleMobileMenu}
                className='text-black hover:text-[#8A2846] hover:bg-[#EC9B98]/10 p-4 border-b text-center'
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Login popup */}
      {isLoginPopupOpen &&(
        <Login PopupClose={()=>setIsLoginPopupOpen(false)} />
      )}
    </div>
  )
}

export default NavBar