import style from './cadastro.module.css'
import { User, EnvelopeSimple, LockSimple } from 'phosphor-react';
import { mandaDadosCadastro } from '../../Services/services.js'


export default function Cadastro() {
  return (
    <div className={style.registro}>
    <form className={style.formlogin}>
        <h2>Crie sua conta</h2>
        <h3>Preencha seus dados</h3>
        
        <User size={28}  />
        <input type="text" placeholder="Nome" name="uname" required /> 
        <input type="text" placeholder="Sobre nome" name="uname" required /> 
        <EnvelopeSimple size={28} />
        <input type="text" placeholder="Email" name="email" required />
        <LockSimple size={28} />
        <input type="password" placeholder="Senha" name="psw" required />
        <button type="submit" onClick={() => mandaDadosCadastro()} >Cadastrar</button>
    </form>

</div>
  )
}
