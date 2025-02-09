
import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm ms:text-base text-gray-700'>
          
          <div className='group relative p-6 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_0_20px_rgba(75,85,99,0.15)] cursor-pointer'>
              <div className='absolute inset-0 rounded-xl transition-all duration-300 group-hover:border group-hover:border-gray-200 group-hover:scale-105 opacity-0 group-hover:opacity-100'></div>
              <img 
                src={assets.exchange_icon} 
                className='w-12 m-auto mb-5 transition-all duration-300 
                group-hover:filter group-hover:brightness-110 
                group-hover:drop-shadow-[0_0_8px_rgba(75,85,99,0.5)] 
                group-hover:scale-110 group-hover:rotate-6 
                group-hover:animate-pulse' 
                alt="" 
              />
              <p className='font-semibold group-hover:text-gray-900 transition-colors duration-300'>Easy Exchange Policy</p>
              <p className='text-gray-400'>We offer free exchanges</p>
          </div>
          
          <div className='group relative p-6 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_0_20px_rgba(75,85,99,0.15)] cursor-pointer'>
              <div className='absolute inset-0 rounded-xl transition-all duration-300 group-hover:border group-hover:border-gray-200 group-hover:scale-105 opacity-0 group-hover:opacity-100'></div>
              <img 
                src={assets.quality_icon} 
                className='w-12 m-auto mb-5 transition-all duration-300 
                group-hover:filter group-hover:brightness-110 
                group-hover:drop-shadow-[0_0_8px_rgba(75,85,99,0.5)] 
                group-hover:scale-110 group-hover:rotate-6 
                group-hover:animate-pulse' 
                alt="" 
              />
              <p className='font-semibold group-hover:text-gray-900 transition-colors duration-300'>7 Days Return Policy</p>
              <p className='text-gray-400'>We offer 7 days free return policy.</p>
          </div>
          
          <div className='group relative p-6 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_0_20px_rgba(75,85,99,0.15)] cursor-pointer'>
              <div className='absolute inset-0 rounded-xl transition-all duration-300 group-hover:border group-hover:border-gray-200 group-hover:scale-105 opacity-0 group-hover:opacity-100'></div>
              <img 
                src={assets.support_img} 
                className='w-12 m-auto mb-5 transition-all duration-300 
                group-hover:filter group-hover:brightness-110 
                group-hover:drop-shadow-[0_0_8px_rgba(75,85,99,0.5)] 
                group-hover:scale-110 group-hover:rotate-6 
                group-hover:animate-pulse' 
                alt="" 
              />
              <p className='font-semibold group-hover:text-gray-900 transition-colors duration-300'>Best Customer Support</p>
              <p className='text-gray-400'>We offer 24/7 customer support</p>
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
