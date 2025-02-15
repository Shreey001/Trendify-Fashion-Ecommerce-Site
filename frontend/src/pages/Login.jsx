import React, { useState,useContext,useEffect } from 'react'
import SignupPreview from '../components/SignupPreview'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';




const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const {setToken,token,navigate,backendUrl} = useContext(ShopContext);

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  const onSubmitHandler = async(event) => { 
    event.preventDefault()

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register',{ name,email,password})
        

        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
          
        }else{
          toast.error(response.data.message);
        }

      }
      else{
        const response = await axios.post(backendUrl + '/api/user/login',{ email,password})
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
        }else{
          toast.error(response.data.message);
        }
      }
      
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      
      
    }
  }
  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token]);

 

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  return (
    <div className='min-h-screen bg-gray-50/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex gap-8'>
          {/* Main Form Section */}
          <div className='max-w-md mx-auto flex-1'>
            {/* Header Section */}
            <div className='text-center py-12 relative mb-8'>
              <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
              <div className='space-y-4'>
                <h2 className='text-4xl font-bold tracking-tight'>
                  {currentState === 'Login' ? 'Welcome' : 'Join Us'}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                    {currentState === 'Login' ? 'Back' : 'Now'}
                  </span>
                </h2>
                <p className='text-gray-600 text-sm md:text-base'>
                  {currentState === 'Login' ? 'Sign in to your account' : 'Create your account to get started'}
                </p>
              </div>
            </div>

            {/* Form Container */}
            <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-8'>
              <form onSubmit={onSubmitHandler} className='space-y-6'>
                {/* Name Input - Only for Sign Up */}
                {currentState !== 'Login' && (
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
                    <input 
                    onChange={(e)=>setName(e.target.value)}   value={name}
                      type='text'
                      name='name'
                    
                      // onChange={handleInputChange}
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='John Doe'
                      required 
                    />
                  </div>
                )}

                {/* Email Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                  <input 
                    type='email'
                    name='email'
                    onChange={(e)=>setEmail(e.target.value)}   value={email}
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
                             focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                    placeholder='you@example.com'
                    required 
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
                  <input 
                    type='password'
                    name='password'
                    onChange={(e)=>setPassword(e.target.value)}   value={password}
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
                             focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                    placeholder='••••••••'
                    required 
                  />
                </div>

                {/* Additional Options */}
                <div className='flex items-center justify-between text-sm'>
                  <p className='text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200'>
                    Forgot your password?
                  </p>
                  <p 
                    onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
                    className='text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200'
                  >
                    {currentState === 'Login' ? 'Create Account' : 'Login Here'}
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full py-3 px-4 bg-black text-white rounded-full font-medium
                           transition-all duration-300 hover:bg-gray-800 hover:shadow-lg 
                           hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-200'
                >
                  {currentState === 'Login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>
            </div>
          </div>

          {/* Preview Section - Only show during signup */}
          {currentState !== 'Login' && (
            <div className='w-[400px] hidden lg:block'>
              <SignupPreview formData={formData} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
