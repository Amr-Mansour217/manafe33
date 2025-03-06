import './App.css';
// import React, { useState, useEffect, useRef, useCallback  } from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
// import { CSSTransition } from 'react-transition-group';
// import { useSwipeable } from 'react-swipeable';
// import { FaRegUser, FaPhone, FaStar, FaTimes } from "react-icons/fa";
// import { TbUserPlus, TbUser } from "react-icons/tb";
// import Home from './components/home';
import Home from './components/Home';
// import Login from './Pages/login';
// import './register.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
      </Routes>
    </Router>
  )
}
export default App;