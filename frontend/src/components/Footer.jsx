
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
      <div>
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
              <div>
                  <div className='w-fit'>
                      <img 
                          className='mb-5 w-40 animate-swing origin-center transition-all duration-300 hover:rotate-12' 
                          src={assets.logo} 
                          alt="" 
                          style={{
                              animation: 'swing 1s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate'
                          }}
                      />
                  </div>
                  <p className='w-full md:w-2/3 text-gray-600'>
                      Welcome Dear Customer, your ultimate destination for trendy and stylish fashion. We bring you the latest collections, top-quality fabrics, and designs that make you stand out. Our mission is to make fashion accessible, affordable, and effortless for everyone.
                  </p>
              </div>

              <div>
                  <p className='text-xl font-medium mb-5'>COMPANY  </p>
                      <ul className='flex flex-col gap-1 text-gray-600'>
                          <li>Home</li>
                          <li>About us</li>
                          <li>Delivery</li>
                          <li>Privacy Policy</li>
                      </ul>
              </div>
              
              <div>
                  <p className='text-xl font-medium mb-5'>
                      GET IN TOUCH </p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>+9779866XXXXXX</li>
                      <li>shreejanid123@gmail.com</li>
                  </ul>
              </div>
          </div>
          <div>
              <hr />
              <p className='py-5 text-sm text-center'> 
                  Copyright© 2025 Shreeyjan. All rights reserved.  
              </p>
          </div>
      </div>
  )
}

export default Footer


const styles = `
@keyframes swing {
    0% {
        transform: rotate(-8deg);
    }
    100% {
        transform: rotate(8deg);
    }
}
`;


const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);