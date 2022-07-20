import './App.css';
import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NoPage from './component/NoPage'
import Payment from './component/Payment';
import Nav from './component/Nav';
import Home from './component/Home'
import About from './component/About';

import "./component/Media.css"

function App() {

  // React.useEffect(() => {
  //   window.addEventListener('resize', ()=>{
  //     console.log(document.body.style.hei = window.innerWidth);
  //     document.body.style.fontSize = `${window.innerWidth/10}px`;
  //     document.querySelector('#root').style.fontSize = `${window.innerWidth/10}px`;
  //   })
  // })

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
