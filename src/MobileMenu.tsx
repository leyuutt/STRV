"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ShoppingBag, User, Truck, MessageSquare, Package } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="fixed top-4 right-4 z-50 p-2 bg-gray-900 rounded-full text-white">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col p-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <img src="/placeholder.svg" alt="STRV Logo" width={32} height={32} className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">STRV</span>
              <span className="text-xs text-gray-400 -mt-1">design studio</span>
            </div>
          </div>

          <nav className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 p-3 text-white text-xl" onClick={toggleMenu}>
              <ShoppingBag className="w-6 h-6" />
              <span>Shop</span>
            </Link>
            <Link to="/orders" className="flex items-center space-x-3 p-3 text-white text-xl" onClick={toggleMenu}>
              <Package className="w-6 h-6" />
              <span>How to order</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-3 p-3 text-white text-xl" onClick={toggleMenu}>
              <User className="w-6 h-6" />
              <span>Profile</span>
            </Link>
            <Link to="/delivery" className="flex items-center space-x-3 p-3 text-white text-xl" onClick={toggleMenu}>
              <Truck className="w-6 h-6" />
              <span>Delivery</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-3 p-3 text-white text-xl" onClick={toggleMenu}>
              <MessageSquare className="w-6 h-6" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
