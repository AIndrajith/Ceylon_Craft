import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'
import ProductItem from '../../components/product-item/ProductItem'
import { ShopContext } from '../../context/ShopContext'
import CategoryBox from '../../components/category-box/CategoryBox'
import { ChevronDown } from 'lucide-react'

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent');
  
  // State to track all active filters
  const [activeFilters, setActiveFilters] = useState({
    occasion: [],
    categories: [],
    'wrapping type': [],
    'flower type': [],
    lightning: [],
    'colour type': []
  });

  const occasionItems = ['Birthdays', 'Graduations', 'Weddings', 'Anniversaries', "Valentine's Day Special", "Women's Day Special"];
  const categoryItems = ['Single flower', 'Flower Bouquets', 'Mini Bouquets', 'Butterfly Bouquets'];
  const wrappingTypeItems = ['Normal Wrapping', 'Butterfly Wrapping'];
  const flowerTypeItems = ['Roses', 'Tulips', 'Butterflies'];
  const lightningItems = ['Yes', 'No'];
  const colorTypeItems = ['Elegant Purple', 'Light Blue', 'Red', 'Orange', 'White', 'Black', 'Yellow', 'Pink'];

  // Handle filter changes from a category
  const handleFilterChange = (category, selectedItems) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: selectedItems
    }));
  };

  // This helper function maps UI display values to database values
  const getDataValue = (category, value) => {
    // Map UI-friendly display values to your actual data values
    const mappings = {
      occasion: {
        'Birthdays': 'birthdays',
        'Graduations': 'graduations',
        'Weddings': 'weddings',
        'Anniversaries': 'anniversaries',
        "Valentine's Day Special": 'v_day',
        "Women's Day Special": 'w_day'
      },
      categories: {
        'Single flower': 'single flower',
        'Flower Bouquets': 'flower bouquets',
        'Mini Bouquets': 'mini bouquets',
        'Butterfly Bouquets': 'butterfly bouquets'
      },
      'wrapping type': {
        'Normal Wrapping': 'normal',
        'Butterfly Wrapping': 'butterfly'
      },
      'flower type': {
        'Roses': 'roses',
        'Tulips': 'tulips',
        'Butterflies': 'butterflies'
      },
      lightning: {
        'Yes': 'yes',
        'No': 'no'
      },
      'colour type': {
        'Elegant Purple': 'purple',
        'Light Blue': 'blue',
        'Red': 'red',
        'Orange': 'orange',
        'White': 'white',
        'Black': 'black',
        'Yellow': 'yellow',
        'Pink': 'pink'
      }
    };

    return mappings[category]?.[value] || value.toLowerCase();
  };

  // Apply all filters and search
  const applyFilters = () => {
    // Start with all products
    let filteredProducts = products.slice();
    
    // Apply search filter if search term exists
    if (search) {
      filteredProducts = filteredProducts.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Apply category filters
    Object.entries(activeFilters).forEach(([category, selectedItems]) => {
      if (selectedItems.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          // Map UI category to product property name
          const productProperty = mapCategoryToProductProperty(category);
          
          // Skip if the product doesn't have this property
          if (!product[productProperty]) return false;
          
          // Map the UI values to data values
          const dataValues = selectedItems.map(item => getDataValue(category, item));
          
          // Check if the product property matches any selected values
          if (Array.isArray(product[productProperty])) {
            // If the property is an array (e.g., occasions, color_type)
            return dataValues.some(value => product[productProperty].includes(value));
          } else {
            // If the property is a string (e.g., category, wrapping_type)
            return dataValues.includes(product[productProperty]);
          }
        });
      }
    });
    
    setFilterProducts(filteredProducts);
  };

  // Helper function to map category names to product properties
  const mapCategoryToProductProperty = (category) => {
    // Map each category to the corresponding property in your product objects
    const mapping = {
      'occasion': 'occasions',
      'categories': 'category',
      'wrapping type': 'wrapping_type',
      'flower type': 'flower_type',
      'lightning': 'lightning',
      'colour type': 'color_type'
    };
    
    return mapping[category] || category;
  };

  // Sort products based on selected sort type
  const sortProducts = () => {
    if (!filterProducts.length) return;
    
    let fpCopy = filterProducts.slice();
    
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        // For 'relevant' sorting, we don't need to do anything special
        break;
    }
  };

  // Apply filters when search or active filters change
  useEffect(() => {
    applyFilters();
  }, [search, activeFilters]);

  // Apply sorting when sort type changes or filtered products are updated
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  // Initialize with all products on component mount
  useEffect(() => {
    if (products.length > 0) {
      setFilterProducts(products);
    }
  }, [products]);

  return (
    <div>
      <NavBar />
      {/* Adding a div with padding-top to create space for the fixed navbar */}
      <div className=" pt-20">
        <Title text={'ALL COLLECTIONS'} />
      </div>
      <div className='flex flex-col gap-1 pt-10 sm:flex-row sm:gap-10'>
        <div className='min-w-60 flex flex-col gap-5'>
          <p onClick={() => setShowFilter(!showFilter)} className='ml-5 border-2 border-[#F4C2C2] bg-[#F4C2C2] text-gray-800 hover:bg-pink-200 transition-colors w-32 p-2 flex items-center gap-2 my-2 text-xl cursor-pointer rounded-tl-lg rounded-br-lg shadow-md font-poetsenOne'>
            FILTERS
            <ChevronDown className={`sm:hidden ${showFilter ? '-rotate-90' : ''}`} />
          </p>
          <div className={`pl-5 py-3 ${showFilter ? '' : 'hidden'} sm:block flex flex-col justify-center items-center`}>
            <CategoryBox 
              title={'Occasion'} 
              categoryItems={occasionItems} 
              onFilterChange={handleFilterChange}
            />
            <CategoryBox 
              title={'Categories'} 
              categoryItems={categoryItems} 
              onFilterChange={handleFilterChange}
            />
            <CategoryBox 
              title={'Wrapping Type'} 
              categoryItems={wrappingTypeItems} 
              onFilterChange={handleFilterChange}
            />
            <CategoryBox 
              title={'Flower Type'} 
              categoryItems={flowerTypeItems} 
              onFilterChange={handleFilterChange}
            />
            <CategoryBox 
              title={'Lightning'} 
              categoryItems={lightningItems} 
              onFilterChange={handleFilterChange}
            />
            <CategoryBox 
              title={'Colour Type'} 
              categoryItems={colorTypeItems} 
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex flex-col gap-6 mb-4 text-base sm:text-2xl ml-5'>
            <select onChange={(e) => setSortType(e.target.value)} className='px-2 text-sm border-2 border-[#F4C2C2] rounded-tl-lg rounded-br-lg p-3 w-52 bg-white text-gray-800 hover:bg-pink-50 focus:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-[#F4C2C2] transition-colors cursor-pointer shadow-sm font-poetsenOne'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low-High</option>
              <option value="high-low">Sort by: High-Low</option>
            </select>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 gap-y-6'>
              {filterProducts && filterProducts.length > 0 ? (
                filterProducts.map((item, index) => (
                  <ProductItem 
                    key={index} 
                    product_id={item.product_id} 
                    image={item.image} 
                    name={item.name} 
                    price={item.price} 
                  />
                ))
              ) : (
                <div className="col-span-full text-center p-8 text-lg">
                  No products match your filters. Try different filter options.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Collections