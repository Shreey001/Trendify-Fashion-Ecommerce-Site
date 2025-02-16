import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from "../components/RelatedProducts.jsx";

const Product = () => {
    const { products, currency,addToCart } = useContext(ShopContext)
    const { productId } = useParams()
    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')
    const [activeTab, setActiveTab] = useState('description')
    const [visibleReviews, setVisibleReviews] = useState(3)

    const allReviews = [
        {
            name: 'Shreeyjan Bhattarai',
            image: assets.profile_icon,
            rating: 5,
            date: '2 days ago',
            comment: 'Absolutely love this! The quality is outstanding and it fits perfectly. Will definitely be ordering more colors.',
            helpful: 24
        },
        {
            name: 'Anish Shrestha',
            image: assets.profile_icon,
            rating: 4,
            date: '1 week ago',
            comment: 'Great product overall. The material is comfortable and the design is stylish. Only giving 4 stars because shipping took a bit longer than expected.',
            helpful: 15
        },
        {
            name: 'Prashant Raj',
            image: assets.profile_icon,
            rating: 5,
            date: '2 weeks ago',
            comment: 'Perfect fit and exactly as described! The color is beautiful and the quality is excellent. Highly recommend!',
            helpful: 32
        },
        {
            name: 'Sushant Kumar',
            image: assets.profile_icon,
            rating: 5,
            date: '3 weeks ago',
            comment: 'एकदम राम्रो प्रोडक्ट, क्वालिटी पनि मिलेकै छ। डेलिभरी पनि छिटो भयो।',
            helpful: 45
        },
        {
            name: 'Aayush Adhikari',
            image: assets.profile_icon,
            rating: 4,
            date: '1 month ago',
            comment: 'Value for money product. Fabric quality is good and stitching is neat. Just what I was looking for!',
            helpful: 28
        },
        {
            name: 'Biplov Subedi',
            image: assets.profile_icon,
            rating: 5,
            date: '1 month ago',
            comment: 'Second time ordering from here. Always satisfied with the quality and service.',
            helpful: 19
        },
        {
            name: 'Sandesh Bhattarai',
            image: assets.profile_icon,
            rating: 4,
            date: '2 months ago',
            comment: 'Good product but delivery took some time. Overall satisfied with the purchase.',
            helpful: 12
        },
        {
            name: 'Rohan Thapa',
            image: assets.profile_icon,
            rating: 5,
            date: '2 months ago',
            comment: 'Fits perfectly! The material quality is excellent. Will order more items soon.',
            helpful: 34
        }
    ]

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                return null
            }
        })
    }

    useEffect(() => {
        fetchProductData()
    }, [productId])

    return productData ? (
        <div className='border-t border-gray-100 pt-10 transition-all duration-500'>
            {/* Product Data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((item, index) => (
                            <img 
                                onClick={() => setImage(item)} 
                                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg 
                                          transition-all duration-300
                                          ${image === item 
                                            ? 'border-2 border-pink-500' 
                                            : 'hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-[1.02]'
                                          }`}
                                src={item} 
                                key={index} 
                                alt="" 
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-[80%] group'>
                        <img 
                            src={image} 
                            alt="" 
                            className='w-full h-auto rounded-2xl shadow-lg transition-all duration-500 
                                     group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] group-hover:scale-[1.01]' 
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className='flex-1 space-y-6'>
                    <h1 className='text-3xl font-bold text-gray-900'>{productData.name}</h1>
                    
                    <div className='flex items-center gap-1'>
                        {[1, 2, 3, 4].map((_, index) => (
                            <img key={index} src={assets.star_icon} alt="" className="w-4 h-4" />
                        ))}
                        <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
                        <p className='pl-2 text-gray-600'>(122)</p>
                    </div>

                    <p className='text-3xl font-semibold text-pink-500'>{currency}{productData.price}</p>
                    <p className='text-gray-600 leading-relaxed md:w-4/5'>{productData.description}</p>

                    <div className='space-y-4'>
                        <p className='font-medium text-gray-700'>Select Size</p>
                        <div className='flex gap-3'>
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300
                                              ${item === size 
                                                ? 'border-pink-500 text-pink-500' 
                                                : 'border-gray-300 hover:border-pink-500 hover:text-pink-500'
                                              }`} 
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() =>addToCart(productData._id,size)}
                        className='w-full sm:w-auto px-12 py-4 bg-black text-white rounded-full font-medium
                                     transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5'>
                        ADD TO CART
                    </button>

                    <hr className='border-gray-100' />

                    <div className='space-y-4 text-sm text-gray-600'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.quality_icon} className='w-5 h-5' alt="" />
                            <p>100% Original product.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.exchange_icon} className='w-5 h-5' alt="" />
                            <p>Cash on delivery is available on this product</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.support_img} className='w-5 h-5' alt="" />
                            <p>Easy return and exchange policy within 7 days</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description and Review Section */}
            <div className='mt-20'>
                {/* Tabs */}
                <div className='flex border-b border-gray-200'>
                    <button 
                        onClick={() => setActiveTab('description')} 
                        className={`px-8 py-4 text-sm font-bold transition-colors
                                  ${activeTab === 'description' 
                                    ? 'border-b-2 border-pink-500 text-pink-500' 
                                    : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Description
                    </button>
                    <button 
                        onClick={() => setActiveTab('reviews')} 
                        className={`px-8 py-4 text-sm font-bold transition-colors
                                  ${activeTab === 'reviews' 
                                    ? 'border-b-2 border-pink-500 text-pink-500' 
                                    : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Reviews (122)
                    </button>
                </div>

                {/* Tab Content */}
                <div className='py-8'>
                    {activeTab === 'description' ? (
                        <div className='space-y-4 text-gray-600 leading-relaxed'>
                            <p>Upgrade your wardrobe with this stylish and comfortable piece. Made from high-quality fabric, it offers a perfect fit and lasting durability. Whether you're dressing up for an occasion or keeping it casual, this must-have addition will elevate your look. Available in multiple sizes and colors—shop now and stay ahead in fashion!</p>
                            <p>Designed for both style and versatility, this piece effortlessly complements any wardrobe. Its breathable fabric ensures all-day comfort, while the modern design adds a touch of elegance. Pair it with your favorite accessories to create a look that's uniquely yours. Don't miss out—get yours today!</p>
                        </div>
                    ) : (
                        <div className='space-y-8'>
                            {/* Review Stats */}
                            <div className='flex items-center gap-8 p-6 bg-gray-50 rounded-xl'>
                                <div className='text-center'>
                                    <p className='text-3xl font-bold text-gray-900'>4.5</p>
                                    <div className='flex gap-1 my-2'>
                                        {[1, 2, 3, 4].map((_, index) => (
                                            <img key={index} src={assets.star_icon} alt="" className="w-4 h-4" />
                                        ))}
                                        <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
                                    </div>
                                    <p className='text-sm text-gray-500'>Based on 122 reviews</p>
                                </div>
                                <div className='flex-1 space-y-2'>
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <div key={stars} className='flex items-center gap-2'>
                                            <span className='text-sm text-gray-500 w-3'>{stars}</span>
                                            <div className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                                <div 
                                                    className='h-full bg-pink-500 rounded-full'
                                                    style={{ width: `${stars * 20}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Review List */}
                            <div className='space-y-6'>
                                {allReviews.slice(0, visibleReviews).map((review, index) => (
                                    <div key={index} className='border-b border-gray-100 pb-6'>
                                        <div className='flex justify-between items-start'>
                                            <div className='flex gap-3'>
                                                <img 
                                                    src={review.image} 
                                                    alt={review.name} 
                                                    className='w-10 h-10 rounded-full'
                                                />
                                                <div>
                                                    <p className='font-medium text-gray-900'>{review.name}</p>
                                                    <div className='flex gap-1 my-1'>
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <img key={i} src={assets.star_icon} alt="" className="w-3 h-3" />
                                                        ))}
                                                    </div>
                                                    <p className='text-sm text-gray-500'>{review.date}</p>
                                                </div>
                                            </div>
                                            <button className='text-sm text-gray-500 hover:text-gray-700'>Report</button>
                                        </div>
                                        <p className='mt-4 text-gray-600'>{review.comment}</p>
                                        <div className='mt-4 flex items-center gap-4'>
                                            <button className='flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700'>
                                                <span>👍</span>
                                                Helpful ({review.helpful})
                                            </button>
                                            <button className='text-sm text-gray-500 hover:text-gray-700'>Reply</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button - Only show if there are more reviews to load */}
                            {visibleReviews < allReviews.length && (
                                <div className='text-center'>
                                    <button 
                                        onClick={() => setVisibleReviews(prev => prev + 3)}
                                        className='px-8 py-2 border-2 border-gray-200 rounded-full text-sm font-medium
                                                 hover:border-pink-500 hover:text-pink-500 transition-all duration-300
                                                 active:scale-95'
                                    >
                                        Load More Reviews
                                    </button>
                                </div>
                            )}

                            {/* Show "No more reviews" message when all reviews are loaded */}
                            {visibleReviews >= allReviews.length && (
                                <div className='text-center text-gray-500 text-sm'>
                                    No more reviews to load
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        {/* ----------------------------   Related Products display-----------------------*/}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

        </div>
    ) : <div className='opacity-0'></div>
}

export default Product

