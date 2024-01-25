// pages/ProductDetails.js
import {React,useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { pegaProdutoEImagem } from '../../services/servicoProdutos';
import style from './ProductDetalhes.module.css';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { useCarrinhoContext } from '../../contextos/carrinho';
import { EffectCoverflow, Autoplay } from 'swiper/modules';



function ProductDetails() {
  const {  adicionarProduto } = useCarrinhoContext();

  const { id } = useParams();

  const [produto, setProduto ] = useState({});
  const [imgs, setImgs ] = useState([" "]);
  
  

  async function handlerProdutos () {
    const response = await pegaProdutoEImagem(id);
   
    setProduto(response[0].Produto);
    setImgs([
      response[0].img1,
      response[0].img2,
      response[0].img3,
      response[0].img4,
    ]);
   
  }  
 
  useEffect(()=>{
    handlerProdutos();
  },[])

 
  let name = produto.nome;
  let image = produto.img;
  let price = produto.preco;




  return (
    <div className={style.container} >

     
          <Swiper 
            modules={[EffectCoverflow, Autoplay]}
            autoplay={{ delay: 4000 }}
            effectcoverflow={{ slideShadows: true }}
            effect='coverflow'
            slidesPerView={1}
            pagination={{ clickable: true }}
            
            className={style.block1}
          >
            {imgs.map((item) => (
              <SwiperSlide >
                <img
                  src={item}
                />
              </SwiperSlide>

            ))}

          </Swiper>
    

      <div className={style.block2}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.description}>{name}</p>
        <h3 className={style.price}> R$ {price}</h3>
        <div >
          <label >Quantidade:</label>
          <input
            type="number"
            id="quantity"
            min="1"

          />
        </div>
        <Link to='/cart'>
          <button onClick={() => adicionarProduto({ id, image, name, price })} >
            Adicionar ao carrinho
          </button>
        </Link>
      </div>

    </div>
  );
}

export default ProductDetails;
