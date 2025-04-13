import React, {  useState } from 'react';
import ProductCard from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';
import './ProductList.css';
/*  filter products section */
const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [qury, setQury] = useState('');

  const filteredItems = products.filter((item) =>
    item.title.toLowerCase().includes(qury.toLowerCase())
  );

  return (
    <div className="product">
      <h2 className="heading">🛒 Products</h2>
      <input
        type="text"
        placeholder="🔍 Search products..."
        className="search-bar"
        value={qury}
        onChange={(e) => setQury(e.target.value)}
      />
      {loading && <p className="info-msg">⏳ Loading products...</p>}
      {error && <p className="info-msg">❌ {error}</p>}
      <div className="product-grid">
        {filteredItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
