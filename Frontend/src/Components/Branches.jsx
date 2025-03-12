import React from "react";
import Pic3 from "../assets/Images/Department1.jpeg";
import Pic4 from "../assets/Images/Department2.jpeg";
import Pic5 from "../assets/Images/Department3.jpeg";

function Branches() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="group perspective-1000">
        <div className="relative w-80 h-52 transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
          {/* Front face */}
          <div className="absolute inset-0 bg-white shadow-lg rounded-lg transform rotate-y-0 translate-z-20 backface-hidden">
            <img
              src={Pic3}
              alt="Department 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right face */}
          <div className="absolute inset-0 bg-white shadow-lg rounded-lg transform rotate-y-90 translate-z-20 backface-hidden">
            <img
              src={Pic4}
              alt="Department 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Left face */}
          <div className="absolute inset-0 bg-white shadow-lg rounded-lg transform rotate-y--90 translate-z-20 backface-hidden">
            <img
              src={Pic5}
              alt="Department 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branches;
