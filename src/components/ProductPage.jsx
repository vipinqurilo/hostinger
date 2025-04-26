import React, { useState, useEffect } from 'react';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Start as false, set to true only if fetching
  const [error, setError] = useState(null);
  const [fetchEnabled, setFetchEnabled] = useState(false);

  useEffect(() => {
    // Check the environment variable
    // Note: In Create React App, env vars must be prefixed with REACT_APP_
    const shouldFetch = process.env.REACT_APP_FETCH_PRODUCTS === 'YES';
    setFetchEnabled(shouldFetch);

    if (shouldFetch) {
      setLoading(true); // Set loading to true only when fetching starts
      fetch('https://dummyjson.com/products?limit=10')
        .then(response => {
          if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
          setLoading(false);
        });
    } else {
      // If fetching is disabled, ensure loading is false
      setLoading(false);
    }
  }, []); // Empty dependency array means this effect runs once on mount

  if (!fetchEnabled) {
    return <div className="text-center p-10 text-gray-500">Product fetching is disabled.</div>;
  }

  if (loading) {
    return <div className="text-center p-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error fetching products: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 text-sm mb-2">{product.description}</p>
              <p className="text-lg font-bold text-green-600 mb-2">${product.price.toFixed(2)}</p>
              {product.discountPercentage > 0 && (
                <p className="text-sm text-red-500 line-through mb-2">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </p>
              )}
               <p className="text-sm text-gray-500">Rating: {product.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
