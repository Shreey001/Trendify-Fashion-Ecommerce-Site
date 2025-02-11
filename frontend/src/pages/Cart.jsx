import React, {useEffect, useState,useContext} from 'react'
import {ShopContext} from "../context/ShopContext";
import Title from "../components/Title.jsx";
import {assets} from "../assets/assets.js";
import CartTotal from '../components/CartTotal.jsx';

const Cart = () => {

  const {products,currency,cartItems,updateQuantity,navigate} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);


  useEffect(() => {
    const tempData = [];

    for (const items in cartItems){
      for (const item in cartItems[items]){
        if (cartItems[items][item] > 0 ){
          tempData.push({
            _id: items,
            size:item,
            quantity:cartItems[items][item]
              }

          )
        }
      }
    }

setCartData(tempData);

  },[cartItems]);

  return (
    <div className='min-h-screen bg-gray-50/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Enhanced Header Section */}
        <div className='text-center py-12 relative mb-16'>
          {/* Decorative Elements */}
          <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
          
          {/* Main Heading */}
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold tracking-tight'>
              Shopping
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                Cart
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className='text-gray-600 text-sm md:text-base'>
              {cartData.length} {cartData.length === 1 ? 'item' : 'items'} in your shopping cart
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Cart Items */}
          <div className='lg:w-2/3 space-y-4'>
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              return (
                <div
                  key={index}
                  className='bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300
                           border border-gray-100'
                >
                  <div className='flex gap-4 items-center'>
                    {/* Product Image */}
                    <div className='w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-gray-100'>
                      <img 
                        className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' 
                        src={productData.image[0]} 
                        alt={productData.name}
                      />
                    </div>

                    {/* Product Details */}
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-lg font-medium text-gray-900 truncate'>{productData.name}</h3>
                      <div className='mt-1 flex items-center gap-4'>
                        <span className='text-lg font-medium text-pink-500'>{currency}{productData.price}</span>
                        <span className='px-3 py-1 text-sm bg-gray-100 rounded-full'>{item.size}</span>
                      </div>

                      {/* Quantity Control */}
                      <div className='mt-4 flex items-center gap-4'>
                        <div className='flex items-center'>
                          <label className='text-sm text-gray-600 mr-2'>Quantity:</label>
                          <input
                            type="number"
                            min="1"
                            defaultValue={item.quantity}
                            onChange={(e) => e.target.value === '' || e.target.value === '0' 
                              ? null 
                              : updateQuantity(item._id, item.size, Number(e.target.value))}
                            className='w-16 px-2 py-1 border border-gray-200 rounded-lg text-center
                                     focus:border-pink-500 focus:ring-1 focus:ring-pink-200 outline-none'
                          />
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className='text-sm text-gray-500 hover:text-red-500 flex items-center gap-1
                                   transition-colors duration-300'
                        >
                          <img className='w-4 h-4' src={assets.bin_icon} alt="Remove" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Enhanced Empty Cart Message */}
            {cartData.length === 0 && (
              <div className='text-center py-20 px-4 bg-white rounded-2xl shadow-sm border border-gray-100'>
                <div className='max-w-md mx-auto space-y-6'>
                  <div className='relative w-24 h-24 mx-auto'>
                    <div className='absolute inset-0 bg-red-200 rounded-full animate-pulse'></div>
                    <img 
                      src={assets.empty_cart} 
                      alt="Empty Cart" 
                      className='relative w-full h-full p-6'
                    />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900'>Your Cart is Empty</h3>
                  <p className='text-gray-500'>
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <button
                    onClick={() => navigate('/collection')}
                    className='inline-flex items-center px-8 py-3 bg-black text-white rounded-full 
                             font-medium transition-all duration-300 hover:bg-gray-800 
                             hover:shadow-lg hover:-translate-y-0.5'
                  >
                    Continue Shopping
                    <svg 
                      className='ml-2 w-5 h-5' 
                      fill='none' 
                      stroke='currentColor' 
                      viewBox='0 0 24 24'
                    >
                      <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        strokeWidth={2} 
                        d='M17 8l4 4m0 0l-4 4m4-4H3' 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Cart Total Section */}
          <div className='lg:w-1/3'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24'>
              <CartTotal />
              {cartData.length > 0 && (
                <button
                  onClick={() => navigate('/placeorder')}
                  className='w-full mt-6 bg-black text-white rounded-full py-3 px-8 font-medium
                           transition-all duration-300 hover:bg-gray-800 hover:shadow-lg 
                           hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-200'
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart

























// import React, {useEffect, useState,useContext} from 'react'
// import {ShopContext} from "../context/ShopContext";
// import Title from "../components/Title.jsx";
// import {assets} from "../assets/assets.js";
// import CartTotal from '../components/CartTotal.jsx';

// const Cart = () => {

//   const {products,currency,cartItems,updateQuantity,navigate} = useContext(ShopContext);

//   const [cartData, setCartData] = useState([]);


//   useEffect(() => {
//     const tempData = [];

//     for (const items in cartItems){
//       for (const item in cartItems[items]){
//         if (cartItems[items][item] > 0 ){
//           tempData.push({
//             _id: items,
//             size:item,
//             quantity:cartItems[items][item]
//               }

//           )
//         }
//       }
//     }

// setCartData(tempData);

//   },[cartItems]);

//   return (
//       <div className='border-t pt-14'>
//         <div className='text-2xl mb-3'>
//           <Title text1={'YOUR'} text2={'CART'} />
//         </div>
//         <div>
//           {
//             cartData.map((item, index) => {
//             const productData = products.find((product) => product._id === item._id);

//             return (
//                 <div
//                     key={index}
//                     className='border-t py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '
//                 >
//                   <div className='flex items-start gap-6'>
//                     <img className='w-16 sm:w-20' src={productData.image[0]} alt=""   />
//                     <div>
//                       <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                       <div className='flex items-center gap-5 mt-2'>
//                         <p>
//                           {currency}{productData.price}
//                         </p>
//                         <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <input onChange={(e)=>e.target.value==='' || e.target.value==='0' ? null: updateQuantity(item._id,item.size,Number(e.target.value)) }
//                          className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type={"number"} min={1} defaultValue={item.quantity}  />
//                   <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-6 mr-2 sm:w-7 cursor-pointer' src={assets.bin_icon} alt="" />
//                 </div>
//             );
//           }
//           )}
//       </div>
//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal />
          
//           <div className='w-full text-end'>
//             <button onClick={()=>navigate('/placeorder')} className='bg-black text-white text-sm my-8 px-8 py-2  '
//             >PROCEED TO CHECKOUT</button>
            
// </div>

//         </div>

//       </div>

//       </div>
//   );

// }

// export default Cart
