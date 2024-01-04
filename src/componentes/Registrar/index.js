import { useState } from 'react';
import Login from '../../componentes/Login';
import style from './registro.module.css';


export default function Registro() {

    const [Logado, setLogado] = useState(false);

    const TemLogin = () => {
        setLogado(true)
    }

    return (
        <>
            <section className={style.container}>
                <div className={style.cadastro}>
                    <h1>ShopNow</h1>
                    <h2>Bem-Vindo de volta!</h2>
                    <h3>Acesse sua conta agora mesmo.</h3>
                    <button type="submit" onClick={() => TemLogin()} >Entrar</button>
                </div>
                {Logado ? <h1>Login</h1> : <Login/>}
                
               
            </section>
        </>
            
    )



}