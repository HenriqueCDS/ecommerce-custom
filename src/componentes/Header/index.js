// components/Header.js
import { useEffect, useState } from 'react';
import header from './header.module.css';
import { Heart, ShoppingCart, User } from 'phosphor-react';

import CabecalhoLink from './CabecalhoLink';
import Seachbar from './BarraPesquisa/index'
import { useUsuario } from '../../contextos/usuario';

import { jwtDecode } from "jwt-decode";

function Header() {
  const [logado, setLogado] = useState('')
  const contexto = useUsuario()
 
  

  useEffect(() => {
    const tokenUser = localStorage.getItem('token');
      
      if(!tokenUser){
        setLogado('Entrar')
      }else{
        const decoded = jwtDecode(tokenUser);
        console.log(decoded)
        setLogado(`Bem vindo, ${decoded.nome}`)
      }
    
  });


  return (
    <header className={header.cabecalho}>
      <CabecalhoLink url="/">
        <div className={header.logo}>
          <h1>Shop<span>Now</span></h1>
        </div>
      </CabecalhoLink>
      <nav className={header.navbar}>
     

   

        <CabecalhoLink url='/cart'> 
          Meus produtos
        </CabecalhoLink>
      </nav>
 
     
     
      <nav className={header.navbar}>
      
        <CabecalhoLink url='/login'> <User size={28} />
          {logado}
        </CabecalhoLink>

        <CabecalhoLink url='/favoritos'> <Heart size={28} />
          Favoritos
        </CabecalhoLink>

        <CabecalhoLink url='/cart'> <ShoppingCart size={28} />
        Carrinho
        </CabecalhoLink>
        <Seachbar />  

    
      
      </nav>
    
    </header>

  );
}

export default Header;
