import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductDetail.css';
/* detailed information of particular project*/
const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setItem(data);
      } catch (err) {
        setError('❌ Failed to fetch product details. Please try again later.');
        console.error(err);
      }
    };
    getProduct();
  }, [id]);

  const handleCart = () => {
    dispatch(addToCart(item));
  };

  if (error) return <div className="detail-error">{error}</div>;
  if (!item) return <div className="detail-loader">Loading product...</div>;

  return (
    <div className="detail">
      <img src={item.thumbnail} alt={item.title} className="detail-image" />
      <div className="detail-info">
        <h2 className="detail-title">{item.title}</h2>
        <p className="detail-desc">{item.description}</p>
        <p className="detail-brand">🏷️ Brand: {item.brand}</p>
        <p className="detail-cost">💰 Price: ${item.price}</p>
        <p className="detail-stock">📦 In Stock: {item.stock}</p>
        <button className="detail-cart-btn" onClick={handleCart}>
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
