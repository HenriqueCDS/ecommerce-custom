// components/Header.js
import React from 'react';
import header from './header.module.css';
import { Heart, ShoppingCart, User } from 'phosphor-react';
import { useCarrinhoContext } from '../../contextos/carrinho';
import CabecalhoLink from './CabecalhoLink';
import { useState } from 'react'
import json from '../../json/produtos.json';

function Header() {
  const [livrosProdutos, setLivrosProdutos] = useState([])
      

  return (
    <header className={header.cabecalho}>
      <CabecalhoLink to="/">
        <div className={header.logo}>
          <h1>Shop<span>Now</span></h1>
        </div>
      </CabecalhoLink>
      <div className={header.pesquisa}>
      <input
        placeholder="O que você esta buscando"
        onBlur={evento => {
          const textoDigitado = evento.target.value;
       
          const resultadoPesquisa = json.length ? json.filter(json => json.name.includes(textoDigitado)) : []
          setLivrosProdutos(resultadoPesquisa)
        }}
      />
      <div className={header.result}>
      {
      livrosProdutos.map(produto => (
          <li>{produto.name}</li>
      ))}
      </div>

      </div>  
      <nav className={header.navbar}>
        <CabecalhoLink url='/'> <User size={28} />
          Home
        </CabecalhoLink>

        <CabecalhoLink url='/'> <Heart size={28} />
          Favoritos
        </CabecalhoLink>

        <CabecalhoLink url='/cart'> <ShoppingCart size={28} />
          Meus produtos
        </CabecalhoLink>
      </nav>


    </header>

  );
}

export default Header;
