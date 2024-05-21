import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Powerlifting from './pages/Powerlifting'
import Crossfit from './pages/Crossfit'
import Gymnastics from './pages/Gymnastics';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/powerlifting" element={<Powerlifting />} />
          <Route path="/crossfit" element={<Crossfit />} />
          <Route path="/gymnastics" element={<Gymnastics />} />
   
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
