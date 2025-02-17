import express from "express";
import { placeOrder,placeOrderStripe,placeOrderKhalti,allOrders,userOrders,updateStatus,verifyStripe,deleteOrder } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";


const orderRouter = express.Router();

//admin routes features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)
orderRouter.post('/delete',adminAuth,deleteOrder)

//payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/khalti',authUser,placeOrderKhalti)

//user routes features
orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)


export default orderRouter;
