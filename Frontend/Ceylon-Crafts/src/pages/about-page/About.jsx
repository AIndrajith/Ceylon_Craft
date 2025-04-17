import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'

import {assets} from '../../assets/assets'

const About = () => {
  return (
    <div>
      <NavBar/>
      <div className='mb-10'>
        <Title text={'ABOUT US'}/>  
      </div>  
      <div className='flex flex-col gap-24'>
        <div className='mx-32 flex gap-32'>
          <div>
            <img className='w-[300px]' src={assets.about1} alt="" />
          </div>
          <div className='pt-3 w-[1000px]'>
            <h1 className='font-poetsenOne text-3xl mb-10'>💐 Why Choose Ceylon Crafts? </h1>
            <p className='text-2xl/10 font-winkyRough'>At Ceylon Crafts, we combine exquisite craftsmanship, premium quality, and eco-friendly
                practices to bring you the finest artificial flowers. <br/>Each creation is thoughtfully designed to capture timeless beauty, offering long-lasting elegance for any occasion. 
                <br/>With a wide selection of styles, from classic to modern, our flowers are perfect for adding charm to your space or gifting someone special. Choose us for sustainable, stunning alternatives to natural blooms that never fade.  
            </p>
          </div>
        </div>
        <div className='mx-32 flex gap-32'>
          <div className='w-[1000px]'>
          <h1 className='font-poetsenOne text-3xl mb-10'>💐 What We Provide?  </h1>
            <p className='text-2xl/10 font-winkyRough'>At Ceylon Crafts, we specialize in offering premium artificial handmade flowers crafted with creativity and care. Our designs are perfect for enhancing your space or making special occasions unforgettable. 
              <br/>Whether you're looking for elegant decorations, unique gifts, or customized creations tailored to your preferences, we’re here to bring your ideas to life. 
              <br/>From weddings and birthdays to festive events, we provide beautifully crafted flowers to suit every need and occasion. 
              <br/>Choose Ceylon Crafts for artistry that exceeds expectations.   
            </p>
          </div>
          <div className='pt-3 '>
            <img className='w-[300px]' src={assets.about2} alt="" />
          </div>
        </div>
        <div className='mx-32 flex gap-32 mb-20'>
          <div>
            <img className='w-[300px]' src={assets.about3} alt="" />
          </div>
          <div className='pt-3 w-[1000px]'>
            <h1 className='font-poetsenOne text-3xl mb-10'>💐 Who Are We? </h1>
            <p className='text-2xl/10 font-winkyRough'>Ceylon Crafts is a passionate team of artisans dedicated to creating stunning artificial handmade flowers that blend elegance, creativity, and quality. 
              <br/>With a love for artistry and a commitment to excellence, we aim to bring timeless beauty to your life through our carefully crafted designs.
              <br/>Whether it’s for home décor, special occasions, or personalized gifts, we take pride in offering creations that reflect
              our values of innovation and sustainability. At Ceylon Crafts, we don’t just make flowers—we craft moments of joy and lasting memories.  
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
