import axios from 'axios';
import { redirect } from 'react-router-dom';


async function mandaDadosCadastro({nome, sobreNome, email, senha}){
        try {
            await axios.post('http://localhost:4000/users', {
                email: email,
                fistName: nome,
                lastName: sobreNome,
                password: senha,
            })
            .then(() => {
                alert('Usuario cadastrado');
                window.location.href = '/';
            })
           
        } catch (error) {
            console.log('erro',error)
        }
       
        
    
  
}



async function pegaTodosCadastros(){
        try {
            let url = "http://localhost:4000/users";
            const response = await axios.get(url)
            .then(resposta => console.log(JSON.parse(resposta.request.response)))
            .then(()=> {
                alert('caiu then')
                
            })
    
        } catch (error) {
            console.log('erro',error);
        }
    
}

// async function pegaTodosCadastros(){
//     try {
//         let url = "http://localhost:4000/users";
//         await fetch(url)
//             .then((res) => res.json())
//             .then((data)=> {
//                 console.log(data)
//             })
        
//     } catch (error) {
//         console.log('erro',error);
//     }

// }

export {
    mandaDadosCadastro,
    pegaTodosCadastros
}


