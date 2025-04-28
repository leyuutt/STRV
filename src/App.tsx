import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { ShoppingBag, User, Truck, MessageSquare, Package, ChevronRight, ChevronLeft, X, Check } from "lucide-react"
import stickData from "./stickData"
import techData from "./techData"
import ethData from "./ethData"
import speData from "./speData"
import movData from "./movData"
import MobileMenu from "./MobileMenu"
import logo from './assets/logo.jpg'
import Delivery from './components/Delivery/Delivery'
import { SiFandango } from 'react-icons/si'
// Modal Component for Sticker Details
function StickerModal({ sticker, onClose }: any) {
  if (!sticker) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="bg-gray-900 rounded-lg max-w-md w-full p-6 relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white">
          <X size={24} />
        </button>

        <div className="flex flex-col items-center">
          <img
            src={sticker.picture || "/placeholder.svg"}
            alt={sticker.title || "Sticker image"}
            className="w-48 h-48 object-contain mb-6 animate-float"
          />
          <h2 className="text-2xl font-bold text-white mb-2">{sticker.title}</h2>
          <p className="text-xl text-gray-400 mb-4">{sticker.price}</p>

          {/* <div className="grid grid-cols-2 gap-4 w-full mt-4">
            <button className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Add to Cart
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-colors">
              Buy Now
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

// Sidebar Component
function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-screen bg-black border-r border-gray-800 fixed left-0 top-0 transition-all duration-300 ease-in-out z-50 hidden md:block`}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-12">
        <div className="logo">
                    < SiFandango  />
                </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">STRV</span>
              <span className="text-xs text-gray-400 -mt-1">stickers</span>
            </div>
          )}
        </div>
        <nav className="space-y-2">
          <Link
            to="/"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <ShoppingBag className="w-5 h-5" />
            {!collapsed && <span>Shop</span>}
          </Link>
          <Link
            to="/orders"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <Package className="w-5 h-5" />
            {!collapsed && <span>How to order</span>}
          </Link>
          <Link
            to="/profile"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <User className="w-5 h-5" />
            {!collapsed && <span>Profile</span>}
          </Link>
          <Link
            to="/delivery"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <Truck className="w-5 h-5" />
            {!collapsed && <span>Delivery</span>}
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <MessageSquare className="w-5 h-5" />
            {!collapsed && <span>Contact</span>}
          </Link>
        </nav>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-full p-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}

// Sticker Card Component with Animation
function StickerCard({ sticker, onClick }:any) {
  return (
    <div
      className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
      onClick={() => onClick(sticker)}
    >
      <img
        src={sticker.picture || "/placeholder.svg"}
        alt={sticker.title || "Sticker image"}
        className="w-full h-auto mb-3 transition-transform duration-300 hover:rotate-3"
      />
      <h3 className="text-white font-medium">{sticker.title}</h3>
      <p className="text-gray-400">{sticker.price}</p>
    </div>
  )
}

// Home Page
function Home() {
  const [showMoreAnime, setShowMoreAnime] = useState(false)
  const [showMoreTech, setShowMoreTech] = useState(false)
  const [showMoreEthiopia, setShowMoreEthiopia] = useState(false)
  const [showMoreSpecial, setShowMoreSpecial] = useState(false)
  const [selectedSticker, setSelectedSticker] = useState(null)

  // Toggle functions to show/hide more items
  const toggleAnime = () => setShowMoreAnime(!showMoreAnime)
  const toggleTech = () => setShowMoreTech(!showMoreTech)
  const toggleEthiopia = () => setShowMoreEthiopia(!showMoreEthiopia)
  const toggleSpecial = () => setShowMoreSpecial(!showMoreSpecial)

  const handleStickerClick = (sticker:any) => {
    setSelectedSticker(sticker)
  }

  const closeModal = () => {
    setSelectedSticker(null)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {selectedSticker && <StickerModal sticker={selectedSticker} onClose={closeModal} />}

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">STICK</span>
            <br />
            <span className="text-gray-500">IT</span> <span className="text-white">RIGHT</span>
            <br />
            <span className="text-white">NOW!!</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
          Prepare to immerse yourself in a world of stickers! With thousands of vibrant designs just a scroll away, you're bound to find the perfect match     </p>
          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
            EXPLORE MORE
          </button>
        </div>

        {/* Anime and Manga Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Anime and Manga</h2>
            <button onClick={toggleAnime} className="text-gray-400 hover:text-white transition-colors">
              {showMoreAnime ? "Show Less" : "View All"}
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stickData.slice(0, showMoreAnime ? stickData.length : 3).map((stick) => (
              <StickerCard key={stick.id} sticker={stick} onClick={handleStickerClick} />
            ))}
          </div>
        </div>

        {/* Tech and Games Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Tech and Games</h2>
            <button onClick={toggleTech} className="text-gray-400 hover:text-white transition-colors">
              {showMoreTech ? "Show Less" : "View All"}
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techData.slice(0, showMoreTech ? techData.length : 3).map((tech) => (
              <StickerCard key={tech.id} sticker={tech} onClick={handleStickerClick} />
            ))}
          </div>
        </div>

        {/* Mind in ETHIOPIA Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Mind in ETHIOPIA</h2>
            <button onClick={toggleEthiopia} className="text-gray-400 hover:text-white transition-colors">
              {showMoreEthiopia ? "Show Less" : "View All"}
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {ethData.slice(0, showMoreEthiopia ? ethData.length : 3).map((eth) => (
              <StickerCard key={eth.id} sticker={eth} onClick={handleStickerClick} />
            ))}
          </div>
        </div>

        {/* SPECIAL Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">MUSIC <br/> AND MOVIES</h2>
            <button onClick={toggleSpecial} className="text-gray-400 hover:text-white transition-colors">
              {showMoreSpecial ? "Show Less" : "View All"}
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {movData.slice(0, showMoreSpecial ? movData.length : 3).map((movie) => (
              <StickerCard key={movie.id} sticker={movie} onClick={handleStickerClick} />
            ))}
          </div>
        </div>
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">SPECIAL</h2>
            <button onClick={toggleSpecial} className="text-gray-400 hover:text-white transition-colors">
              {showMoreSpecial ? "Show Less" : "View All"}
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {speData.slice(0, showMoreSpecial ? speData.length : 3).map((spe) => (
              <StickerCard key={spe.id} sticker={spe} onClick={handleStickerClick} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* TINY */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white text-center mb-3">TINY</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-white">49.99</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">3-4 CM Wide</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">For Phones</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">It's Literally Tiny</span>
              </div>
            </div>
          </div>

          {/* SMALL */}
          <div className="bg-gray-900 rounded-xl p-6 relative">
            <div className="absolute -top-2 -right-2 bg-green-500 text-white py-1 px-3 rounded-full transform rotate-12 font-bold text-xs">
              POPULAR
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-3">SMALL</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-white">74.99</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">6-8 CM Wide</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">For Notebooks</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">Honestly, Best Value</span>
              </div>
            </div>
          </div>

          {/* MEDIUM */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white text-center mb-3">MEDIUM</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-white">99.99</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">9-10 CM Wide</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">For Laptops</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">When Size Matters 😉</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Orders Page
function Orders() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">HOW TO</span>
            <br />
            <span className="text-white">ORDER</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Simple steps to get your custom stickers delivered to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">CHOOSE FROM OUR STICKERS</h2>
            <ol className="space-y-6 mb-8">
              <li className="flex">
                <span className="text-2xl font-bold text-gray-500 mr-4">01</span>
                <div>
                  <p className="text-white">Visit our shop</p>
                  <p className="text-gray-400 text-sm">Browse through our collection</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-2xl font-bold text-gray-500 mr-4">02</span>
                <div>
                  <p className="text-white">Screenshot the ones you like</p>
                  <p className="text-gray-400 text-sm">Save your favorites</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-2xl font-bold text-gray-500 mr-4">03</span>
                <div>
                  <p className="text-white">Contact us via <button>
                  <a href="/" style={{ fontSize: '20px', color: 'violet' }}>Telegram</a>
                  </button></p>
                  <p className="text-gray-400 text-sm">Share your selections with us</p>
                </div>
              </li>
            </ol>
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              <a href="/"> BROWSE STICKERS</a>
             
            </button>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">CUSTOM STICKERS</h2>
            <ol className="space-y-6 mb-8">
              <li className="flex">
                <span className="text-2xl font-bold text-gray-500 mr-4">01</span>
                <div>
                  <p className="text-white">Contact our Order Account</p>
                  <p className="text-gray-400 text-sm">Reach out on  <button>
                  <a href="/" style={{ fontSize: '20px', color:'violet'}}>Telegram</a>
                  </button> </p>
                </div>
              </li>
              <li className="flex">
                <span className="text-2xl font-bold text-gray-500 mr-4">02</span>
                <div>
                  <p className="text-white">Upload your photos</p>
                  <p className="text-gray-400 text-sm">We'll design the outline for you</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-2xl font-bold text-gray-500 mr-4">03</span>
                <div>
                  <p className="text-white">Select size and quantity</p>
                  <p className="text-gray-400 text-sm">Choose what works for you</p>
                </div>
              </li>
            </ol>
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              <a href="/">ORDER CUSTOM STICKERS</a>
              
            </button>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
          <h4 className="font-bold text-[#0a2559] mb-2">Custom Sticker Pricing</h4>
          <p className="text-gray-700 text-sm">
            Base prices are the same as our regular stickers: Tiny (74.99 br), Small (99.99 br), or Medium (149.99 br).
            Add 5 birr per photo for custom designs.
          </p>
        </div>

        <p className="text-center text-gray-400 mb-6">
          We look forward to providing you with top-notch customized stickers that will make you stand out from the
          crowd!
        </p>

        <h2 className="text-2xl font-bold text-center text-white mb-8">Our Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* TINY */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white text-center mb-3">TINY</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-white">49.99</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">3-4 CM Wide</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">For Phones</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">It's Literally Tiny</span>
              </div>
            </div>
          </div>

          {/* SMALL */}
          <div className="bg-gray-900 rounded-xl p-6 relative">
            <div className="absolute -top-2 -right-2 bg-green-500 text-white py-1 px-3 rounded-full transform rotate-12 font-bold text-xs">
              POPULAR
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-3">SMALL</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-white">74.99</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">6-8 CM Wide</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">For Notebooks</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">Honestly, Best Value</span>
              </div>
            </div>
          </div>

          {/* MEDIUM */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white text-center mb-3">MEDIUM</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-white">99.99</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">9-10 CM Wide</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">For Laptops</span>
              </div>
              <div className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0 h-4 w-4" />
                <span className="text-gray-400 text-sm">When Size Matters 😉</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-900 border-l-4 border-green-500 p-4 rounded mb-6 max-w-3xl mx-auto">
          <h4 className="font-bold text-green-400 mb-1">Free Delivery!</h4>
          <p className="text-green-300 text-sm">
            Orders of 50+ stickers qualify for free delivery within Addis Ababa. Standard delivery fee for smaller
            orders is 210 birr.
          </p>
        </div>
      </div>
    </div>
  )
}

// Profile Page
function Profile() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">ABOUT</span>
            <br />
            <span className="text-white">US</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Learn more about our company and what makes us the best in the business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">
              Why We're
              <br />
              The Best
            </h2>
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              SHOP STICKERS
            </button>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-px bg-gray-700 mb-4"></div>
              <div className="text-6xl font-bold text-gray-700 mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-400">
                We are committed to delivering stickers of the highest quality. Our team meticulously inspects every
                sticker before it leaves our facility.
              </p>
            </div>

            <div>
              <div className="w-16 h-px bg-gray-700 mb-4"></div>
              <div className="text-6xl font-bold text-gray-700 mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Affordable Pricing</h3>
              <p className="text-gray-400">
                We believe that everyone should have access to affordable customized stickers. Our pricing is
                competitive, without compromising on quality.
              </p>
            </div>

            <div>
              <div className="w-16 h-px bg-gray-700 mb-4"></div>
              <div className="text-6xl font-bold text-gray-700 mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Excellent Service</h3>
              <p className="text-gray-400">
                Our dedicated customer support team is always ready to assist you with any queries or concerns you may
                have.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Profile Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-400 mb-4">Founder & CEO</p>
              <p className="text-gray-500 text-sm">
                With over 10 years of experience in design and branding, John leads our creative vision.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-400 mb-4">Lead Designer</p>
              <p className="text-gray-500 text-sm">
                Jane brings her artistic talent to create stunning sticker designs that our customers love.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
              <p className="text-gray-400 mb-4">Customer Relations</p>
              <p className="text-gray-500 text-sm">
                Mike ensures that every customer has an exceptional experience with our products and services.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-gray-400 mb-4">
            Founded in 2018, our sticker company began with a simple mission: to provide high-quality, affordable
            stickers that allow people to express themselves. What started as a small operation in a garage has grown
            into a thriving business serving customers throughout Ethiopia.
          </p>
          <p className="text-gray-400">
            We take pride in our commitment to quality, creativity, and customer satisfaction. Every sticker we produce
            is made with care and attention to detail, ensuring that our customers receive only the best products.
          </p>
        </div>
      </div>
    </div>
  )
}

