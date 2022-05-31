import React from 'react'
import '../Slider/Slider.css'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import Slide1 from '../../images/slide1Home.png'
import Slide2 from '../../images/slide1Home.png'
import Slide3 from '../../images/slide1Home.png'

export default () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      Autoplay
      pagination={{clickable: true}}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='relative w-full h-[767px] z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide1} />
          <div className='container mx-auto'>
            <h1 className='text-white text-3xl xl:text-[46px] leading-none 2xl:text-5xl font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>A maior da américa latina em equipamentos para poliuretano</h1>
            <p className='lg:text-lg text-white mb-12 lg:w-[33%]'>Há mais de 30 anos entregando máquinas e equipamentos de alta confiabilidade e eficiência.</p>
            <ButtonPrimary text="Entrar em contato" />
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-[767px] z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide2} />
          <div className='container mx-auto'>
            <h1 className='text-white text-5xl font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>A maior da américa latina em equipamentos para poliuretano</h1>
            <p className='text-lg text-white mb-12 w-[33%]'>Há mais de 30 anos entregando máquinas e equipamentos de alta confiabilidade e eficiência.</p>
            <ButtonPrimary text="Entrar em contato 2" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-[767px] z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide3} />
          <div className='container mx-auto'>
            <h1 className='text-white text-5xl font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>A maior da américa latina em equipamentos para poliuretano</h1>
            <p className='text-lg text-white mb-12 w-[33%]'>Há mais de 30 anos entregando máquinas e equipamentos de alta confiabilidade e eficiência.</p>
            <ButtonPrimary text="Entrar em contato 3" />
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};








