// components/Header.js
import React from 'react';
import header from './header.module.css';
import { Link } from 'react-router-dom';
import { ShoppingCart  } from 'phosphor-react';


function Header() {
  return (
    <header>
     
      <nav className={header.navbar}>
      
        <div className={header.item1}>

        <ul>
            <li className={header.navbar}>
              <Link className={header.link} to="/">Home</Link>
            </li>
            <li className={header.navbar}>
              <Link className={header.link} to="/">Sobre Nós</Link>
            </li>
            <li className={header.navbar}>
              <Link className={header.link} to="/">Produtos </Link>
            </li>
            
            <li>
              <Link className={header.link} to="/">Serviços</Link>
            </li>
        </ul>
        </div>


        <div className={header.cart}>
        <ul>
            <li className={header.navbar}>
              <Link className={header.link} to="/"><ShoppingCart  size={28} color='white'/>

              </Link>
            </li>
      
        </ul>
        </div>

        
      </nav>
    </header>
  );
}

export default Header;
