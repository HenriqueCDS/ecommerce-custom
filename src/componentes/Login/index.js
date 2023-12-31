import style from './login.module.css';
import { EnvelopeSimple, LockSimple } from 'phosphor-react';


export default function Login() {
  return (
    <div className={style.registro}>
    <form className={style.formlogin}>
        <h2>Bem-vindo novamente!</h2>
        <h3>Preencha seus dados</h3>
        
        <EnvelopeSimple size={28} />
        <input type="text" placeholder="Email" name="email" required />
        <LockSimple size={28} />
        <input type="password" placeholder="Senha" name="psw" required />
        <button type="submit">Login</button>
    </form>

</div>
  )
}
