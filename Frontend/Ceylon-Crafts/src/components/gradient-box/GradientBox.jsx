
import React from 'react'

const GradientBox = ({children}) => {
  return (
    <div className='relative h-auto bg-gradient-to-b from-[#F4C2C2] to-white min-h-72 py-10'>
        
        {children}
    </div>
  )
}

export default GradientBox