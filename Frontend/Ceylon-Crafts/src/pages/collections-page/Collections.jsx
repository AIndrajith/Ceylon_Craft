import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'
import ProductItem from '../../components/product-item/ProductItem'
import ShopContextProvider from '../../context/ShopContext'

const Collections = () => {
  const { products }= useContext(ShopContext);
  return (
    <div>
      <NavBar/>
      {/* Adding a div with padding-top to create space for the fixed navbar */}
      <div className="pt-24 pb-20 md:pt-28">
        <Title text={'ALL COLLECTIONS'}/>
      </div>
      <div className='grid grid-cols-3'>
        <div>

        </div>
        <div className='col-span-2'>
      
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Collections