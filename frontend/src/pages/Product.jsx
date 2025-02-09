import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {

  const { productId } = useParams();
  const { products,currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  
  // Fetch product details from API or local state based on productId
  const fetchProductData =async () => {
    products.map((item) => {
    
      if (item._id === productId) {
        
        setProductData(item)
        setImage(item.image[0]);
        return null;
      }

  
  })

}
  useEffect(() => {
    fetchProductData();

},[productId])
  

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ' >
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0  cursor-pointer ' src={item} key={index} alt="" />
            ))
            }
          </div>  
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
          </div>
        </div>
        {/* -------Product Info------ */}
        <div className='flex-1'>
          <h1 className='font-medium text-xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5' >{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                onClick={()=>setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item===size ? `border-orange-500` : '' }`} key={index}>{item}</button>
              ))}

            </div>

          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 border-gray-300 sm:w-4/5' />
          <div className='text-sm text-gray-400 mt-5 flex flex-col gap-1'>
            <p>100% Orginal product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Description and Review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-300 px-5 py-3 text-sm font-black'>Description</b>
          <p className='border border-gray-300 px-5 py-3 text-sm text-gray-500' > Reviews (122)</p>
</div>
        <div className='flex flex-col gap-4 border border-gray-300  px-6 py-6 text-sm text-gray-500'>
          <p>Upgrade your wardrobe with this stylish and comfortable piece. Made from high-quality fabric, it offers a perfect fit and lasting durability. Whether you're dressing up for an occasion or keeping it casual, this must-have addition will elevate your look. Available in multiple sizes and colors—shop now and stay ahead in fashion!</p>
<p>Designed for both style and versatility, this piece effortlessly complements any wardrobe. Its breathable fabric ensures all-day comfort, while the modern design adds a touch of elegance. Pair it with your favorite accessories to create a look that’s uniquely yours. Don’t miss out—get yours today!</p>
        </div>

      </div>

      {/* Display related Producuts */}
      

    </div>
  ) : <div className='opacity-0'></div>
} 

export default Product
