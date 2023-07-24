
import style from './Register.module.css'
export default function register(params) {
    return (
        <>
        <section className={style.container}>
            <h1>Cadastro:</h1>
            <form >
                <input type="data" placeholder="Insira seu nome" name="psw" required />
                <input type="email" placeholder="Insira seu email" name="uname" required />
                
                <input type="password" placeholder="Insira sua senha" name="psw" required />
                <input type="password" placeholder="Insira sua senha" name="psw" required />
               
                <button type="submit">Cadastrar</button>
            </form>


        </section>
    </>
    )
}