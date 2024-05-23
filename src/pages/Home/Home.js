import React from 'react';
import CardList from '../../componentes/CardList';
import InitialHome from '../../componentes/InitialHome';
import styles from './marcas.module.css';
import nike_preto from '../../assets/img/Nike-Logo-Preto.svg'
import adidas_preto from '../../assets/img/adidas-logo-preto.jpg'
import puma_preto from '../../assets/img/puma-logo-preto.svg'
import jordan_preto from '../../assets/img/jordan-logo-preto.svg'
import { motion } from "framer-motion";




export default function Home() {
  return (
    <div>
      <InitialHome />
      <CardList />
      <div className={styles.container}>
        <h2>Marcas</h2>
        <div className={styles.marcas}>
          <motion.card whileHover={{ scale: 1.1 }}>
            <div>
              <img src={nike_preto} alt='' />
            </div>
          </motion.card>
          <motion.card whileHover={{ scale: 1.1 }}>
            <div>
              <img src={adidas_preto} alt='' />
            </div>
          </motion.card>
          <motion.card whileHover={{ scale: 1.1 }}>
            <div>
              <img src={puma_preto} alt='' />
            </div>
          </motion.card>
          <motion.card whileHover={{ scale: 1.1 }}>
            <div>
              <img src={jordan_preto} alt='' />
            </div>
          </motion.card>
        </div>
      </div>


    </div>
  );
}


