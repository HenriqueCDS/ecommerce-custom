import axios from 'axios';

async function mandaDadosCadastro({ nome, sobreNome, email, senha }) {
    try {
        const response = await axios.post('http://localhost:4000/usuarios', {
            email: email,
            primeiroNome: nome,
            sobreNome: sobreNome,
            senha: senha,
            ativo: true
        })
        console.log('resposta front',response)
        // .then(() => {
        //     alert('Usuário cadastrado');
        //     window.location.href = '/';
        // })
        // .catch(error => {
        //     console.log('Erro no cadastro:', error);
        // });
    } catch (error) {
        console.log('Erro assíncrono:', error);
    }
}




async function pegaTodosCadastros(){
        try {
            let url = "http://localhost:4000/usuarios";
            await axios.get(url)
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


