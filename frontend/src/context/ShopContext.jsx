import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState({})
  const [showSearch, setShowSearch] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const currency = '₹'
  const backendUrl = 'http://localhost:4000'

  // Load products
  const loadProducts = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/all')
      if (response.data.success) {
        setProducts(response.data.products)
      }
    } catch (error) {
      console.error('Error loading products:', error)
    }
  }

  // Load cart data
  const loadCartData = async () => {
    try {
      if (!token) return
      const response = await axios.post(
        backendUrl + '/api/cart/getcart',
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    }
  }

  useEffect(() => {
    loadProducts()
    loadCartData()
  }, [token])

  // Update cart quantity
  const updateQuantity = async (itemId, size, newQuantity) => {
    try {
      if (!token) {
        navigate('/login')
        return
      }

      const response = await axios.post(
        backendUrl + '/api/cart/updatecart',
        {
          itemId,
          size,
          quantity: newQuantity
        },
        { headers: { token } }
      )

      if (response.data.success) {
        setCartItems(response.data.cartData)
        toast.success('Cart updated successfully')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error updating cart:', error)
      toast.error('Failed to update cart')
    }
  }

  const contextValue = {
    products,
    cartItems,
    setCartItems,
    currency,
    showSearch,
    setShowSearch,
    token,
    setToken,
    navigate,
    backendUrl,
    updateQuantity,
    loadCartData
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

