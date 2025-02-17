import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    const policies = [
        {
            icon: assets.exchange_icon,
            title: 'Easy Exchange Policy',
            description: 'Hassle-free exchanges within 15 days',
            bgColor: 'from-pink-50 to-purple-50'
        },
        {
            icon: assets.quality_icon,
            title: '7 Days Return Policy',
            description: 'Full refund within 7 days, no questions asked',
            bgColor: 'from-purple-50 to-pink-50'
        },
        {
            icon: assets.delivery_icon,
            title: 'Fast Delivery',
            description: 'Free delivery on orders above Rs. 4000',
            bgColor: 'from-pink-50 to-purple-50'
        },
        {
            icon: assets.secure_icon,
            title: 'Secure Payment',
            description: '100% secure payment methods',
            bgColor: 'from-purple-50 to-pink-50'
        }
    ];

    return (
        <div className='my-16 px-4 max-w-7xl mx-auto'>
            {/* Header Section */}
            <div className='text-center py-12 relative mb-12'>
                {/* Decorative Elements */}
                <div className='absolute left-1/2 top-0 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
                
                {/* Main Heading */}
                <div className='space-y-6'>
                    <h2 className='text-4xl font-bold tracking-tight'>
                        Our
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                            Policies
                        </span>
                    </h2>
                    
                    {/* Subtitle */}
                    <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                        We're committed to providing the best shopping experience with our customer-friendly policies.
                    </p>
                </div>
            </div>

            {/* Policy Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {policies.map((policy, index) => (
                    <div 
                        key={index}
                        className='group relative overflow-hidden rounded-2xl p-6 transition-all duration-300
                                 bg-gradient-to-br ${policy.bgColor} hover:shadow-xl hover:-translate-y-1'
                    >
                        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100'></div>
                        
                        <img 
                            src={policy.icon} 
                            className={`mb-6 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]
                                      ${policy.icon === assets.delivery_icon ? 'w-20 h-16' : 'w-16 h-16'}`}
                            alt={policy.title}
                        />
                        
                        <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                            {policy.title}
                        </h3>
                        
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            {policy.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurPolicy
