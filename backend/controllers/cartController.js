import userModel from "../models/userModel.js";

// add to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};
    console.log('Initial cartData:', cartData);

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

    console.log('Updated cartData:', cartData);
    
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { cartData: cartData },
      { new: true }
    );
    
    console.log('Updated user:', updatedUser);

    res.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log('Error in addToCart:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    let cartData = await userModel.findById(userId);

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData: cartData });

    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//get user cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;

    res.json({ success: true, cartData: cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
