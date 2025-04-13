import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './ProductItem.css';

/* product view in home page after fetching*/
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const openDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-box" >
      <div onClick={openDetail}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-thumb"
      />
      <h3 className="product-title" onClick={openDetail}>
        {product.title}
      </h3>
      <p className="product-price">💲{product.price}</p>
      </div>
      <button className="add-btn" onClick={handleAdd}>
        ➕ Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
