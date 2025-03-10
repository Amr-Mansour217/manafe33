import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Videos from './components/video';
import Quran from './components/quran';
import Intre from "./components/intre";
import Pdf from "./components/pdf";
import Apps from './components/apps';
import Another from './components/another';

function App() {
  
  return (
    <Router> 
      <Routes>
        <Route path="/manafe33/" element={<Home />} />
        <Route path="/manafe33/videos" element={<Videos />} />
        <Route path="/manafee3/quran" element={<Quran />} />
        <Route path = "/manafe33/library" element = {<Intre />} />
        <Route path = "/manafe33/bigarabicquran" element = {<Pdf />} />
        <Route path = "/manafe33/apps" element = {<Apps />} />
        <Route path = "/manafe33/anotherweb" element = {<Another />} />
      </Routes>
    </Router>
  );
};   

export default App;
