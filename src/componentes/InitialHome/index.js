
import home from'./homes.module.css';
import img from './background.png';
import { CaretCircleDoubleDown    } from 'phosphor-react';
export default function InitialHome() {
    
    return(
        <>
            <section className={home.initalHome}>
            
                <div className={home.apresentacao}>
                     <div>
                         <h1 className={home.texto}>Bem-vindo a</h1>
                         <h2 className={home.texto}> <span className={home.span}>Shop</span> Now</h2>
                         <CaretCircleDoubleDown   className={home.float} size={60}  color='var(--color2)'/>
                     </div>   
                </div>  
            <img className={home.img} src={img} />
            </section> 
                
            
        </>
    )
}