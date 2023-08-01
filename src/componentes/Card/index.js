// components/Product.js
import React from 'react';
import style from './produto.module.css';
import { Link  } from "react-router-dom";
import { useContext } from 'react';
import { useCarrinhoContext } from '../../contextos/carrinho';
import { Heart } from 'phosphor-react';

function Card({ id, name, image, price }) {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id=== id);
 
  return (
    <Link className ={style.link}  to={`/product/${id}`}>
      <div className={style.container} >
      
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
       
        <button><Heart /></button>
      </div>
    </Link>
  );
}


export default Card;
