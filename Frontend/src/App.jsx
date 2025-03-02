import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Pages from './assets/Homepage/Pages/Pages';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pages/>
    
    </>
  );
}

export default App
