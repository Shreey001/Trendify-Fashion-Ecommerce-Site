# Trendify - MERN Stack eCommerce Website

🚀 **Trendify** is a full-stack eCommerce web application built with the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**. It allows users to explore products, add them to their cart, and purchase them using **Stripe & Razorpay** payment gateways. Admins can manage products and track orders via the dashboard.

## 📌 Features
### 🛍️ User Features
- 🔐 **Authentication**: Register/Login with JWT-based authentication
- 🏬 **Product Management**: View, filter, and sort products
- 🛒 **Cart & Checkout**: Add/remove products from cart & proceed to checkout
- 💳 **Payment Gateway**: Secure online payments via **Stripe & Razorpay**
- 📦 **Order Tracking**: View order status and history

### 🔧 Admin Features
- 📋 **Product Management**: Add, update, and delete products
- 📦 **Order Management**: View and update order statuses
- 📊 **Dashboard**: Overview of sales and user activity

---

## 🎯 Tech Stack
**Frontend**:
- React.js (Vite)
- Redux Toolkit
- Tailwind CSS

**Backend**:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

**Deployment**:
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

---

## 🚀 Installation & Setup
### 🛠 Backend Setup
```sh
# Clone the repository
git clone https://github.com/yourusername/Trendify.git
cd Trendify

# Install backend dependencies
cd backend
npm install

# Create .env file & add the following:
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY=your_razorpay_key

# Start backend server
npm run dev
```

### 🎨 Frontend Setup
```sh
# Navigate to frontend folder
cd ../frontend

# Install dependencies
npm install

# Start frontend server
npm run dev
```

---

## 🌍 Deployment
### 🖥️ Frontend Deployment (Vercel)
```sh
npm run build
vercel
```
### 🔧 Backend Deployment (Render)
1. Push backend code to GitHub.
2. Connect Render & deploy Node.js backend.

---

## 📸 Screenshots
Coming soon! 🖼️

---

## 💡 Challenges Faced
- **CORS Issues**: Solved by enabling CORS in Express.
- **JWT Token Not Sending**: Fixed with Axios headers.
- **Payment Gateway Integration**: Stripe setup was tricky but got it working.

---

## 🛠️ Future Enhancements
- ✅ Wishlist feature
- ✅ User profile management
- ✅ Admin analytics dashboard

---

## 👨‍💻 Contributing
Feel free to fork, raise issues, or submit pull requests. Contributions are welcome! 🎉

---

## 📜 License
MIT License © 2025 Trendify

---

## 🌟 Show Some Love!
If you like this project, don’t forget to ⭐ the repo!

Happy Coding! 🚀
