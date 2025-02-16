# Trendify - MERN Stack eCommerce Website

🚀 **Trendify** is a full-stack eCommerce web application built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**. It provides a seamless shopping experience with secure payments via **Stripe & Razorpay**. The platform includes an admin dashboard for managing products and orders.

## 📌 Features
### 🛍️ User Features
- 🔐 **Authentication**: Register/Login with JWT-based authentication.
- 🏬 **Product Management**: View, search, and filter products.
- 🛒 **Shopping Cart**: Add/remove items and proceed to checkout.
- 💳 **Payments**: Secure payments via **Stripe & Razorpay**.
- 📦 **Order Tracking**: Users can track their past and ongoing orders.

### 🔧 Admin Features
- 📋 **Dashboard**: Manage products, orders, and users.
- 🛍️ **Product CRUD**: Add, update, and delete products.
- 📦 **Order Management**: Update order statuses.

## 🏗️ Tech Stack
- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, JWT authentication
- **Database**: MongoDB (Mongoose ODM)
- **Payments**: Stripe, Razorpay
- **Others**: Bun, ESLint, dotenv

## 🚀 Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- Bun package manager

### Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR_USERNAME/Trendify.git
   cd Trendify
   ```
2. **Install dependencies:**
   ```sh
   bun install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```
4. **Start the development server:**
   ```sh
   bun run dev
   ```



## 🤝 Contributing
Pull requests are welcome! Open an issue for any feature requests or bug reports.

## 🌍 Deployment
- Deployment details can be added here (e.g., Vercel, Netlify, or DigitalOcean).

---
💡 Built with ❤️ by Shreejan
