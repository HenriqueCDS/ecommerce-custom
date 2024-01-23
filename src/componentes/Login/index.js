import style from './login.module.css';
import { useState } from 'react';
import { EnvelopeSimple, LockSimple } from 'phosphor-react';
import { geraToken,verificaToken } from '../../services/sevicoToken.js';
import { useUsuario } from '../../contextos/usuario';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  
  const { updateUsuario } = useUsuario();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const navigate = useNavigate();
  async function identificadorLogin (evento) {
      evento.preventDefault();

      const usuarioToken = await geraToken({email, senha})
  
      if(usuarioToken.status === 400){
        return alert(usuarioToken.data.msg);
      }
  
        const Token = await verificaToken(usuarioToken.token);
       
        updateUsuario(usuarioToken.user.primeiroNome, usuarioToken.token);
        
        if(Token.status === 200){
          alert("Login feito com sucesso!");
          return navigate('/');
        }
          
      
  };

 
  return (

    

    <div className={style.registro}>
    <form className={style.formlogin}  onSubmit={identificadorLogin}>
        <h2>Bem-vindo novamente!</h2>
        <h3>Preencha seus dados</h3>
        
        <EnvelopeSimple size={28} />
        <input type="text" placeholder="Nome" name="uname" onChange={(event) => setEmail(event.target.value)} required /> 
        <LockSimple size={28} />
        <input type="password" placeholder="Senha" name="psw" onChange={(event) => setSenha(event.target.value)} required />
        <button type="submit">Login</button>
    </form>

</div>
  )
}
