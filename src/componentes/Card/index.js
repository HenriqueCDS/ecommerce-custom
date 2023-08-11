// components/Product.js
import React from 'react';
import style from './produto.module.css';
import { Link  } from "react-router-dom";
import { useFavoritoContext } from '../../contextos/favoritos';

import { Heart,ShoppingCart } from 'phosphor-react';

function Card({ id, name, image, price }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? "thin" : "fill" ;
   
  return (
    
      <div className={style.container} >
      
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <div>
          <button><Heart size={24} weight={icone}  onClick={()=>{
            adicionarFavorito({ id, name, image, price })
          }}/></button>
          <Link className ={style.link}  to={`/product/${id}`}> <button><ShoppingCart size={24}/></button></Link>
        </div>


      </div>

  );
}


export default Card;
