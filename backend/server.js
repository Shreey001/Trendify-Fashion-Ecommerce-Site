import express from 'express';
import cors from 'cors';
import 'dotenv/config' 
import connectDB from './config/mongodb.js';
import connectCloudnary from './config/cloudnary.js';
import userRouter from './routes/userRoute.js';

// App config
const app = express();




const port = process.env.PORT || 4000;
connectDB()
connectCloudnary()

// Middleware
app.use(cors());  // Optional if dealing with frontend requests
app.use(express.json());  // ✅ Ensures JSON body parsing
app.use(express.urlencoded({ extended: true })); // ✅ Handles form data

//api endpoint
app.use('/api/user', userRouter)



// Api endpoints
app.get('/', (req, res) => {
res.send("API Working")
 
});

app.listen(port, ()=>console.log('Server started on PORT: ' + port));