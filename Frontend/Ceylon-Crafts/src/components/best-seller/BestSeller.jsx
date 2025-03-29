import React from 'react'
import GradientBox from '../gradient-box/GradientBox'
import Title from '../title/Title'
import ViewAllBtn from '../view-all-btn/ViewAllBtn'

const BestSeller = () => {
  return (
    <div>
        <GradientBox>
            <div className=''>
            <Title text={'BEST SELLERS'}/>
            <ViewAllBtn/>
            </div>
        </GradientBox>
    </div>
  )
}

export default BestSeller