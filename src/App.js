// App.js
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import ProductDetails from './componentes/ProductDetalhes';
import Home from './pages/Home/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Favoritos from './pages/Favoritos';
import { CarrinhoProvider } from './contextos/carrinho.js';
import { UsuarioProvider } from './contextos/usario.js';
import { FavoritosProvider } from './contextos/favoritos';
import Registro from './componentes/Registrar/index.js';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <UsuarioProvider>
          <CarrinhoProvider>
            <FavoritosProvider>
              <Header />
              <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />


                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/sobre" element={<About titulo='Sobre Nos' />} />

                <Route path="/register" element={<Register />} />
                <Route path="/cadastro" element={<Registro/>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </FavoritosProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </BrowserRouter>


    </div>

  );
}

export default App;
