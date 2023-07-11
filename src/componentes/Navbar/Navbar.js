
// components/Nav.js
import React from 'react';
import Nav from './Navbar.css' 
import { Link } from 'react-router-dom';
import { ShoppingCart  } from 'phosphor-react';



export default function Navbar() {
  return (
    <header>
      <nav className={Nav.Nav}>
        <div className={Nav.item1}>
        <ul>
            <li className={Nav.Nav}>
              <Link className={Nav.link} to="/">Home</Link>
            </li>
            <li className={Nav.Nav}>
              <Link className={Nav.link} to="/">Sobre Nós</Link>
            </li>
            <li className={Nav.Nav}>
              <Link className={Nav.link} to="/">Produtos </Link>
            </li>
            <li>
              <Link className={Nav.link} to="/">Serviços</Link>
            </li>
        </ul>
        </div>
        <div className={Nav.cart}>
        <ul>
            <li className={Nav.Nav}>
              <Link className={Nav.link} to="/"><ShoppingCart  size={28} color='white'/>
              </Link>
            </li>
      
        </ul>
        </div>        
      </nav>
      </header>
  );
}
 
