import React, { useState, useEffect } from 'react'

const CategoryBox = ({ title, categoryItems = [], onFilterChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter(i => i !== item)
      : [...selectedItems, item];
    
    setSelectedItems(updatedItems);
    if (onFilterChange) {
      onFilterChange(title.toLowerCase(), updatedItems);
    }
  };

  return (
    <div className='border mb-5 w-60 ring-4 ring-[#f4c2c2a2] rounded-tl-lg rounded-br-lg h-auto p-3'>
      <h1 className='flex items-center justify-center pb-3 font-poetsenOne lg:text-xl md:text-lg text-base'>{title}</h1>
      <div className='flex flex-col '>
        {categoryItems.map((item, index) => (
          <div key={index} className='flex gap-5 font-winkySans'>
            <input 
              type="checkbox" 
              checked={selectedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryBox