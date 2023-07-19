import  style  from './ProdutoCart.module.css';
import { memo } from 'react';
import { useCarrinhoContext } from '../../contextos/carrinho';


function ProdutoCart({
  nome,
  image,
  id,
  valor,
  unidade
}) {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
  return (
      <div className={style.container}>
        <div className={style.bloco1}>
          <img
            src={`${image}`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome}  R$ {valor} 
          </p>
        </div>
        <div className={style.bloco2} >
          <button
            color="secondary"
            onClick={() => removerProduto(id)}
            disabled={!produtoNoCarrinho}
          >
          -
          </button>
          <p>
             {produtoNoCarrinho?.quantidade || 0}
          </p>
         
          <button
            color="primary"
            onClick={() => adicionarProduto({ nome, image, id, valor })}
          >
           +
          </button>
        </div>
      </div>
  )
}

export default memo(ProdutoCart)