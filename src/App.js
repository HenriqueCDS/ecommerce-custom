// App.js
import React from 'react';
import {  Routes, BrowserRouter, Route } from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import ProductDetails from './componentes/ProductDetalhes';
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import NotFound from './pages/NotFound';

import {textSobre,a} from './pages/About/textoSobre';


function App() {
  return (
   
      <div className="App">
      
        <BrowserRouter>
         <Header />
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/product/:id" element={<ProductDetails/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/sobre" element={<About titulo='Sobre Nos' textos={textSobre}/>} />
              <Route path="/coqueteis" element={<About titulo='Sobre Nos' textos={a}/>} />
              <Route path="/lanches" element={<About />} />
              <Route path="/pratos" element={<About />} />
              <Route path="*" element={<NotFound />}/>
            </Routes>
            <Footer />
          </BrowserRouter>
      
      </div>
    
  );
}

export default App;
