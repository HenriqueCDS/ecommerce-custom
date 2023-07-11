import sobre from './sobre.module.css';
import img from './img.png';
import { Link } from 'react-router-dom';
export default function Sobre() {
    return (
        <>

          
          <section className={sobre.about}>  
            <div className={sobre.container}>
              <div className={sobre.containerTexto}  >     
              <h1>Sobre Nos</h1>
              <p>
                  A Pepper Smith é muito mais do que uma simples lanchonete.
                  Somos um lugar onde sabor, qualidade e paixão
                  pela comida se encontram para criar uma experiência gastronômica única.
                  Desde a nossa fundação, nos dedicamos a oferecer aos nossos clientes um cardápio diversificado, 
                  repleto de opções deliciosas e preparadas com ingredientes frescos e selecionados.
              </p>
              <p>
                  Nossa equipe é formada por profissionais apaixonados 
                  pela culinária e pela arte de servir. Cada prato que 
                  sai de nossa cozinha é cuidadosamente preparado com atenção aos detalhes,
                  garantindo que cada mordida seja uma explosão de sabores e texturas. 
                  Estamos sempre em busca de novas criações e inspirações, para surpreender e 
                  encantar os paladares mais exigentes.
              </p> 

              <Link className={sobre.link} to="/sobre" > <button  className={sobre.button} >ler mais  </button></Link>
              </div> 

             <img className={sobre.img} src={img} /> 
            </div>  
          </section>
        </>
    )
}