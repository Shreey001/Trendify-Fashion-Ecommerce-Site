import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
        <div className='my-10'>
            {/* Header Section */}
            <div className='text-center py-12 relative mb-8'>
                {/* Decorative Elements */}
                <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
                
                {/* Main Heading */}
                <div className='space-y-4'>
                    <h2 className='text-4xl font-bold tracking-tight'>
                        Our
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                            Policies
                        </span>
                    </h2>
                    
                    {/* Subtitle */}
                    <p className='w-3/4 m-auto text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed'>
                        We're committed to providing the best shopping experience with our customer-friendly policies.
                    </p>
                </div>
            </div>

            {/* Policy Cards */}
            <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center text-xs sm:text-sm ms:text-base text-gray-700'>
                <div className='group'>
                    <img 
                        src={assets.exchange_icon} 
                        className='w-12 m-auto mb-5 transition-all duration-300 group-hover:filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]' 
                        alt="" 
                    />
                    <p className='font-semibold'>Easy Exchange Policy</p>
                    <p className='text-gray-400'>We offer free exchanges</p>
                </div>
                
                <div className='group'>
                    <img 
                        src={assets.quality_icon} 
                        className='w-12 m-auto mb-5 transition-all duration-300 group-hover:filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]' 
                        alt="" 
                    />
                    <p className='font-semibold'>7 Days Return Policy</p>
                    <p className='text-gray-400'>We offer 7 days free return policy.</p>
                </div>
                
                <div className='group'>
                    <img 
                        src={assets.support_img} 
                        className='w-12 m-auto mb-5 transition-all duration-300 group-hover:filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]' 
                        alt="" 
                    />
                    <p className='font-semibold'>Best Customer Support</p>
                    <p className='text-gray-400'>We offer 24/7 customer support</p>
                </div>
            </div>
        </div>
    )
}

export default OurPolicy

































// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm ms:text-base text-gray-700'>
         
//           <div>
//               <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//               <p className='font-semibold'>Easy Exchange Policy</p>
//               <p className='text-gray-400'>We offer free  exchanges</p>
//           </div>
          
//           <div >
//               <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//               <p className='font-semibold'>7 Days Return Policy</p>
//               <p className='text-gray-400'>We offer 7 days free return policy. </p>
//           </div>
          
//           <div >
//               <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
//               <p className='font-semibold'>Best Customer Support</p>
//               <p className='text-gray-400'>We offer 24/7 customer support </p>
//           </div>
          

//     </div>
//   )
// }

// export default OurPolicy
