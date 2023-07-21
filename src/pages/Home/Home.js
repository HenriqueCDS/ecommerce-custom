// pages/Home.js
import React from 'react';
import CardList from '../../componentes/CardList';
import InitialHome from '../../componentes/InitialHome';
import Sobre from '../../componentes/Sobre';


function Home() {
  return (
    <div>
       <InitialHome />
     
       <CardList />
       
      
    </div>
  );
}

export default Home;
