// components/ProductList.js
import React from 'react';
import Product from '../Produto';

function ProductList() {
  const products = [
    { id: 1, name: 'Product 1', image: 'product1.jpg', price: '$9.99' },
    { id: 2, name: 'Product 2', image: 'product2.jpg', price: '$19.99' },
    { id: 3, name: 'Product 3', image: 'product3.jpg', price: '$14.99' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
