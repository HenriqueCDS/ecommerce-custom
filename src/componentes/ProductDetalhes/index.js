// pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import CustomizationOptions from '../custom';

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <h3>Product ID: {id}</h3>
      <CustomizationOptions />
    </div>
  );
}

export default ProductDetails;
