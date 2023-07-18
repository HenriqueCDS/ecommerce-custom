// components/Product.js
import React from 'react';
import style from './produto.module.css';
import { Route, Redirect  } from "react-router-dom";
import { useContext } from 'react';
import { CarrinhoContext } from '../../contextos/carrinho';

function Card({ name, image, price }) {
  const {carrinho, setCarrinho} = useContext(CarrinhoContext);
  return (
    <div className={style.container}  onClick={() => redirect()}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      
    </div>
  );
}
function redirect() {
  return (
    <Route exact path="/" render={() => (
      <redirect to="/sobre"/>
    )}/>
  );
}

export default Card;
