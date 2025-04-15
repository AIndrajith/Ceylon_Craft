import React, { useState, useEffect, useContext } from 'react'
import { assets } from '../../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { Search, ShoppingCart, LogIn, Menu, X } from 'lucide-react'
import Login from '../login/Login'
import { ShopContext } from '../../context/ShopContext'

const NavBar = () => {
  const {search, setSearch} = useContext(ShopContext);
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

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close search when opening mobile menu
    if (isSearchVisible) setIsSearchVisible(false);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
    // Close mobile menu when opening search
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }

  return (
    <div 
      className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between shadow-xl px-3 sm:px-5 md:px-8 py-2 bg-[#F4C2C2]'
      style={{ 
        opacity: scrollOpacity,
        transform: scrollOpacity < 0.1 ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
      }}
    >
      {/* Logo */}
      <Link to={'/'} className="flex-shrink-0">
        <img 
          src={assets.logo} 
          className='w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] ml-0 sm:ml-2 md:ml-4' 
          alt="Ceylon Crafts Logo" 
        />
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-4 lg:gap-10 xl:gap-20 items-center font-winkySans text-lg lg:text-xl xl:text-2xl'>
        {navItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `text-black hover:text-[#8A2846] transition-all duration-300 
              hover:-translate-y-1 font-medium ${isActive ? 'text-[#8A2846] font-bold' : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      
      {/* Right Side Icons */}
      <div className='flex gap-2 sm:gap-4 md:gap-6 items-center'>
        {/* Search for Desktop */}
        <div className='hidden md:relative md:flex items-center'>
          <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" 
            size={18} 
          />
          <input
            className="placeholder:text-gray-500 placeholder:italic bg-[#EC9B98]/10 w-40 lg:w-56 xl:w-72 h-8 md:h-10 px-10 rounded-lg border border-gray-300 focus:border-[#8A2846] focus:outline-none transition-all"
            placeholder="Search for products..."
            type="text"
            name="search" 
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
          />
        </div>

        {/* Mobile Search Toggle */}
        <button 
          className='md:hidden p-2 hover:bg-[#EC9B98]/20 rounded-full transition-colors'
          onClick={toggleSearchVisibility}
          aria-label="Search"
        >
          <Search size={20} className='text-black hover:text-[#8A2846]' />
        </button>

        {/* Login Button */}
        <button 
          onClick={toggleLoginPopup} 
          className='flex font-winkySans gap-1 sm:gap-2 sm:w-24 md:w-28 lg:w-32 w-auto rounded-xl 
                    sm:bg-[#f08d8d] bg-transparent items-center justify-center 
                    px-2 sm:px-3 py-1 sm:py-1.5 text-base sm:text-lg 
                    shadow hover:shadow-lg hover:bg-[#e67a7a] sm:hover:bg-[#e67a7a]
                    hover:-translate-y-1 transition-all duration-300'
          aria-label="Login"
        >
          <LogIn size={20} />
          <span className='hidden sm:inline'>Login</span>
        </button>

        {/* Shopping Cart */}
        <Link 
          to='/cart' 
          className='relative inline-flex items-center justify-center p-2 hover:bg-[#EC9B98]/20 rounded-full hover:-translate-y-1 transition-all duration-300'
          aria-label="Shopping Cart"
        >
          <ShoppingCart className='text-black hover:text-[#8A2846]' size={20} />
          <span className='absolute -top-1 -right-1 bg-black text-white
                        rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>0</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className='md:hidden p-2 hover:bg-[#EC9B98]/20 rounded-full transition-colors'
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Search (Overlay) */}
      {isSearchVisible && (
        <div className='absolute top-full left-0 right-0 md:hidden bg-white px-4 py-3 shadow-lg z-50 border-t border-gray-200'>
          <div className='relative flex items-center'>
            <Search 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" 
              size={18} 
            />
            <input
              className="placeholder:text-gray-500 placeholder:italic bg-[#EC9B98]/10 w-full h-10 px-10 rounded-lg border border-gray-300 focus:border-[#8A2846] focus:outline-none transition-all"
              placeholder="Search for products..."
              type="text"
              name="search"
              autoFocus 
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button 
              onClick={toggleSearchVisibility} 
              className='absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full'
              aria-label="Close Search"
            >
              <X size={18} className='text-gray-500' />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu (Overlay) */}
      {isMobileMenuOpen && (
        <div className='absolute top-full left-0 right-0 md:hidden bg-white shadow-lg z-50 font-winkySans border-t border-gray-200'>
          <div className='flex flex-col'>
            {navItems.map((item, index) => (
              <NavLink 
                key={index}
                to={item.path}
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  `text-black hover:text-[#8A2846] hover:bg-[#EC9B98]/10 p-4 border-b border-gray-100 text-center transition-colors
                  ${isActive ? 'bg-[#EC9B98]/20 font-bold' : 'font-medium'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Login popup */}
      {isLoginPopupOpen && (
        <Login PopupClose={() => setIsLoginPopupOpen(false)} />
      )}
    </div>
  )
}

export default NavBar