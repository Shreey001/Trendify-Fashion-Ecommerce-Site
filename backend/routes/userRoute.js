import express from 'express';

import { loginUser, registerUser, adminLogin, getAllUsers } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/admin/users", getAllUsers);

export default userRouter;  // export the router for use in other parts of the application
