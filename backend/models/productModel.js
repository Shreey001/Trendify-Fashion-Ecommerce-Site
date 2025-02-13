import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: { type: String, required: true },
    Description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    Category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    date: { type: Number, required: true },
    bestseller: { type: Boolean, required: true }

})

// create a model using the product schema     
const productModel = mongoose.models.product || mongoose.model('product', productSchema); 

export default productModel  // export the model for use in other parts of the application