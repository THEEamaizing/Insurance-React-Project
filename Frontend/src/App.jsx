
import { useState } from 'react'
import Homepage from '../src/Pages/Homepage';
import Aboupage from './Pages/Aboupage';
import { Routes,Route } from 'react-router-dom';
import Purchasepage from './Pages/Purchasepage';
import Contractpage from './Pages/Contractpage';
import Visionpage from './Pages/Visionpage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      
        <Route path='/About' element={<Aboupage/>}/> 

        <Route path='/Products' element={<Purchasepage/>}/>

        <Route path='/Contract' element={<Contractpage/>}/>

        <Route path='/Vision' element={<Visionpage/>}/>
        
      </Routes>
     
    
    </>
  );
}

export default App
