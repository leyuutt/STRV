import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Truck, MessageSquare, Package } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-lg fixed left-0 top-0">
      <div className="p-4">
        <div className="text-2xl font-semibold text-green-700 mb-8">Logo</div>
        <nav className="space-y-2">
          <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Shop</span>
          </Link>
          <Link to="/orders" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
            <Package className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">How to orders</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Profile</span>
          </Link>
          <Link to="/delivery" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
            <Truck className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Delivery</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
            <MessageSquare className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Contact</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;