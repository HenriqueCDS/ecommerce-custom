import axios from 'axios';





async function pegaTodosOsProdutos(){
    try {

        let url = "http://localhost:4000/produto";
        const response = await axios.get(url)
        return response.data; 

        } catch (error) {
            console.log('erro',error);
        }
    
}
async function pegaProdutoEImagem(id){
    try {
        let url = `http://localhost:4000/produto/images/${id}`;
        
        const response = await axios.get(url)
    
        return response.data; 

        } catch (error) {
            console.log('erro',error);
        }
    
}



export {
    pegaTodosOsProdutos,
    pegaProdutoEImagem
    
}


