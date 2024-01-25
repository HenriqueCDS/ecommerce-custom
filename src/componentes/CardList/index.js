// components/ProductList.js
import React, { useState,useEffect } from 'react';
import Card from '../Card';
import styles from './ProdutosLists.module.css';
import { pegaTodosOsProdutos } from '../../services/servicoProdutos';
import { motion } from "framer-motion";
function CardList() {

  const [produtos, setProdutos ] = useState([{}]);

  async function handlerProdutos () {
    const response = await pegaTodosOsProdutos();
    setProdutos(response);
  }  
 
  useEffect(()=>{
    handlerProdutos();
  },[])


  
  return (
  
 
    <div className={styles.container}>
      {
        
      produtos.map((product) => (
        <motion.card whileHover={{scale:1.1}} key={product.id}> 
         <Card 
          key={product.id}
          id={product.id}
          name={product.nome}
          image={product.img}
          price={product.preco}
        />
        </motion.card>
      ))}
    </div>
  );
}

export default CardList;
