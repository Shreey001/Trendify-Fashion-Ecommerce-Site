import React from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import { useEffect, useState, useContext } from 'react'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        // Filter products based on best seller status
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))
    }, [products])  // Added products dependency

    return (
        <div className='my-10'>
            <div className='text-center py-12 relative'>
                {/* Decorative Elements */}
                <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
                
                {/* Main Heading */}
                <div className='space-y-4'>
                    <h2 className='text-4xl font-bold tracking-tight'>
                        Best
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                            Sellers
                        </span>
                    </h2>
                    
                    {/* Subtitle */}
                    <p className='w-3/4 m-auto text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed'>
                        Shop our bestsellers – the most-loved styles, trending outfits, and must-have fashion pieces. 
                        Discover what's hot and grab your favorites before they're gone!
                    </p>
                </div>
            </div>
            
            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        image={item.image} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    )
}

export default BestSeller






























// import React from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';
// import { useEffect,useState,useContext } from 'react';

// const BestSeller = () => {

//     const { products } = useContext(ShopContext);
//     const [bestSeller, setBestSeller] = useState([]);

//     useEffect(() => {
//         // Filter products based on best seller status
//         const bestProduct = products.filter((item) => (item.bestseller))
//         setBestSeller(bestProduct.slice(0,5));
//     }, []);

//   return (
//     <div className='my-10'>
//           <div className='text-center text-3xl py-8'>
//               <Title text1={'BEST'} text2={'SELLERS'} />
//               <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Shop our bestsellers – the most-loved styles, trending outfits, and must-have fashion pieces. Discover what’s hot and grab your favorites before they’re gone!</p>
//           </div>
          
//           {/* Rendering Products */}
//           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6'>
//               {
//                   bestSeller.map((item, index) => (
//                   <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
//               ))
//               }
//           </div>
//     </div>
//   )
// }

// export default BestSeller
