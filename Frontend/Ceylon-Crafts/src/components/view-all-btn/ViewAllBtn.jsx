import React from 'react'
import { ArrowRight } from 'lucide-react'
const ViewAllBtn = () => {
  return (
    <div>
        <button className='flex absolute right-4 items-center justify-center bg-[#8A2846] p-2 rounded-xl text-white gap-2 font-medium font-ubuntu text-xs sm:text-sm md:text-base'>
              View All
              <ArrowRight size={14} color="white" />
          </button>
    </div>
  )
}

export default ViewAllBtn