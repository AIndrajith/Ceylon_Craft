import React from 'react'
import {assets} from '../../assets/assets'
import { MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-rose-900 text-white font-ubuntu p-4 md:p-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
        {/* Logo and Description */}
        <div className='flex flex-col items-center sm:items-start justify-center p-2'>
          <img className='w-20' src={assets.logo1} alt="Ceylon Crafts Logo" />
          <span className='text-center sm:text-left mt-3 text-xs md:text-sm'>
            Ceylon Crafts creates exquisite handcrafted artificial flowers that blend elegance, durability, and fine craftsmanship. Perfect for décor, celebrations, or gifts, our timeless designs bring lasting beauty to any occasion.
          </span>
        </div>

        {/* Occasions */}
        <div className='p-2'>
          <span className='font-semibold text-lg'>For Occasions</span>
          <ul className='mt-2 space-y-2'>
            <li>Birthdays</li>
            <li>Weddings</li>
            <li>Graduations</li>
            <li>Anniversaries</li>
            <li>Women's Day Special</li>
            <li>Valentine's Day Special</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className='p-2'>
          <span className='font-semibold text-lg'>Contact Us</span>
          <div className='mt-2 space-y-2'>
            <div className='flex gap-3 items-center'>
              <MapPin className='w-4 h-4 flex-shrink-0' />
              <p>Borelasgamuwa</p>
            </div>
            <div className='flex gap-3 items-center'>
              <Phone className='w-4 h-4 flex-shrink-0' />
              <p>071-1234567</p>
            </div>
            <div className='flex gap-3 items-center'>
              <img className='w-4 h-4 flex-shrink-0' src={assets.whatsapp} alt="WhatsApp" />
              <p>071-1234567</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className='p-2'>
          <span className='font-semibold text-lg'>Follow Us</span>
          <div className='py-2 flex items-center gap-4 mt-2'>
            <a href="#" aria-label="Facebook">
              <img className='w-6 h-6' src={assets.facebook} alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img className='w-6 h-6' src={assets.instagram} alt="Instagram" />
            </a>
            <a href="#" aria-label="TikTok">
              <img className='w-6 h-6' src={assets.tiktok} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright section - optional */}
      <div className='mt-8 pt-4 border-t border-rose-800 text-center text-xs'>
        <p>© {new Date().getFullYear()} Ceylon Crafts. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer