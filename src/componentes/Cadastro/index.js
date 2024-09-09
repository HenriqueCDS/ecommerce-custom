import style from './cadastro.module.css'
import { User, EnvelopeSimple, LockSimple } from 'phosphor-react';
import { mandaDadosCadastro } from '../../services/servicoCadastro.js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {


  const [nome, setNome] = useState("")
  const [sobreNome, setSobreNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const navigate = useNavigate();

  async function gerenciaNovoCadastro(){
    const response = await mandaDadosCadastro({nome, sobreNome, email, senha})
    if(response.status === 200) return navigate('/login');
 

  }

  return (
    <div className={style.registro}>
    <form className={style.formlogin} onSubmit={gerenciaNovoCadastro}>
        <h2>Crie sua conta</h2>
        <h3>Preencha seus dados</h3>
        
        <div>
          <User size={28} />
          <input type="text" placeholder="Nome Completo" name="uname" onChange={(event) => setNome(event.target.value)} required /> 
        </div>
        <div>
          <EnvelopeSimple size={28} />
          <input type="text" placeholder="Email" name="email" onChange={(event) => setEmail(event.target.value)} required />
        </div>

        <div>
          <LockSimple size={28} />
          <input type="password" placeholder="Senha" name="psw" onChange={(event) => setSenha(event.target.value)} required />
        </div>
        <button type="submit">Cadastrar</button>
    </form>

  </div>
  )
}
