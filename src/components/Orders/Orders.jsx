import React from 'react';
import { PackageOpen } from 'lucide-react';

function Orders() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-6">How to Order</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-8">
          <PackageOpen className="h-16 w-16 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Custom Stickers</h2>
        </div>
        
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ordering Process</h3>
            <ol className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold mr-2">1.</span>
                Contact our Order Account on Telegram
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">2.</span>
                Upload your photos that you want turned into stickers. We'll design the outline for you. Note that for each photo you send, you'll be adding 5 birr extra.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">3.</span>
                Select the size you want, and the amount of each photo you have sent.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">4.</span>
                We'll ask you for your personal details, and your delivery method.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">5.</span>
                Once confirmed, we'll send you payment details to complete your order.
              </li>
            </ol>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              We look forward to providing you with top-notch customized stickers that will make you stand out from the crowd!
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
              Order Custom Stickers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;