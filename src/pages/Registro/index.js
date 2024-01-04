import { useState } from 'react';
import Cadastro from '../../componentes/Cadastro';
import style from './registro.module.css';
import Login from '../../componentes/Login';


export default function Registro() {

    const [Logado, setLogado] = useState(false);
    const [Cadastrado, setCadastrado] = useState("Entrar")

    const TemLogin = () => {
        if(Logado === false){
            setLogado(true)
            setCadastrado("Cadastrar")
        }
        else{
            setLogado(false)
            setCadastrado("Entrar")
        }
        
    }

    return (
        <>
            <section className={style.container}>
                <div className={style.cadastro}>
                    <h1>ShopNow</h1>
                    <h2>Bem-Vindo de volta!</h2>
                    <h3>Acesse sua conta agora mesmo.</h3>
                    <button type="submit" onClick={() => TemLogin()} >{Cadastrado}</button>
                </div>
                {Logado ? <Login/> : <Cadastro/>}
                
               
            </section>
        </>
            
    )



}