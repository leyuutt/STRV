import React from 'react';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Welcome</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Get Your amazing stickers</h2>
        <p className="text-gray-600 mb-4">Get ready to dive into the amazing selection of stickers. Press Explore more for more!!</p>
        {/* <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors">
          Explore More
        // </button> */}
       
      </div>
    </div>
  );
}

export default Home;