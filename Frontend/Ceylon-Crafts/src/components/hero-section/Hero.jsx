import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative h-screen'>  
      <div 
        className='absolute inset-0 bg-cover bg-center' 
        style={{backgroundImage: `url(${assets.hero_img2})`}}
      >
        <h2 
          className={`
            font-bold text-center font-pacifico text-[#8A2846] md:pt-52 pt-44  lg:text-7xl md:text-6xl text-5xl
            transform transition-all duration-1000 ease-out
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          Welcome to Ceylon Crafts
        </h2>
        <h1 
          className={`
            font-bold text-center font-poetsenOne text-[#8A2846] lg:text-4xl md:text-3xl text-2xl md:py-9 py-6
            transform transition-all duration-1000 ease-out delay-500
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          The Art of Everlasting Beauty
        </h1>
        <p 
          className={`
            lg:text-2xl md:text-xl text-lg font-courgette text-center px-4 mb-4
            transform transition-all duration-1000 ease-out delay-700
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          Discover the elegance of handcrafted artificial flowers designed to bring timeless charm to your spaces. <br/>
          Our exclusive collection features exquisite creations that 
          blend artistry and durability, perfect for any occasion. <br/>
          Whether you're looking to adorn your home, celebrate a special moment, or gift something unique, 
          <br/>Ceylon Crafts is here to inspire your imagination.
        </p>
        <p 
          className={`
            py-7 lg:text-2xl md:text-xl text-lg font-courgette text-center px-4
            transform transition-all duration-1000 ease-out delay-1000
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          Explore our latest collections and uncover beauty that lasts forever.
        </p>
        <div 
          className={`
            flex justify-center items-center py-5 text-white
            transform transition-all duration-1000 ease-out delay-[1200ms]
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          <button 
            className='
              bg-[#f37878] sm:py-2 py-1 sm:px-6 px-3  rounded-3xl font-courgette
              hover:-translate-y-1 transition-transform duration-300 lg:text-2xl md:text-xl sm:text-lg text-lg
            '
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero