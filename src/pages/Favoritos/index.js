
// components/ProductList.js
import React from 'react';
import Card from '../../componentes/Card';

import fav from './fav.module.css';
import { useFavoritoContext } from '../../contextos/favoritos';
import gifNotfound from  "./john-travolta.gif";
function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
      
    <>
       <div className={fav.text} >
        {favorito.length === 0 ? (
          <>
            <h1>Nao tem favoritos</h1>
            <img src={gifNotfound}  alt='Não encontrado'/>
          </>
        ) : (
          <h1>Seus  favoritos</h1>
        )}
        </div>
      <div className={fav.container} >
        {favorito.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default Favoritos;

