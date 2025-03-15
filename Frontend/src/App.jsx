
import { useState } from 'react'
import Homepage from '../src/Pages/Homepage';
import Aboupage from './Pages/Aboupage';
import { Routes,Route } from 'react-router-dom';
import Purchasepage from './Pages/Purchasepage';
import Contractpage from './Pages/Contractpage';
import Visionpage from './Pages/Visionpage';
import Branches from './Components/Branches';
import Login from './Components/Login';
import Signup from './Components/Signup';

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
        
        <Route path='/Branches' element={<Branches/>}/>

        <Route path='/Login' element={<Login/>}/>

        <Route path='/Signup' element={<Signup/>}/>

        
      </Routes>
      
     
    
    </>
  );
}

export default App
