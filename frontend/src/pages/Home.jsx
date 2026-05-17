import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://e-commerce-production-a165.up.railway.app/api/products"
      );

      const data = await response.json();

      console.log(data);

      setProducts(data.slice(0, 4));
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  return (
    <div className="home-container">
      <div className="hero-banner">
        <h1>Welcome to PrernaStore</h1>
        <p>Discover the best products at unbeatable prices.</p>
      </div>
      <h2>Featured Products</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
