import React from 'react';
import CardList from '../../componentes/CardList';
import InitialHome from '../../componentes/InitialHome';
import styles from './marcas.module.css';


export default function Home() {
  return (
    <div>
      <InitialHome />
      <CardList />
      <div className={styles.modelo}>
        

      </div>


    </div>
  );
}


