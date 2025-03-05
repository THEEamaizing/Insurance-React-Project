import React from 'react'
import { Link } from 'react-router-dom';
function About() {
  return (

  <div className='text-green-600 text-3xl '>
    <h1 className='text-4xl,'>JUBILEE INSURANCE </h1>
    <ul>
      {/* <li><Link to="/about">About</Link></li> */}

        <p className='text-3xl text-green-600'> At Jubilee Company, we provide comprehensive insurance services to safeguard your future. 
          Whether you need health, life, auto, home, or business insurance, we have got you covered. 
          Our tailored policies ensure financial security, peace of mind, and reliable protection for you, your family, and your assets.
        </p>  
    </ul>
  </div>
);
}

export default About 