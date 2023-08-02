import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="bg-red-300">
      <Router>
         <NavBar />
      </Router>
    </div>
  );
}

export default App;
