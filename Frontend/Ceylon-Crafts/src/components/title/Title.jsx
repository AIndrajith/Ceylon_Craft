import React from 'react'

const Title = ({text}) => {
  return (
    <div className='md:pt-28 pt-16 md:pb-8 pb-6 flex items-center justify-center gap-2'>
    <p className='w-4 sm:w-6 h-[2px] sm:h-[3px] bg-[#8A2846]'></p>
    <span className='font-oleoScript  md:text-5xl text-4xl font-bold text-[#8A2846]'>{text}</span>
    <p className='w-4 sm:w-6 h-[2px] sm:h-[3px] bg-[#8A2846]'></p>
    </div>
  )
}

export default Title