// components/Product.js
import React from 'react';

function Product({ name, image, price }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Product;
