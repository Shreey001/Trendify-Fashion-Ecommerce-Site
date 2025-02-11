import React, { useState } from 'react'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import OrderInfo from '../components/OrderInfo'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='min-h-screen bg-gray-50/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header Section */}
        <div className='text-center py-12 relative mb-16'>
          <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold tracking-tight'>
              Checkout
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                Details
              </span>
            </h2>
            <p className='text-gray-600 text-sm md:text-base'>
              Complete your order by providing your delivery information
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Left Side - Delivery Information */}
          <div className='lg:w-2/3'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Delivery Information</h3>
              
              <div className='space-y-6'>
                {/* Name Fields */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>First Name</label>
                    <input 
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleInputChange}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Ram'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Last Name</label>
                    <input 
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Bahadur'
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                    <input 
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      type='email' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='ramey@gmail.com'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                    <input 
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      type='tel' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='+977 98XXXXXXXX'
                    />
                  </div>
                </div>

                {/* Address Fields */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Street Address</label>
                  <input 
                    name='street'
                    value={formData.street}
                    onChange={handleInputChange}
                    type='text' 
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                             focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                    placeholder='Pallo Galli'
                  />
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>City</label>
                    <input 
                      name='city'
                      value={formData.city}
                      onChange={handleInputChange}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Butwali'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>State</label>
                    <input 
                      name='state'
                      value={formData.state}
                      onChange={handleInputChange}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Lumbini'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>ZIP Code</label>
                    <input 
                      name='zipCode'
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='363636'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Country</label>
                    <input 
                      name='country'
                      value={formData.country}
                      onChange={handleInputChange}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Nepal'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className='mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
              <h3 className='text-xl font-bold text-gray-900 mb-6'>Payment Method</h3>
              
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <div 
                  onClick={() => setMethod('stripe')}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer 
                            ${method === 'stripe' 
                              ? 'border-indigo-500 bg-indigo-50/50' 
                              : 'border-gray-200 hover:border-indigo-500'}`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 
                                ${method === 'stripe' 
                                  ? 'border-indigo-500 bg-indigo-500' 
                                  : 'border-gray-300'}`} 
                  />
                  <img className='h-6' src={assets.stripe_logo} alt='Stripe' />
                </div>

                <div 
                  onClick={() => setMethod('razorpay')}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer
                            ${method === 'razorpay' 
                              ? 'border-blue-500 bg-blue-50/50' 
                              : 'border-gray-200 hover:border-pink-200'}`}
                >
                  <div className={`w-4 h-4 rounded-full border-2
                                ${method === 'razorpay' 
                                  ? 'border-blue-500 bg-blue-500' 
                                  : 'border-gray-300'}`} 
                  />
                  <img className='h-6' src={assets.razorpay_logo} alt='Razorpay' />
                </div>

                <div 
                  onClick={() => setMethod('cod')}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer 
                            ${method === 'cod' 
                              ? 'border-pink-500 bg-pink-50/50' 
                              : 'border-gray-200 hover:border-pink-200'}`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 
                                ${method === 'cod' 
                                  ? 'border-pink-500 bg-pink-500' 
                                  : 'border-gray-300'}`} 
                  />
                  <span className='text-gray-700 font-medium'>Cash on Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className='lg:w-1/3'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24'>
              <OrderInfo formData={formData} />
              <CartTotal />
              <button
                className='w-full mt-6 bg-black text-white rounded-full py-3 px-8 font-medium
                         transition-all duration-300 hover:bg-gray-800 hover:shadow-lg 
                         hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-200'
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
















// import React, { useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'

// const PlaceOrder = () => {

//   const [method, setMethod] = useState('cod');

//   return (
//     <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* ----------------Left side ---------------- */}
//       <div className='flex flex-col gap4 w-full sm:max-w-[480px]'>
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY '} text2={'INFORMATON'} />
//         </div>
//         <div className='flex gap-3'>
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='First Name' />
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Last Name' />
//         </div>
//         <input className='mt-5 border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='email' placeholder='Email address' />
//         <input className='mt-5 border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Street' />

//         <div className='mt-5  flex gap-3'>
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='City' />
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='State' />
//         </div>

//         <div className='mt-5  flex gap-3'>
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='number' placeholder='Zipcode' />
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Country' />
//         </div>

//         <input className='mt-5 border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='number' placeholder='Phone' />

//       </div>
//       {/* ---------------------Right side-------------------- */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />

//         </div>
//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           {/* ----------PAYMENT METHODS------------- */}

//           <div className='flex gap-3 flex-col lg:flex-row '>

//             <div onClick={() => setMethod('stripe')}
//               className='flex items-center gap-3 border border-gray-200 p-2 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border border-gray-200  rounded-full ${method === 'stripe'? 'bg-green-400' :'' } `} ></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo}  alt=''/>
//             </div>

