
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
  const { products, cartItems, currency } = useContext(ShopContext)

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          let itemInfo = products.find((product) => product._id === items)
          totalAmount += itemInfo.price * cartItems[items][item]
        }
      }
    }
    return totalAmount
  }

  const shipping = getTotalCartAmount() > 1000 ? 0 : 100
  const total = getTotalCartAmount() + shipping

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <h3 className='text-2xl font-bold text-gray-900'>Order Summary</h3>
        <p className='text-sm text-gray-500'>Price details and additional costs</p>
      </div>
      
      <div className='space-y-3 text-gray-600'>
        <div className='flex justify-between'>
          <span>Subtotal</span>
          <span className='font-medium'>{currency}{getTotalCartAmount()}</span>
        </div>
        
        <div className='flex justify-between'>
          <span>Shipping</span>
          <span className='font-medium'>
            {shipping === 0 ? 'Free' : `${currency}${shipping}`}
          </span>
        </div>

        {shipping > 0 && (
          <p className='text-sm text-pink-500'>
            Add {currency}{1000 - getTotalCartAmount()} more for free shipping
          </p>
        )}
        
        <div className='pt-3 border-t border-gray-200'>
          <div className='flex justify-between text-lg font-bold text-gray-900'>
            <span>Total</span>
            <span>{currency}{total}</span>
          </div>
          <p className='text-sm text-gray-500 mt-1'>Including VAT</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal



