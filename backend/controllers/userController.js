import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

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

export { loginUser, registerUser, adminLogin, getAllUsers }