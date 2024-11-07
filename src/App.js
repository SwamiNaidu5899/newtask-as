import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveNavbar from './components/NavBar';
import './App.css';
import ShopByCategories from './components/ShopByCategories';
import LoginPage from './components/LogIn';
import RegisterPage from './components/Register';
import Bestsellers from './components/BestSeller';
import CustomerReviews from './components/Review';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <Router>
      <ResponsiveNavbar />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<>
            <ImageComponent/>
            <ShopByCategories/>
            <Bestsellers/>
            <CustomerReviews/>
          </>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
