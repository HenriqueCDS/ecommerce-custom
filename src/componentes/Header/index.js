// components/Header.js
import React from 'react';
import header from './header.module.css';
import { Heart, ShoppingCart, User } from 'phosphor-react';
import { useCarrinhoContext } from '../../contextos/carrinho';
import CabecalhoLink from './CabecalhoLink'

function Header() {

  const { quantidadeProdutos } = useCarrinhoContext();
  console.log('carrinho:', quantidadeProdutos);
  return (
    <header className={header.cabecalho}>
      <CabecalhoLink to="/">
        Logo
      </CabecalhoLink>
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
