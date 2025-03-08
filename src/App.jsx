import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Videos from './components/video';
import Quran from './components/quran';


function App() {
  
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/quran" element={<Quran />} />
      </Routes>
    </Router>
  );
};   

export default App;