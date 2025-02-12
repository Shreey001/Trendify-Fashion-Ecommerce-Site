import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const { products, currency, navigate } = useContext(ShopContext)

  return (
    <div className='min-h-screen bg-gray-50/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header Section */}
        <div className='text-center py-12 relative mb-16'>
          <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold tracking-tight'>
              My
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                Orders
              </span>
            </h2>
            <p className='text-gray-600 text-sm md:text-base'>
              Track and manage your orders
            </p>
          </div>
        </div>

        {/* Orders List */}
        <div className='space-y-6'>
          {products.slice(1, 4).map((item, index) => (
            <div 
              key={index}
              className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden 
                       hover:shadow-md transition-all duration-300'
            >
              <div className='p-6'>
                {/* Order Header with Status */}
                <div className='flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100'>
                  <div className='space-y-1'>
                    <p className='text-sm text-gray-500'>Order ID</p>
                    <p className='font-medium'>#{(Math.random() * 1000000).toFixed(0)}</p>
                  </div>
                  <div className='space-y-1'>
                    <p className='text-sm text-gray-500'>Order Date</p>
                    <p className='font-medium'>25 Jul, 2024</p>
                  </div>
                  <div className='space-y-1'>
                    <p className='text-sm text-gray-500'>Total Amount</p>
                    <p className='font-medium'>{currency}{item.price}</p>
                  </div>
                  <div className='flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full'>
                    <div className='w-2 h-2 rounded-full bg-green-500'></div>
                    <p className='text-sm font-medium text-green-700'>Ready to ship</p>
                  </div>
                </div>

                {/* Order Details */}
                <div className='flex flex-col md:flex-row md:items-center gap-6'>
                  {/* Product Info */}
                  <div className='flex gap-4'>
                    <div className='w-24 h-24 rounded-lg overflow-hidden bg-gray-50'>
                      <img 
                        src={item.image[0]} 
                        alt={item.name}
                        className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' 
                      />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-medium text-gray-900 mb-2'>{item.name}</h3>
                      <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
                        <p>Quantity: 1</p>
                        <p>Size: M</p>
                        <p>{currency}{item.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className='md:ml-auto'>
                    <button className='px-6 py-2 border border-gray-200 rounded-full text-sm font-medium
                                   hover:bg-gray-50 hover:border-gray-300 transition-all duration-300
                                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'>
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className='text-center py-12'>
            <div className='w-24 h-24 mx-auto mb-6 text-gray-300'>
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>No Orders Yet</h3>
            <p className='text-gray-500 mb-6'>
              Looks like you haven't placed any orders yet
            </p>
            <button
              onClick={() => navigate('/collection')}
              className='inline-flex items-center px-6 py-3 bg-black text-white rounded-full 
                       font-medium transition-all duration-300 hover:bg-gray-800 
                       hover:shadow-lg hover:-translate-y-0.5'
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
