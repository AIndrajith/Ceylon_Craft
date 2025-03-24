import React from 'react'
import {assets} from '../../assets/assets'

const Hero = () => {
  return (
    <div className='relative h-screen '>  
         <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: `url(${assets.hero_img})`}}>
            <h1 className='text-center font-ubuntu text-[#8A2846] pt-24 text-5xl'>Welcome to Ceylon Crafts – The Art of Everlasting Beauty</h1>
         </div>
        

    </div>
  )
}

export default Hero