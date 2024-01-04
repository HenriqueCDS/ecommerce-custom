import home from './homes.module.css';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';


export default function InitialHome() {
    const data = [

        { id: '1', image: 'https://artwalk.vteximg.com.br/arquivos/ids/434947/3737 - AW BANNER - DESKTOP 3.png?v=638276176489030000' },
        { id: '2', image: 'https://artwalk.vteximg.com.br/arquivos/ids/434933/3737 - AW BANNER - DESKTOP 2.png?v=638273796587200000' },
        { id: '3', image: 'https://artwalk.vteximg.com.br/arquivos/ids/434930/3737 - AW BANNER - DESKTOP 1.png?v=638273774150700000' }
    ]

    return (

        <section className={home.initalHome}>
            <Swiper
                modules={[EffectCoverflow, Autoplay]}
                autoplay={{delay:4000}}
                effectcoverflow={{slideShadows: true}}
                effect='coverflow'
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

            <div>

            </div>


        </section>



    )
}