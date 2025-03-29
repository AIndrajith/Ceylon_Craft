import React, { useContext, useEffect, useState } from 'react'
import Title from '../title/Title'
import GradientBox from '../gradient-box/GradientBox'
import { ShopContext } from '../../context/ShopContext'
import ProductItem from '../product-item/ProductItem'
import ViewAllBtn from '../view-all-btn/ViewAllBtn'

const LatestCollections = () => {
  const { products }= useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,5))
  },[products])
  console.log(products);
  
  return (
    <div className=''>
        
        <GradientBox>
        <div className=''>
          <Title text={'LATEST COLLECTIONS'}/>
          <ViewAllBtn/>
        </div>
          {/*Rendering Products */}
          <div className='flex justify-around'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-16 md:gap-16 lg:gap-7 pt-16'>
              {
                latestProducts.map((item,index)=>(
                  <ProductItem key={index} product_id={item.product_id} image={item.image} name={item.name} price={item.price}/>
                ))
              }
            </div>
          </div>
        </GradientBox>
    </div>
  )
}

export default LatestCollections