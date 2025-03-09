import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Videos from './components/video';
import Quran from './components/quran';
import Intre from "./components/intre";
import Pdf from "./components/pdf"

function App() {
  
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/quran" element={<Quran />} />
        <Route path = "/library" element = {<Intre />} />
        <Route path = "/bigarabicquran" element = {<Pdf />} />
      </Routes>
    </Router>
  );
};   

export default App;