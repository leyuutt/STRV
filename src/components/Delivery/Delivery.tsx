import React from 'react';

function Delivery() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">DELIVERY</span>
            <br />
            <span className="text-white">OPTIONS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">Choose the delivery method that works best for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="block">PICK-UP?</span>
              <span className="block">DELIVERY?</span>
              <span className="block">WHY NOT BOTH!</span>
            </h2>
            <p className="text-gray-400 mb-8">
            Convenient Pickup Location: Located directly on the Addis Ababa Institute of Technology 
(AAiT) Campus, Addis Ababa University. 
Flexible Pickup Times: Collect your sticker orders at your convenience, anytime that suits 
you. 
Wide Selection: Explore our diverse categories to find the perfect stickers to match your 
unique taste and mood – we have something for everyone! 
We look forward to you picking up your fantastic new stickers from our easily accessible 
campus location. 
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Delivery Options</h2>
            <p className="text-gray-400 mb-6">
            For your convenience, we offer reliable delivery services through a trusted third-party 
partner. 
Seamless Delivery: Have your chosen stickers delivered directly to your preferred location 
              within Addis Ababa. 
              <br/>
Efficient Service: Our delivery partner ensures your order is handled with care and 
              delivered promptly. 
              <br/>
Delivery Area: Currently serving locations within Addis Ababa. Please note that delivery 
              times and fees may vary depending on your specific location. 
              <br/>
Enjoy the ease of having your favorite stickers delivered right to your doorstep! Delivery 
options and applicable fees will be presented during the checkout process.   </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery;