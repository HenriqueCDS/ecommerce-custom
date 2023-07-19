// components/ProductList.js
import React from 'react';
import Card from '../Card';
import styles from './ProdutosLists.module.css';
import products from '../../json/produtos.json'
import { Link } from 'react-router-dom';
function CardList() {
  

  return (
    <div className={styles.container}>
      {products.map((product) => (
        
        <Card
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
        
      ))}
    </div>
  );
}

export default CardList;
