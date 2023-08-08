import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';

function App() {
  return (
    <div >
      <Router>
         <Header />
      </Router>
    </div>
  );
}

export default App;
