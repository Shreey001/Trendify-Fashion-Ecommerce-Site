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

//api endpoint
app.use('/api/users', userRouter)

// Middleware
app.use(cors());
app.use(express.json());

// Api endpoints
app.get('/', (req, res) => {
res.send("API Working")
 
});

app.listen(port, ()=>console.log('Server started on PORT: ' + port));