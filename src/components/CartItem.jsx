import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './CartItem.css';
/* indicates each item present in the cart */
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const viewProduct=()=>{
    navigate(`/product/${item.id}`);
  }
  
  return (
    <div className="card">
      <img src={item.thumbnail} alt={item.title} className="thumb" />
      <div className="info">
        <h3 className="title">{item.title}</h3>
        <p className="price">💲{item.price.toFixed(2)}</p>
        <div className="qty-box">
          <button onClick={() => dispatch(decreaseQty(item.id))} className="qty-btn">−</button>
          <span className="qty-count">{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))} className="qty-btn">＋</button>
          <button onClick={viewProduct} className="qty-btn">View Product</button>
       </div>
      </div>
      <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">🗑️</button>
    </div>
  );
};

export default CartItem;