//             <div onClick={() => setMethod('razorpay')}
//               className='flex items-center gap-3 border border-gray-200 p-2 cursor-pointer'>
//              <p className={`min-w-3.5 h-3.5 border border-gray-200  rounded-full ${method === 'razorpay'? 'bg-green-400' :'' } `} ></p>
//               <img className='h-5 mx-4' src={assets.razorpay_logo}  alt=''/>
//             </div>

//             <div onClick={() => setMethod('cod')}
//               className='flex items-center gap-3 border border-gray-200  p-2 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border border-gray-200  rounded-full  ${method === 'cod'? 'bg-green-400' :'' } `} ></p>
//              <p className='text-gray-400 mx-4 text-sm font-medium '>CASH ON DELIVERY</p>
//             </div>

//           </div>
//           <div className='w-full text-end mt-8'>
//             <button className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>

//           </div>

//         </div>
//       </div>


//     </div>
//   )
// }

// export default PlaceOrder















// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'

// const PlaceOrder = () => {

//   const [method, setMethod] = useState('cod');

//   return (
//     <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* ----------------Left side ---------------- */}
//       <div className='flex flex-col gap4 w-full sm:max-w-[480px]'>
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY '} text2={'INFORMATON'} />
//         </div>
//         <div className='flex gap-3'>
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='First Name' />
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Last Name' />
//         </div>
//         <input className='mt-5 border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='email' placeholder='Email address' />
//         <input className='mt-5 border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Street' />

//         <div className='mt-5  flex gap-3'>
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='City' />
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='State' />
//         </div>

//         <div className='mt-5  flex gap-3'>
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='number' placeholder='Zipcode' />
//           <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Country' />
//         </div>

//         <input className='mt-5 border border-gray-400 rounded py-1.5 px-3.5 w-full ' type='number' placeholder='Phone' />

//       </div>
//       {/* ---------------------Right side-------------------- */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />

//         </div>
//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           {/* ----------PAYMENT METHODS------------- */}

//           <div className='flex gap-3 flex-col lg:flex-row '>

//             <div onClick={() => setMethod('stripe')}
//               className='flex items-center gap-3 border border-gray-200 p-2 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border border-gray-200  rounded-full ${method === 'stripe'? 'bg-green-400' :'' } `} ></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo}  alt=''/>
//             </div>

//             <div onClick={() => setMethod('razorpay')}
//               className='flex items-center gap-3 border border-gray-200 p-2 cursor-pointer'>
//              <p className={`min-w-3.5 h-3.5 border border-gray-200  rounded-full ${method === 'razorpay'? 'bg-green-400' :'' } `} ></p>
//               <img className='h-5 mx-4' src={assets.razorpay_logo}  alt=''/>
//             </div>

//             <div onClick={() => setMethod('cod')}
//               className='flex items-center gap-3 border border-gray-200  p-2 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border border-gray-200  rounded-full  ${method === 'cod'? 'bg-green-400' :'' } `} ></p>
//              <p className='text-gray-400 mx-4 text-sm font-medium '>CASH ON DELIVERY</p>
//             </div>

//           </div>
//           <div className='w-full text-end mt-8'>
//             <button className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>

//           </div>

//         </div>
//       </div>


//     </div>
//   )
// }

// export default PlaceOrder
