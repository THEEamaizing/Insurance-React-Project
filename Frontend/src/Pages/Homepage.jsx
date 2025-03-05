import React from 'react'
import About from '../Components/About' 
import Vision from '../Components/Vision'
import Contract from '../Components/Contract'
import Products from '../Components/Products'
import Navigation from '../Components/Navigation '
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import Pictures from '../Components/Pictures'

function HomePage() {
  return (
    <>
     <Navigation/>
     <Home/>
     <Pictures/>
      {/* <About/> */}
      {/* <Vision/> */}
      {/* <Contract/> */}
     {/* < Products/> */}
      <Footer/>
      </>
  );
}

export default HomePage