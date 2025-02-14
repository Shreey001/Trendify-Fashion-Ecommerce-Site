import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const currency = "Rs "
  const delivery_fee = 100

  // Fetch products with error handling
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/api/product/list')
        setProducts(data.products || [])
        setLoading(false)
      } catch (err) {
        console.error('Error fetching products:', err)
        setProducts([])
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Initialize cart items from localStorage
  const getDefaultCart = () => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : {}
  }

  const [cartItems, setCartItems] = useState(getDefaultCart())

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (itemId, size) => {
    setCartItems(prev => {
      const newCart = { ...prev }
      if (!newCart[itemId]) {
        newCart[itemId] = {}
      }
      newCart[itemId][size] = (newCart[itemId][size] || 0) + 1
      return newCart
    })
    toast.success('Added to cart')
  }

  const removeFromCart = (itemId, size) => {
    setCartItems(prev => {
      const newCart = { ...prev }
      if (newCart[itemId]?.[size]) {
        if (newCart[itemId][size] === 1) {
          delete newCart[itemId][size]
          if (Object.keys(newCart[itemId]).length === 0) {
            delete newCart[itemId]
          }
        } else {
          newCart[itemId][size] -= 1
        }
      }
      return newCart
    })
  }

  const getTotalCartAmount = () => {
    let total = 0
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const item = products.find(p => p._id === itemId)
        if (item) {
          total += item.price * cartItems[itemId][size]
        }
      }
    }
    return total
  }

  const getCartCount = () => {
    let count = 0
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        count += cartItems[itemId][size]
      }
    }
    return count
  }

  const clearCart = () => {
    setCartItems({})
    localStorage.removeItem('cart')
  }

  const contextValue = {
    products,
    cartItems,
    showSearch,
    setShowSearch,
    currency,
    delivery_fee,
    navigate,
    loading,
    error,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getCartCount,
    clearCart
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider


















// import {createContext, useEffect, useState} from "react";
// // import { products } from "../assets/assets";
// import {toast} from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // eslint-disable-next-line react-refresh/only-export-components
// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
    
//     const currency = 'Rs.';
//     const delivery_fee = 110;
//  const backendUrl = import.meta.env.VITE_BACKEND_URL
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const navigate = useNavigate();

//     const addToCart = async (itemId,size) => {

// if (!size) {
//     toast.error("Select Product Size");
//     return;
// }


//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         }
//         else{
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItems(cartData);


//     }


//     const getCartCount = () => {

//         let totalCount = 0;
//         for(const items in cartItems) {
//             for(const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item];
//                     }
//                 }  catch(error){

//                     }

//             }
//         }
//         return totalCount;

//     }
// const updateQuantity = async (itemId,size,quantity) => {
//         let cartData = structuredClone(cartItems);
//         cartData[itemId][size] = quantity;

//         setCartItems(cartData);
// }
// const getCartAmount = () => {
//     let totalAmount = 0;

//     for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//             try {
//                 if (cartItems[items][item] > 0) {
//                     const product = products.find(prod => prod._id === items);
//                     if (product) {
//                         totalAmount += product.price * cartItems[items][item];
//                     }
//                 }
//             } catch (error) {
//                 console.error("Error calculating total amount:", error);
//             }
//         }
//     }
//     return totalAmount;
// };
    
//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + 'api/product/list')
//             console.log(response.data)
            
//         } catch (error) {
            
//         }

//     }
//     useEffect(() => {
//         getProductsData();
//     }, [])
    

//     const value = {
// products,currency,delivery_fee,search,showSearch,setSearch,setShowSearch,cartItems,setCartItems,addToCart,getCartCount
// ,updateQuantity,getCartAmount,navigate,backendUrl

//     }
//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//     </ShopContext.Provider>
// )
// }
// export default ShopContextProvider;

