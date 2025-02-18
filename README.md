# 🛍️ Trendify - Modern Fashion E-commerce Platform

<div align="center">
  <img src="frontend/src/assets/logo.png" alt="Trendify Logo" width="200" style="background-color: white "/>
  
  ![GitHub](https://img.shields.io/github/license/Shreey001/Trendify-Fashion-Ecommerce-Site)
  ![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
  ![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)
</div>

## 🌟 Overview

Trendify is a modern, full-stack e-commerce platform specializing in fashion retail. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers a seamless shopping experience with features like real-time inventory management, secure payments, and an intuitive admin dashboard.

### ✨ Key Features

- 🛒 **Smart Shopping Cart**: Real-time cart management with instant updates
- 💳 **Multiple Payment Options**: Integrated with Stripe and Khalti
- 👤 **User Authentication**: Secure login and registration system
- 📱 **Responsive Design**: Seamless experience across all devices
- 🎨 **Modern UI/UX**: Built with Tailwind CSS for a clean, modern look
- 📊 **Admin Dashboard**: Comprehensive tools for inventory and user management

## 🚀 Tech Stack

### Frontend
- React.js with Vite
- Tailwind CSS for styling
- Axios for API requests
- React Router for navigation

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Cloudinary for image management

### Payment Integration
- Stripe
- Khalti

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shreey001/Trendify-Fashion-Ecommerce-Site.git
   cd Trendify-Fashion-Ecommerce-Site
   ```

2. **Set up environment variables**
   
   Create .env files in backend, frontend, and admin directories:

   Backend (.env):
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   STRIPE_SECRET_KEY=your_stripe_secret
   ```

3. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install

   # Install admin dashboard dependencies
   cd ../admin
   npm install
   ```

4. **Run the application**
   ```bash
   # Run backend (from backend directory)
   npm start

   # Run frontend (from frontend directory)
   npm run dev

   # Run admin dashboard (from admin directory)
   npm run dev
   ```

## 📱 Application Structure

```
trendify/
├── frontend/          # Customer-facing React application
├── admin/            # Admin dashboard
└── backend/          # Express.js API
    ├── controllers/  # Business logic
    ├── models/      # Database models
    ├── routes/      # API routes
    └── config/      # Configuration files
```

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Secure payment processing
- Protected API endpoints
- Input validation and sanitization

## 💡 Admin Features

- 📊 Dashboard with sales analytics
- 📦 Product management (CRUD operations)
- 👥 User management
- 🛍️ Order tracking and management
- 📈 Inventory management

## 🌐 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

### Products
- `GET /api/product` - Get all products
- `POST /api/product` - Add new product
- `PUT /api/product/:id` - Update product
- `DELETE /api/product/:id` - Delete product

### Orders
- `POST /api/order` - Place order
- `GET /api/order/user` - Get user orders
- `GET /api/order/all` - Get all orders (admin)
- `PUT /api/order/status` - Update order status

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Shree**
- GitHub: [@Shreey001](https://github.com/Shreey001)

---

<div align="center">
  <sub>Built with ❤️ by Shree</sub>
</div>
