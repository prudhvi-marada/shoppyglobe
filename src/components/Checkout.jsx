import React from 'react';
import { useSelector } from 'react-redux';
import './Checkout.css';
/* it contails the info billing address of user */
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>🧾 Billing Info</h2>
        <form className="billing-form">
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Pincode" required />
          <input type="text" placeholder="Phone Number" required />
          <button type="submit">Place Order</button>
        </form>
      </div>

      <div className="checkout-right">
        <h2>🛒 Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="checkout-items">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <span>{item.title}</span>
                <span>Qty: {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
        <hr />
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
};

export default Checkout;
