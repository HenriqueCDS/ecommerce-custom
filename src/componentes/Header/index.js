// components/Header.js
import React from 'react';
import header from './header.module.css';
import { Heart, ShoppingCart, User } from 'phosphor-react';

import CabecalhoLink from './CabecalhoLink';
import Seachbar from './BarraPesquisa/index'

function Header() {
  
  return (
    <header className={header.cabecalho}>
      <CabecalhoLink to="/">
        <div className={header.logo}>
          <h1>Shop<span>Now</span></h1>
        </div>
      </CabecalhoLink>
      <Seachbar />
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
