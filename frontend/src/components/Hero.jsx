import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='relative min-h-[80vh] flex flex-col sm:flex-row items-center overflow-hidden bg-gradient-to-r from-pink-50 to-gray-50'>
      {/* Left Content */}
      <div className='w-full sm:w-1/2 px-6 sm:px-12 lg:px-20 py-12 z-10'>
        <div className='space-y-6'>
          <div className='flex items-center gap-3'>
            <span className='h-[2px] w-8 bg-pink-500'></span>
            <p className='text-sm font-medium text-pink-500 tracking-wider'>NEW COLLECTION 2024</p>
          </div>
          
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
            Discover Your
            <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
              Perfect Style
            </span>
          </h1>
          
          <p className='text-gray-600 max-w-md'>
            Explore our curated collection of trendy and timeless pieces that define your unique style.
          </p>
          
          <div className='flex gap-4 pt-4'>
            <Link to="/collection">
              <button className='px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button className='px-8 py-3 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 hover:border-pink-600 hover:text-pink-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className='w-full sm:w-1/2 h-full relative group'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-50 to-transparent sm:hidden'></div>
        <div className='overflow-hidden'>
          <img 
            className='w-full h-[50vh] sm:h-[80vh] object-cover object-center transform transition-all duration-500 ease-out
                     group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]' 
            src={assets.hero_img} 
            alt="Fashion Model"
          />
        </div>
        
        {/* Floating Elements */}
        <div className='absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg 
                      transform transition-all duration-500 group-hover:translate-y-[-8px] hover:shadow-xl'>
          <p className='text-sm font-semibold'>Special Offer</p>
          <p className='text-pink-500 font-bold'>Up to 50% Off</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute -top-20 -left-20 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-20'></div>
      <div className='absolute -bottom-20 -right-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-20'></div>
    </div>
  )
}

export default Hero























// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400' >
//           {/* Hero Left Side */}
//           <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0' >
//               <div className='text-[#414141]' >
//                   <div className='flex items-center gap-2'>
//                       <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>  
//                       <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                      
//                   </div>
//                   <h1 className='prata-regular   text-3xl sm:py-3 lg:text-5xl leading-relaxed' >Latest Arrivals</h1>
//                   <div className='flex items-center gap-2'>
//                       <p className=' font-semibold text-sm md:text-base'>SHOP NOW</p>
//                       <p className='w-8 md:w-11 h-[2px] bg-[#414141]' ></p>
//                   </div>
//               </div>
              
//           </div>

//           {/* Hero Right Side */}
//           <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   ) 
// }

// export default Hero
