
import style from './login.module.css'
export default function login(params) {

    return (
        <>
            <section className={style.container}>
                <h1>Login:</h1>
                <form>
                    <input type="text" placeholder="Insira seu username ou email" name="uname" required />
                    <input type="password" placeholder="Insira sua senha" name="psw" required />
                    <button type="submit">Login</button>
                </form>


            </section>
        </>
    )



}