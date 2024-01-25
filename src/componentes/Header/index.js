// components/Header.js
import { useEffect, useState } from 'react';
import header from './header.module.css';
import { Heart, ShoppingCart, User } from 'phosphor-react';

import CabecalhoLink from './CabecalhoLink';
import Seachbar from './BarraPesquisa/index'
import { useUsuario } from '../../contextos/usuario';

function Header() {
  const [logado, setLogado] = useState('')
  const contexto = useUsuario()

  useEffect(() => {
      
      if(!contexto.Usuario.nome){
        setLogado('Entrar')
      }else{
        setLogado(`Bem vindo, ${contexto.Usuario.nome}`)
      }
    
  });



  
  
  
  return (
    <header className={header.cabecalho}>
      <CabecalhoLink url="/">
        <div className={header.logo}>
          <h1>Shop<span>Now</span></h1>
        </div>
      </CabecalhoLink>
      <Seachbar />
      <nav className={header.navbar}>
        <CabecalhoLink url='/login'> <User size={28} />
          {logado}
        </CabecalhoLink>

        <CabecalhoLink url='/favoritos'> <Heart size={28} />
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
