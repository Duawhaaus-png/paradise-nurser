import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=400&q=80', cost: '$18.00' },
      { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572686913672-4b5f9f9cb0d3?auto=format&fit=crop&w=400&q=80', cost: '$15.00' },
      { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1620127252536-03bcb0eb4cee?auto=format&fit=crop&w=400&q=80', cost: '$22.00' },
      { name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80', cost: '$20.00' },
      { name: 'Areca Palm', image: 'https://images.unsplash.com/photo-1611211232932-da3113c5b9e5?auto=format&fit=crop&w=400&q=80', cost: '$28.00' },
      { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1598880940371-c756d1a0e0e0?auto=format&fit=crop&w=400&q=80', cost: '$17.00' },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=400&q=80', cost: '$14.00' },
      { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1597055181300-eec00e18ea62?auto=format&fit=crop&w=400&q=80', cost: '$19.00' },
      { name: 'Rosemary', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=400&q=80', cost: '$12.00' },
      { name: 'Mint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=80', cost: '$10.00' },
      { name: 'Eucalyptus', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&q=80', cost: '$16.00' },
      { name: 'Basil', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=400&q=80', cost: '$9.00' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1632321197267-e0d43c9b9d9f?auto=format&fit=crop&w=400&q=80', cost: '$24.00' },
      { name: 'Succulent Mix', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80', cost: '$13.00' },
      { name: 'Pothos', image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b5a?auto=format&fit=crop&w=400&q=80', cost: '$15.00' },
      { name: 'Cast Iron Plant', image: 'https://images.unsplash.com/photo-1602923668104-8f9e03fbf824?auto=format&fit=crop&w=400&q=80', cost: '$21.00' },
      { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=400&q=80', cost: '$11.00' },
      { name: 'Jade Plant', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80', cost: '$17.00' },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <nav className="navbar">
        <h3>Paradise Nursery</h3>
        <ul className="nav-links">
          <li onClick={() => onNavigate('landing')}>Home</li>
          <li onClick={() => onNavigate('products')}>Plants</li>
          <li onClick={() => onNavigate('cart')}>Cart</li>
        </ul>
        <div className="cart-icon" onClick={() => onNavigate('cart')}>
          🛒 Cart
          <span className="cart-count">{totalItems}</span>
        </div>
      </nav>

      <div className="product-list-page">
        {plantCategories.map((cat) => (
          <div key={cat.category}>
            <h2 className="category-title">{cat.category}</h2>
            <div className="plant-grid">
              {cat.plants.map((plant) => (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>{plant.cost}</p>
                  <button
                    disabled={!!addedItems[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
