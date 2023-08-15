import React, { useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import ProductDetails from './components/products/ProductDetails';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);

  return (
    <div >
      <Router>
         <Header />
            <Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='/productDetails' element={<ProductDetails />}></Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
