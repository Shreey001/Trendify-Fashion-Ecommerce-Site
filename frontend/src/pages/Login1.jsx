// import React, { useState, useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets'
// import SignupPreview from '../components/SignupPreview'

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true)
//   const { navigate } = useContext(ShopContext)

//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   })

//   const [signupData, setSignupData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   })

//   return (
//     <div className='min-h-screen bg-gray-50/30'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
//         <div className='flex gap-8'>
//           {/* Main Form Section */}
//           <div className='max-w-md mx-auto flex-1'>
//             {/* Header Section */}
//             <div className='text-center py-8 relative mb-8'>
//               <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
//               <div className='space-y-4'>
//                 <h2 className='text-4xl font-bold tracking-tight'>
//                   {isLogin ? 'Welcome' : 'Join Us'}
//                   <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
//                     Back
//                   </span>
//                 </h2>
//                 <p className='text-gray-600 text-sm md:text-base'>
//                   {isLogin ? 'Sign in to your account' : 'Create your account'}
//                 </p>
//               </div>
//             </div>

//             {/* Form Container */}
//             <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-8'>
//               {/* Toggle Buttons */}
//               <div className='flex rounded-lg bg-gray-50 p-1 mb-8'>
//                 <button
//                   onClick={() => setIsLogin(true)}
//                   className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300
//                             ${isLogin 
//                               ? 'bg-white text-gray-900 shadow-sm' 
//                               : 'text-gray-500 hover:text-gray-900'}`}
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => setIsLogin(false)}
//                   className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300
//                             ${!isLogin 
//                               ? 'bg-white text-gray-900 shadow-sm' 
//                               : 'text-gray-500 hover:text-gray-900'}`}
//                 >
//                   Sign Up
//                 </button>
//               </div>

//               {/* Login Form */}
//               {isLogin ? (
//                 <form className='space-y-6'>
//                   <div>
//                     <label className='block text-sm font-medium text-gray-700 mb-2'>
//                       Email Address
//                     </label>
//                     <input
//                       type='email'
//                       value={loginData.email}
//                       onChange={(e) => setLoginData({...loginData, email: e.target.value})}
//                       className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
//                                focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
//                       placeholder='you@example.com'
//                     />
//                   </div>

//                   <div>
//                     <label className='block text-sm font-medium text-gray-700 mb-2'>
//                       Password
//                     </label>
//                     <input
//                       type='password'
//                       value={loginData.password}
//                       onChange={(e) => setLoginData({...loginData, password: e.target.value})}
//                       className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
//                                focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
//                       placeholder='••••••••'
//                     />
//                   </div>

//                   <div className='flex items-center justify-between'>
//                     <div className='flex items-center'>
//                       <input
//                         type='checkbox'
//                         className='h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500'
//                       />
//                       <label className='ml-2 block text-sm text-gray-700'>
//                         Remember me
//                       </label>
//                     </div>
//                     <button className='text-sm font-medium text-pink-500 hover:text-pink-600'>
//                       Forgot Password?
//                     </button>
//                   </div>

//                   <button
//                     type='submit'
//                     className='w-full py-3 px-4 bg-black text-white rounded-full font-medium
//                              transition-all duration-300 hover:bg-gray-800 hover:shadow-lg 
//                              hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-200'
//                   >
//                     Sign In
//                   </button>
//                 </form>
//               ) : (
//                 /* Sign Up Form */
//                 <form className='space-y-6'>
//                   <div>
//                     <label className='block text-sm font-medium text-gray-700 mb-2'>
//                       Full Name
//                     </label>
//                     <input
//                       type='text'
//                       value={signupData.name}
//                       onChange={(e) => setSignupData({...signupData, name: e.target.value})}
//                       className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
//                                focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
//                       placeholder='John Doe'
//                     />
//                   </div>

//                   <div>
//                     <label className='block text-sm font-medium text-gray-700 mb-2'>
//                       Email Address
//                     </label>
//                     <input
//                       type='email'
//                       value={signupData.email}
//                       onChange={(e) => setSignupData({...signupData, email: e.target.value})}
//                       className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
//                                focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
//                       placeholder='you@example.com'
//                     />
//                   </div>

//                   <div>
//                     <label className='block text-sm font-medium text-gray-700 mb-2'>
//                       Password
//                     </label>
//                     <input
//                       type='password'
//                       value={signupData.password}
//                       onChange={(e) => setSignupData({...signupData, password: e.target.value})}
//                       className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
//                                focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
//                       placeholder='••••••••'
//                     />
//                   </div>

//                   <button
//                     type='submit'
//                     className='w-full py-3 px-4 bg-black text-white rounded-full font-medium
//                              transition-all duration-300 hover:bg-gray-800 hover:shadow-lg 
//                              hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-200'
//                   >
//                     Create Account
//                   </button>
//                 </form>
//               )}
              
//             </div>
//           </div>

//           {/* Preview Section - Only show during signup */}
//           {!isLogin && (
//             <div className='w-[400px] hidden lg:block'>
//               <SignupPreview formData={signupData} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
