import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const ProductItem = ({product_id,name,price,image}) => {
    const {currency} = useContext(ShopContext);
  return (
    <div className=''>
        <Link className='cursor-pointer' to={`/product/${product_id}`}>
            <div className='rounded-lg w-[240px] h-[310px] overflow-hidden shadow-lg bg-white'>
              <div className=' relative'>
                <img className='w-full h-52 object-cover hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
              </div>
              <div className='p-3'>
                <span className='font-ubuntu font-medium text-gray-800 mb-1 text-sm'>{name}</span>
              </div>
              <div className='pb-3 px-3'>
                <span className='font-hedvigLettersSerif font-bold text-gray-900 text-lg'>{currency}{` `}{price}</span>
                <span className='text-xs font-ubuntu'>(per flower)</span>
              </div>
                
              
            </div>
        </Link>
    </div>
  )
}

export default ProductItem