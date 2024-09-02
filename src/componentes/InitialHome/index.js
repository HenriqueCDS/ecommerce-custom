import home from './homes.module.css';
import { Swiper, SwiperSlide, } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import img from "../../assets/img/3737_AWBANNER_DESKTOP1.png"; 
import img2 from "../../assets/img/3737_AWBANNER_DESKTOP2.png"; 
import img3 from "../../assets/img/3737_AWBANNER_DESKTOP3.png";

export default function InitialHome() {
    const data = [

        { id: '1', image:img},
        { id: '2', image:img2},
        { id: '3', image:img3}
    ]

     console.log(data)
    return (
        <section className={home.initalHome}>
            <Swiper
                modules={[ Autoplay]}
                autoplay={{delay:4000}}
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
        </section>



    )
}