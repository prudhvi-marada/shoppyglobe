import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';
import { Link } from 'react-router-dom';

/* Cart  component */
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="box">
      <h2 className="heading">📦 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <>
        <p className="empty">🧺 Cart is empty!</p>
        <img src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg" alt="" className="emty-cart-image" />
        </>
      ) : (
        <>
          <div className="grid">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="total">
            <h3>Total: 💲{totalAmount.toFixed(2)}</h3>
            <Link to="/checkout"> <button className="checkout-btn">Proceed to Checkout</button></Link>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
