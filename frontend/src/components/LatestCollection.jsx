import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-12 relative'>
                {/* Decorative Elements */}
                <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
                
                {/* Main Heading */}
                <div className='space-y-4'>
                    <h2 className='text-4xl font-bold tracking-tight'>
                        Latest
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                            Collections
                        </span>
                    </h2>
                    
                    {/* Subtitle */}
                    <p className='w-3/4 m-auto text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed'>
                        Discover our latest collection—fresh styles, trendy designs, and must-have fashion pieces for every season. Shop now and upgrade your wardrobe with the newest arrivals!
                    </p>
                </div>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>

            {/* View All Button */}
            <div className='text-center mt-16'>
                <Link to="/collection">
                    <button className='px-8 py-3 border-2 border-black rounded-full text-sm font-medium
                                    hover:bg-black hover:text-white transition-all duration-300
                                    hover:shadow-lg hover:-translate-y-0.5'>
                        View All Collections
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LatestCollection



