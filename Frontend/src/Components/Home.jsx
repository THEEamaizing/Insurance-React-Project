import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-lime-500 animate-pulse p-6">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">Welcome to Jubilee</h1>
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80 text-center">
        <h2 className="text-lime-600 text-2xl font-semibold">Meet Our Branches</h2>
      </div>
    </div>
  )
}

export default Home