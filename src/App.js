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
import Login from './pages/Login';
import Register from './pages/Register';

import { CarrinhoProvider } from './contextos/carrinho.js';
import { UsuarioProvider } from './contextos/usario.js';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <UsuarioProvider>
          <CarrinhoProvider>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/sobre" element={<About titulo='Sobre Nos' />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </CarrinhoProvider>
        </UsuarioProvider>
      </BrowserRouter>


    </div>

  );
}

export default App;
