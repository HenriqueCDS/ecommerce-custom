import axios from 'axios';


async function geraToken({ email, senha }) {


    try {
        const response = await axios.post('http://localhost:4000/login', {
            email: email,
            senha: senha   
        })
        console.log(response.data);
        if(response.status == 200){
            return response.data;  
        }
        
    } catch (error) {
        
        console.log('Erro assíncrono:', error.response);
        return error.response;
    }
}

export {
    geraToken
}

