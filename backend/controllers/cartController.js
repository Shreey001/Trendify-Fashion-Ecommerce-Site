import userModel from "../models/userModel.js";

// add to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: 'User not found' });
    }

    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    
    await userModel.findByIdAndUpdate(userId, { cartData });
    
    res.json({ success: true, message: 'Added to cart' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};






//update user cart
const updateCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: 'User not found' });
    }

    let cartData = userData.cartData || {};

    if (!cartData[itemId] || !cartData[itemId][size]) {
      return res.json({ success: false, message: 'Item not found in cart' });
    }

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: 'Cart updated' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};






//get user cart data
const getUserCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: 'User not found' });
    }

    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } 
  catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
