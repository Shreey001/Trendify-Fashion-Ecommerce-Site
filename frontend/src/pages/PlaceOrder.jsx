import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import OrderInfo from '../components/OrderInfo'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const { navigate,backendUrl,token,cartItems,setCartItems,getCartItems,getCartAmount,delivery_fee,productsData,products } = useContext(ShopContext);


const [formData,setFormData] = useState({
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  street:'',
  city:'',
  zipCode:'',
  country:'',
  state:''
})

  
  const onChangeHandler = (e) => {
    const name= e.target.name;
    const value= e.target.value;

    setFormData((data)=>({
      ...data,
      [name]:value
    }))

  }

const onSubmitHandler = async (event) => {
  event.preventDefault();
  try {
    let orderItems=[]

    for (const items in cartItems){
    for (const item in cartItems[items]){
      if (cartItems[items][item] > 0){

        const itemInfo = structuredClone(products.find(product=>product._id === items))
        if (itemInfo){
          itemInfo.size= item
          itemInfo.quantity= cartItems[items][item]
          orderItems.push(itemInfo)
        }
      }
    }
    }
let orderData= {
  address: formData,
  items:orderItems,
  amount:getCartAmount()+delivery_fee,
}
switch (method){
  //api calls for cod
  case 'cod':
    const response= await axios.post(backendUrl+'/api/order/place',orderData,
      {
        headers:{token}
      }
    )
    if (response.data.success){
      setCartItems({})
      navigate('/orders')
      
    }
    else{
      toast.error(response.data.message)
    }

  break;

//api calls for stripe

case 'stripe':

const responseStripe= await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{token}})

if (responseStripe.data.success){
 const {session_url}= responseStripe.data;
 window.location.replace(session_url)


}
else{
  toast.error(responseStripe.data.message)
}



    break;
  

  default:
    break;

}


  } catch (error) {
    console.log(error);
    toast.error(error.message)
   
    
  }
}


 

  return (
    <form className='min-h-screen bg-gray-50/30' onSubmit={onSubmitHandler}>
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
                    onChange={onChangeHandler}

                      name='firstName'
                      value={formData.firstName}
                      
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Ram'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Last Name</label>
                    <input 
                      name='lastName'
                      value={formData.lastName}
                      onChange={onChangeHandler}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Bahadur'
                      required
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
                      onChange={onChangeHandler}
                      type='email' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='ramey@gmail.com'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                    <input 
                      name='phone'
                      value={formData.phone}
                      onChange={onChangeHandler}
                      type='tel' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='+977 98XXXXXXXX'
                      required
                    />
                  </div>
                </div>

                {/* Address Fields */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Street Address</label>
                  <input 
                    name='street'
                    value={formData.street}
                    onChange={onChangeHandler}
                    type='text' 
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                             focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                    placeholder='Pallo Galli'
                    required
                  />
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>City</label>
                    <input 
                      name='city'
                      value={formData.city}
                      onChange={onChangeHandler}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Butwali'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>State</label>
                    <input 
                      name='state'
                      value={formData.state}
                      onChange={onChangeHandler}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Lumbini'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>ZIP Code</label>
                    <input 
                      name='zipCode'
                      value={formData.zipCode}
                      onChange={onChangeHandler}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='363636'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Country</label>
                    <input 
                      name='country'
                      value={formData.country}
                      onChange={onChangeHandler}
                      type='text' 
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 
                               focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                      placeholder='Nepal'
                      required
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
                  onClick={() => setMethod('khalti')}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer
                            ${method === 'khalti' 
                              ? 'border-purple-700 bg-blue-50/50' 
                              : 'border-gray-200 hover:border-pink-200'}`}
                >
                  <div className={`w-4 h-4 rounded-full border-2
                                ${method === 'khalti' 
                                  ? 'border-purple-700 bg-purple-700' 
                                  : 'border-gray-300'}`} 
                  />
                  <img className='h-9 w-23' src={assets.razorpay_logo} alt='Razorpay' />
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
              <button type='submit'
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
    </form>
  )
}

export default PlaceOrder

