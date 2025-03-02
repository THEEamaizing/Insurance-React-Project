import React from 'react'
import { Link } from 'react-router-dom';
function About() {
  return (

  <div>
    <h1>About Page</h1>
    <ul>
      <li><Link to="/about">About</Link></li>

        <p> At [Your Company Name], we provide comprehensive insurance services to safeguard your future. 
          Whether you need health, life, auto, home, or business insurance, we’ve got you covered. 
          Our tailored policies ensure financial security, peace of mind, and reliable protection for you, your family, and your assets.
        </p>
        
    </ul>
  </div>
);
}

export default About