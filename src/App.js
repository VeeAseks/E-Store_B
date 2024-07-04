import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './Components/NavMenu/NavMenu';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Login from './Pages/Login';
import Register from './Pages/Signup';

const App = () => (
  <Router>
    <NavMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<Register />} />
    </Routes>
  </Router>
);

export default App;

