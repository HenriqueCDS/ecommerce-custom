import style from './login.module.css';
import { useState } from 'react';
import { EnvelopeSimple, LockSimple } from 'phosphor-react';
import { geraToken } from '../../Services/GeraToken.js';
import { useUsuario } from '../../contextos/usuario';

export default function Login() {
  
  const { updateUsuario } = useUsuario();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function identificadorLogin (evento) {
      evento.preventDefault();
      const usuarioToken = await geraToken({email, senha})
     
      console.log(usuarioToken.status);
      if(usuarioToken.status == 400){
        alert(usuarioToken.data.msg);
      }else {
        updateUsuario(usuarioToken.user.primeiroNome, usuarioToken.token);
        alert("Login feito com sucesso!");
        window.location.href="/";
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
