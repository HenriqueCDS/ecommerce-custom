import axios from 'axios';


async function geraToken({ email, senha }) {

    try {
        const response = await axios.post('http://localhost:4000/login', {
            email: email,
            senha: senha   
        })
        if(response.status === 200){
            return response.data;  
        }
        
    } catch (error) {
        
        console.log('Erro assíncrono:', error);
        return error.response;
    }
}


async function verificaToken(token) {

    try {
        const response = await axios.get('http://localhost:4000/profile',{
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                'Authorization': `Bearer ${token}`
              }
        })
        return response;
    } catch (error) {
        return alert("Deu errado a verificada");
    }
}


async function pegaProdutos() {
    try {
        let url = "http://localhost:4000/produto";
        const response = await axios.get(url);
       
        return response;

    } catch (error) {
        console.log('erro',error);
    }

}


export {
    geraToken,
    verificaToken,
    pegaProdutos
}

