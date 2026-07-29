import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'products') {
    return <ProductList onNavigate={handleNavigate} />;
  }

  if (currentPage === 'cart') {
    return <CartItem onNavigate={handleNavigate} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <h2>Where Green Meets Serenity</h2>
        <p>
          Discover a curated collection of houseplants that bring life,
          color, and cleaner air into your home. From air-purifying favorites
          to low-maintenance greenery, Paradise Nursery has the perfect plant
          for every space.
        </p>
        <button className="get-started-btn" onClick={() => handleNavigate('products')}>
          Get Started
        </button>
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
