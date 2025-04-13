import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /* fetching data from given url */
    const getProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('❌ Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
