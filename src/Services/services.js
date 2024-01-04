import axios from 'axios';

async function mandaDadosCadastro(){
    try {
        await axios.post('http://localhost:4000/users', {
            email: "Gabriel@gmail.com",
            fistName: "Gabriel",
            lastName: "Barbosa",
            password: "123",
        })
        .then(() => {
            alert("Usuario cadastrado com sucesso!")
        })
        
    } catch (error) {
        console.log('erro',error)
        
    }
  
}

export {
    mandaDadosCadastro
}


