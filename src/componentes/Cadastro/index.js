import style from './cadastro.module.css'
import { User, EnvelopeSimple, LockSimple } from 'phosphor-react';
import { mandaDadosCadastro } from '../../Services/services.js'
import { useState } from 'react';


export default function Cadastro() {

  const [nome, setNome] = useState("")
  const [sobreNome, setSobreNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <div className={style.registro}>
    <form className={style.formlogin}>
        <h2>Crie sua conta</h2>
        <h3>Preencha seus dados</h3>
        
        <User size={28}  />
        <input type="text" placeholder="Nome" name="uname" onChange={(event) => setNome(event.target.value)} required /> 
        <input type="text" placeholder="Sobre nome" name="uname" onChange={(event) => setSobreNome(event.target.value)} required /> 
        <EnvelopeSimple size={28} />
        <input type="text" placeholder="Email" name="email" onChange={(event) => setEmail(event.target.value)} required />
        <LockSimple size={28} />
        <input type="password" placeholder="Senha" name="psw" onChange={(event) => setSenha(event.target.value)} required />
        <button type="submit" onClick={() => mandaDadosCadastro({nome, sobreNome, email, senha})} >Cadastrar</button>
    </form>

</div>
  )
}
