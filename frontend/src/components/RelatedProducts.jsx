import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({category, subCategory}) => {
  const {products} = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      // Filter by category and subcategory
      productsCopy = productsCopy.filter((item) =>
          category === item.category &&
          subCategory === item.subCategory &&
          // Exclude current product by checking URL for product ID
          !window.location.pathname.includes(item._id)
      );

      // Get up to 5 related products
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  // Handler for product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    // Scroll to top when navigating to new product
    window.scrollTo(0, 0);
  };

  // Only render if there are related products
  return related.length > 0 ? (
      <div className='my-24'>
        <div className='text-center text-3xl py-2'>
          <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {related.map((item, index) => (
              <div
                  key={index}
                  onClick={() => handleProductClick(item._id)}
                  className='cursor-pointer transition-transform duration-300 hover:-translate-y-1'
              >
                <ProductItem
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
              </div>
          ))}
        </div>
      </div>
  ) : null;
}

export default RelatedProducts



















