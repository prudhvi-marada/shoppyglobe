import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
/* not found page or error page */
const NotFound = () => {
  return (
    <div className="container">
      <h1 className="title">404 😵</h1>
      <p className="msg">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home">🔙/* Back to home</Link>
    </div>
  );
};

export default NotFound;
