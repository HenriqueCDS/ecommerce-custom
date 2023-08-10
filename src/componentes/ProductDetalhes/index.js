// pages/ProductDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../json/produtos.json';
import style from './ProductDetalhes.module.css';

import { useCarrinhoContext } from '../../contextos/carrinho';
import { useContext } from 'react';

function ProductDetails() {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
 
  const { id } = useParams();
  const product = products.find((product) => {
      return product.id === Number(id); 
  })
  let name = product.name
  let image = product.image
  let price = product.price
 
  return (
    <div className={style.container} >
    
    <div className={style.block1}> 
    <img src={product.image}></img>
    </div>

    <div className={style.block2}>
      <h1 className={style.name}>{product.name}</h1>
      <p className={style.description}>{product.details}</p>
      <h3 className={style.price}> R$ {product.price}</h3>
      <div >
        <label >Quantidade:</label>
        <input
          type="number"
          id="quantity"
          min="1"
       
        />
      </div>
      <Link to='/cart'>
      <button  onClick={() => adicionarProduto({ id, image, name, price })} >
        Adicionar ao carrinho
      </button>
      </Link>
    </div>

    </div>
  );
}

export default ProductDetails;
