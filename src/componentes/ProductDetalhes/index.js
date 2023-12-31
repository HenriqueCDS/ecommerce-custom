// pages/ProductDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../json/produtos.json';
import style from './ProductDetalhes.module.css';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { useCarrinhoContext } from '../../contextos/carrinho';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import { useContext } from 'react';

function ProductDetails() {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();

  const { id } = useParams();
  const product = products.find((product) => {
    return product.id === Number(id);
  })
  let name = product.name;
  let image = product.image;
  let price = product.price;
 
 console.log(product.imageDetails);

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
            {product.imageDetails.map((item) => (
              <SwiperSlide >
                <img
                  src={item}
                />
              </SwiperSlide>

            ))}

          </Swiper>
    

      <div className={style.block2}>
        <h1 className={style.name}>{product.name}</h1>
        <p className={style.description}>{product.details}</p>
        <h3 className={style.price}> R$ {product.price}</h3>
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
