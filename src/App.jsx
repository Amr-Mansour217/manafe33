import './App.css';
// import React, { useState, useEffect, useRef, useCallback  } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import { CSSTransition } from 'react-transition-group';
// import { useSwipeable } from 'react-swipeable';
// import { FaRegUser, FaPhone, FaStar, FaTimes } from "react-icons/fa";
// import { TbUserPlus, TbUser } from "react-icons/tb";
// import Home from './components/home';
import Home from './components/home';
// import Login from './Pages/login';
// import './register.jsx'
function App() {
  // <Home />
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
      </Routes>
    </Router>
  )
}
export default App;