import home from './homes.module.css';
import img from './background.png';
import { useState, useEffect } from 'react';
import { CaretCircleDoubleDown } from 'phosphor-react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { EffectFade } from 'swiper/modules';


export default function InitialHome() {
    const [slidesView, setSlidesView] = useState();
    const data = [
        { id: '1', image: 'https://www.designi.com.br/images/preview/10030839.jpg' },
        { id: '2', image: 'https://th.bing.com/th/id/OIP.4oYMiinj_pzAzXAWLWHa_AHaHa?pid=ImgDet&rs=1' },
        { id: '3', image: 'https://photos.enjoei.com.br/livro-alice-no-pais-das-maravilhas/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81NTUyNzc2LzQ2MWUyYWU3ZGEwZjlmZDU3ZmFlZWE0ZTZmNDIwNTllLmpwZw' },
        { id: '4', image: 'https://i.pinimg.com/736x/d0/51/51/d0515171a66adac43a13916dc50d14aa.jpg' }
    ]
    // useEffect(() => {
    //     function manipulaTamanhoTela() {
    //         if (window.innerWidth < 720) {
    //             setSlidesView(1);
    //         }
    //         else {
    //             setSlidesView(2);
    //         }
    //     }
    //     manipulaTamanhoTela();
    //     window.addEventListener("resize", manipulaTamanhoTela)

    //     return () => {
    //         window.removeEventListener("resize", manipulaTamanhoTela)

    //     }

    // }, [])

    return (

        <section className={home.initalHome}>
            <Swiper
                modules={[EffectFade]}
                effect='fade'
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className={home.image}>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt='Imagens de livros'
                            className={home.slideItem}
                        />

                    </SwiperSlide>

                ))}
            </Swiper>

            {/* <div className={home.apresentacao}>
                     <div>
                         <h1 className={home.texto}>Bem-vindo a</h1>
                         <h2 className={home.texto}> <span className={home.span}>Shop</span> Now</h2>
                         <CaretCircleDoubleDown   className={home.float} size={60}  color='var(--color2)'/>
                     </div>   
                </div>   */}

        </section>



    )
}