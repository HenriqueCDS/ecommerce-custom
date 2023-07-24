


import styles from './NotFound.module.css'
import gifNotfound from  "./john-travolta.gif";


export default function Inicio() {
    return(
        <>
            <section  className={styles.container}>         
                    <h1>Ops!</h1>
                    <h1>Conteudo que voce procura não foi encontrado!</h1>
                <img src={gifNotfound}  className={styles.img} alt='Não encontrado'/>
             </section>    
        
        </>
    )
    
};