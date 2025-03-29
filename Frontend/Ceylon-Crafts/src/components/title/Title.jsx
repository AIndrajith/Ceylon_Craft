import React from 'react'

const Title = ({text}) => {
  return (
    <div className='py-5 flex items-center justify-center gap-2'>
    <p className='w-4 sm:w-6 h-[2px] sm:h-[3px] bg-[#8A2846]'></p>
    <span className='font-hedvigLettersSerif sm:text-3xl md:text-4xl text-2xl font-bold text-[#8A2846]'>{text}</span>
    <p className='w-4 sm:w-6 h-[2px] sm:h-[3px] bg-[#8A2846]'></p>
    </div>
  )
}

export default Title