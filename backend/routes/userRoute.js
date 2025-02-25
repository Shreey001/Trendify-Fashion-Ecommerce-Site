import express from 'express';
import upload from '../middleware/multer.js';

import { 
    loginUser, 
    registerUser, 
    adminLogin, 
    getAllUsers,
    updateProfile,
    uploadProfileImage,
    getUserProfile 
} from '../controllers/userController.js';
import auth from '../middleware/auth.js';



const userRouter = express.Router();

// Auth routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/admin/users", getAllUsers);

// Profile routes
userRouter.get("/profile", auth, getUserProfile);
userRouter.put("/update-profile", auth, updateProfile);
userRouter.post("/upload-profile-image", auth, upload.single('profileImage'), uploadProfileImage);

export default userRouter;  // export the router for use in other parts of the application
