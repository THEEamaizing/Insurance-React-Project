import React from 'react'
import { Link } from 'react-router-dom';


function About() {
  return (

    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Lamp Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-400 rounded-full opacity-30 blur-xl animate-flicker"></div>

       <h1 className="text-5xl font-bold text-lime-400 drop-shadow-lg">JUBILEE INSURANCE</h1>

      <p className="mt-6 max-w-2xl text-center text-lg text-green-300 leading-relaxed">
       At Jubilee Company, we provide comprehensive insurance services to safeguard your future. 
       Whether you need health, life, auto, home, or business insurance, we have got you covered. 
       Our tailored policies ensure financial security, peace of mind, and reliable protection for you, your family, and your assets.
      </p>
    </div>

);
}

export default About 