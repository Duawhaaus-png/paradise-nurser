import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const parseCost = (cost) => parseFloat(cost.replace('$', ''));

  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality is not yet available.');
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

      <div className="cart-page">
        <h2 className="cart-total">
          Total Cart Amount: ${calculateTotalAmount()}
        </h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Unit Price: {item.cost}</p>
                <p>Subtotal: ${calculateTotalCost(item)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </div>
          ))
        )}

        <div className="cart-actions">
          <button
            className="continue-shopping-btn"
            onClick={() => onNavigate('products')}
          >
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
