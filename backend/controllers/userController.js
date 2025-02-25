import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from "cloudinary";

import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password); // matches the password against the user password


        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, message: "Invalid credentials" });
        }


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }


}


// route for user register
const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check for existing user
        const exists = await userModel.findOne({ email });

        if (exists) {
            return res.json({ success: false, message: "User already exists" });

        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long " });
        }

        // Hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Creating new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();


        // Generate token
        const token = createToken(user._id);

        res.json({ success: true, token });




    } catch (error) {
        console.error(error);

        res.json({ success: false, message: error.message })
    }



}


// route for admin login
const adminLogin = async (req, res) => {

    try {
    
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) { 

            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, message: "Invalid credentials" });
        }

    
    } catch (error) {
        
    console.error(error);

        res.json({ success: false, message: error.message })

}

}

// Get all users for admin
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({}, { password: 0 }); // Exclude password field
        res.json({ success: true, users });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update user profile
const updateProfile = async (req, res) => {
    try {
        const { phoneNumber, name, currentPassword, newPassword } = req.body;
        const userId = req.user._id;

        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        // Update password if provided
        if (currentPassword && newPassword) {
            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if (!isMatch) {
                return res.json({ success: false, message: 'Current password is incorrect' });
            }
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(newPassword, salt);
        }

        // Update name if provided
        if (name) {
            user.name = name;
        }

        // Update phone number if provided
        if (phoneNumber) {
            user.phoneNumber = phoneNumber;
        }

        await user.save();

        // Return user without password
        const updatedUser = await userModel.findById(userId).select('-password');
        res.json({ success: true, user: updatedUser });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

// Upload profile image
const uploadProfileImage = async (req, res) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.json({ success: false, message: 'No file uploaded or invalid file format' });
        }

        const userId = req.user._id;

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(`data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`, {
            folder: 'profile_images',
            resource_type: 'image'
        });

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { profileImage: result.secure_url },
            { new: true }
        ).select('-password');

        res.json({ success: true, imageUrl: result.secure_url, user: updatedUser });
    } catch (error) {
        console.error('Profile image upload error:', error);
        res.json({ success: false, message: 'Failed to upload image. Please try again.' });
    }
};

// Get user profile
const getUserProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await userModel.findById(userId).select('-password');
        
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, user });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export { 
    loginUser, 
    registerUser, 
    adminLogin, 
    getAllUsers,
    updateProfile,
    uploadProfileImage,
    getUserProfile
}