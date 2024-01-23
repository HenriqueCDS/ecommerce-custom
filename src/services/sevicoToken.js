import axios from 'axios';


async function geraToken({ email, senha }) {

    try {
        const response = await axios.post('http://localhost:4000/login', {
            email: email,
            senha: senha   
        })
        console.log(response.data);
        if(response.status === 200){
            return response.data;  
        }
        
    } catch (error) {
        
        console.log('Erro assíncrono:', error.response);
        return error.response;
    }
}


async function verificaToken(token) {

    try {
        const response = await axios.get('http://localhost:4000/profile',{
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTcwNjAzNjU4OCwiZXhwIjoxNzA2MDY1Mzg4fQ.5jonQ1Pf1w4p9414W8ludAX6FJ9uXGyS9HwZdvg18qo`
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

