// components/ProductList.js
import React from 'react';
import Card from '../Card';
import styles from './ProdutosLists.module.css';
import products from '../../json/produtos.json';
import { motion } from "framer-motion";
function CardList() {
  

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <motion.card
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}        > 
         <Card
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
        

        </motion.card>
        
       
      ))}
    </div>
  );
}

export default CardList;
