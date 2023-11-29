import { createContext, useContext, useEffect, useState } from 'react';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotal,
        setValorTotal
        }}
      >
      {children}
    </CarrinhoContext.Provider>
  )
};

export const useCarrinhoContext = () => {
  
  const {
    carrinho, 
    setCarrinho,
    quantidadeProdutos,
    setQuantidadeProdutos,
    valorTotal,
    setValorTotal
  } = useContext(CarrinhoContext);

  function mudarQuantidade(id, quantidade) {
    return carrinho.map(itemDoCarrinho => {
      if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
      return itemDoCarrinho;
    });
   
  }

  function adicionarProduto(novoProduto) {
     
    const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);
    if(!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho(carrinhoAnterior =>
        [...carrinhoAnterior, novoProduto]
      )
    }
    setCarrinho(mudarQuantidade(novoProduto.id, 1));
  }

  function removerProduto(id) {
    const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1;
    if(ehOUltimo) {
      return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id));
    };
    setCarrinho(mudarQuantidade(id, -1));
  }

  useEffect(() => {
    let { novaQuantidade, novoTotal } = carrinho.reduce((contador, novoItem) => ({
      novaQuantidade: contador.novaQuantidade + novoItem.quantidade,
      novoTotal: contador.novoTotal + (novoItem.price * novoItem.quantidade)
    }), { novaQuantidade: 0, novoTotal: 0 });
    setQuantidadeProdutos(novaQuantidade);
    setValorTotal(novoTotal);
  },[carrinho, setQuantidadeProdutos,valorTotal, setValorTotal])
  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    mudarQuantidade,
    quantidadeProdutos,
    valorTotal
  }
}