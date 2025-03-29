import React from 'react'
import {assets} from '../../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around font-ubuntu gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base p-5'>
        <div className='w-80'>
            <img className='w-12 m-auto mb-5' src={assets.customizable} alt="" />
            <span className='font-bold'>100% Customizable</span><br/>
            <span className='text-gray-400'>Every detail, from flower colors to wrapping materials, is tailored to your preferences.</span>
        </div>
        <div className='w-80'>
            <img className='w-12 m-auto mb-5' src={assets.ap} alt="" />
            <p className='font-bold'>Affordable Pricing</p>
            <span className='text-gray-400'>Quality creations that fit your budget.</span>
        </div>
        <div className='w-80'>
            <img className='w-12 m-auto mb-5' src={assets.unique} alt="" />
            <span className='font-bold'>Uniquely Handcrafted</span><br/>
            <span className='text-gray-400'>Each piece is crafted with 
            love, care, and precision.</span>
        </div>
    </div>
  )
}

export default OurPolicy