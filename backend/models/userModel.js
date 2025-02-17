import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { 
    minimize: false,
    timestamps: true 
}) // minimize the creation of the schema object and add timestamps

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;  // export the model for use in other parts of the application