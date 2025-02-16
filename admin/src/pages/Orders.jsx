import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  const deleteOrderHandler = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) {
      return;
    }
    try {
      const response = await axios.post(
        backendUrl + '/api/order/delete',
        { orderId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Order deleted successfully");
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Order Placed": return "bg-blue-100 text-blue-800";
      case "Packing": return "bg-yellow-100 text-yellow-800";
      case "Shipped": return "bg-purple-100 text-purple-800";
      case "Out for delivery": return "bg-orange-100 text-orange-800";
      case "Delivered": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Orders Management</h3>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Order Header */}
            <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img className="w-10 h-10" src={assets.parcel_icon} alt="Parcel" />
                <div>
                  <p className="text-sm text-gray-500">Order ID: {order._id}</p>
                  <p className="text-sm text-gray-500">{new Date(order.date).toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">{currency}{order.amount}</p>
                <p className="text-sm text-gray-500">Items: {order.items.length}</p>
              </div>
            </div>

            {/* Order Content */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Items Section */}
              <div>
                <h4 className="font-medium mb-2 text-gray-700">Order Items</h4>
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      {item.name} × {item.quantity} <span className="text-gray-500">({item.size})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Details */}
              <div>
                <h4 className="font-medium mb-2 text-gray-700">Customer Details</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="font-medium">{order.address.firstName} {order.address.lastName}</p>
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city}, {order.address.state}
                    <br />
                    {order.address.country}, {order.address.zipCode}
                  </p>
                  <p className="mt-2">{order.address.phone}</p>
                </div>
              </div>

              {/* Payment & Status */}
              <div>
                <h4 className="font-medium mb-2 text-gray-700">Order Status</h4>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p>Payment Method: {order.paymentMethod}</p>
                    <p>Payment Status: 
                      <span className={order.payment ? "text-green-600 ml-1" : "text-orange-600 ml-1"}>
                        {order.payment ? "Paid" : "Pending"}
                      </span>
                    </p>
                  </div>
                  
                  <select
                    onChange={(event) => statusHandler(event, order._id)}
                    value={order.status}
                    className={`w-full p-2 rounded text-sm font-medium ${getStatusColor(order.status)} border-0 focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>

                  <button 
                    onClick={() => deleteOrderHandler(order._id)}
                    className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm font-medium focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