// Delivery Page
// function Delivery() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="max-w-6xl mx-auto px-6 py-24">
//         <div className="mb-16">
//           <h1 className="text-6xl font-bold tracking-tight mb-6">
//             <span className="text-white">DELIVERY</span>
//             <br />
//             <span className="text-white">OPTIONS</span>
//           </h1>
//           <p className="text-gray-400 max-w-2xl text-lg">Choose the delivery method that works best for you.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               <span className="block">PICK-UP?</span>
//               <span className="block">DELIVERY?</span>
//               <span className="block">WHY NOT BOTH!</span>
//             </h2>
//             <p className="text-gray-400 mb-8">
//               Once your stickers are ready, you've got two awesome choices. Swing by our Bole shop to grab them in
//               person, or level up the convenience with delivery anywhere in Addis for just 210 Birr extra. It's your
//               call – pick up or delivered, we've got you covered! But here's the exciting part: order plenty of
//               stickers, and we'll deliver them to you for free!
//             </p>
//           </div>

//           <div className="bg-gray-900 p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-6">FREE DELIVERY</h2>
//             <p className="text-gray-400 mb-6">
//               Orders of 50+ stickers qualify for free delivery within Addis Ababa. Take advantage of this offer and get
//               your stickers delivered to your doorstep without any additional cost.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// Contact Page
function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">GET IN</span>
            <br />
            <span className="text-white">TOUCH</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">Have questions or need assistance? We're here to help!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">CONTACT INFO</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-400">AAIT 5 KILO, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Message Us</h3>
                  <p className="text-gray-400">info@</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-gray-400">XXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">SEND A MESSAGE</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border-0 rounded-lg p-3 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full bg-gray-800 border-0 rounded-lg p-3 text-white"
                  placeholder="Your email or phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-800 border-0 rounded-lg p-3 text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Sidebar />
        <MobileMenu />
        <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-0 md:ml-64"} flex-1`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
