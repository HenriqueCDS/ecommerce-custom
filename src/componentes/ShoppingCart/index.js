// components/ShoppingCart.js
import React from 'react';
import style from './ShoppingCart.module.css';
import produtos from './produtos.json';
import ProdutoCart from '../ProdutoCart'
import { useCarrinhoContext } from '../../contextos/carrinho';

 
function ShoppingCart() {
  const { carrinho,valorTotal } = useCarrinhoContext();
 
  return (
    <div className={style.container}>
        <h2>
          Carrinho:
        </h2>
        {carrinho.map(produto => (
          <ProdutoCart
            {...produto}
            key={produto.id}
            valor={produto.price}
            nome = {produto.name}
          />
        ))}
        <div className={style.block}>
          <h1>Total: { valorTotal.toFixed(2)}</h1>
          
        </div>
        <button
        disabled={carrinho.length==0?true:false}
        >Continuar</button>
        
        
      
   
    </div>
  );
}

export default ShoppingCart;
