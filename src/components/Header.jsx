import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
/*  Header component */ 
const Header = () => {
  const items = useSelector((state) => state.cart.cartItems) || [];

  return (
    <header className="top">
      <div className="logo">📦 ShoppyGlobe</div>
      <nav className="nav">
        <Link to="/">🏠 Home</Link>
        <Link to="/cart">🛒 Cart <span className="count">{items.length}</span></Link>
      </nav>
    </header>
  );
};

export default Header;
