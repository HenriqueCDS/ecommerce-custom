// components/ShoppingCart.js
import React from 'react';
import style from './ShoppingCart.module.css';
import produtos from './produtos.json';
import ProdutoCart from '../ProdutoCart'
function ShoppingCart() {
  return (
    <div className={style.container}>
        <h2>
          Carrinho:
        </h2>
        {produtos.map(produto => (
          <ProdutoCart
            {...produto}
            key={produto.id}
            valor={produto.price}
            nome = {produto.name}
          />
        ))}
        
        <button>Continuar</button>
      
   
    </div>
  );
}

export default ShoppingCart;
