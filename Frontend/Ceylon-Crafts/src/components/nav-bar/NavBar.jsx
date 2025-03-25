import React,{useState, useEffect} from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { Search, ShoppingCart, LogIn } from 'lucide-react'


const NavBar = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
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

  
  return (
    <div className='fixed top-0 left-0 right-0 z-50  flex bg-[#EC9B98]/40 items-center justify-between shadow-xl px-5 rounded'
    style={{ 
      opacity: scrollOpacity,
      transform: scrollOpacity < 0.1 ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
    }}
    >

      <div>
        <img src={assets.logo} className='w-[90px] ml-5' alt="" />
      </div>
      <div className='hidden sm:flex gap-14 items-center font-hedvigLettersSerif text-xl '>
        {
          navItems.map((item,index)=>(
            <NavLink key={index}
                     to={item.path}
                     className='text-black hover:text-[#8A2846] hover:-translate-y-1 hover:shadow-xl font-semibold'>
              {item.name}
            </NavLink>
          ))
        }
      </div>
      
      <div className='flex gap-6 items-center'>
      <div className='relative flex items-center'>
        <Search 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" 
          size={16} 
        />
        <input
          className="placeholder:text-gray-500 placeholder:italic bg-[#EC9B98]/10 w-72 h-8 px-10 rounded-lg border-2 border-gray-400  transition-all"
          placeholder={`Search for anything...`}
          type="text"
          name="search" 
        />
      </div>
      <div className='group relative'>
        <button className='flex font-unna gap-2 w-28 rounded-xl bg-[#D4A6A6] items-center justify-center font-semibold px-3 py-1 text-xl shadow-lg hover:translate-y-1 hover:shadow-xl transition duration-150'>
          <LogIn/>Login
        </button>
        {/*<div className='top-full mt-2 group-hover:block hidden absolute dropdown-menu right-0 pt-4 shadow-xl'>
          <div className='z-50 flex flex-col gap-2 bg-[#EC9B98] rounded w-32 py-3 px-5 items-center'>
            <p className='cursor-pointer hover:text-white'>My Orders</p>
            <p className='cursor-pointer hover:text-white'>My Profile</p>
            <p className='cursor-pointer hover:text-white'>Logout</p>
          </div>
        </div>*/}
      </div>
      <div className='relative inline-block hover:translate-y-1 hover:shadow-xl transition duration-150'>
        <ShoppingCart className=' hover:text-gray-600 cursor-pointer ' size={24}/>
        <p className='absolute -top-2 -right-2 bg-black text-white
                      rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>0</p>
      </div>
      </div>
    </div>
  )
}

export default NavBar