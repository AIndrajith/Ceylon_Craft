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
        style={{backgroundImage: `url(${assets.hero_img})`}}
      >
        <h2 
          className={`
            font-bold text-center py-2 font-ubuntu text-[#8A2846] pt-40 text-5xl
            transform transition-all duration-1000 ease-out
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          Welcome to Ceylon Crafts
        </h2>
        <h1 
          className={`
            font-bold text-center font-ubuntu text-[#8A2846] text-3xl pb-6
            transform transition-all duration-1000 ease-out delay-500
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          The Art of Everlasting Beauty
        </h1>
        <p 
          className={`
            text-lg font-ubuntu text-center px-4
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
            py-6 text-xl font-ubuntu text-center px-4
            transform transition-all duration-1000 ease-out delay-1000
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          Explore our latest collections and uncover beauty that lasts forever.
        </p>
        <div 
          className={`
            flex justify-center items-center py-5
            transform transition-all duration-1000 ease-out delay-[1200ms]
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          <button 
            className='
              bg-[#D4A6A6] py-2 px-6 font-bold rounded-3xl font-hedvigLettersSerif
              hover:-translate-y-1 transition-transform duration-300
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