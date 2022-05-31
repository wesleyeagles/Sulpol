import React from 'react'
import Slider from '../components/Slider/Slider'
import ImgTecnologia from '../images/quem-somos.png'

import {ReactComponent as Element } from '../images/Element.svg'
import {ReactComponent as Octagone } from '../images/Octagone.svg'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'
import Equipamentos from '../components/Equipamentos/Equipamentos'


function Home() {

 
  return (
    <div>
      <Slider></Slider>
      
      <section className='pt-40 pb-40'>
        <div className='container mx-auto'>
          <div className='lg:flex justify-between'>
            <div className='lg:w-[40%]'>
              <small className='text-sulpol-green xl:text-base 2xl:text-lg font-medium'>QUEM SOMOS</small>
              <h2 className='text-[#202124] text-3xl xl:text-[42px] 2xl:text-[46px] font-medium w-[100%] leading-tight'>Somos tecnologia em constante movimento</h2>
              <img className='mt-16' src={ImgTecnologia} />
            </div>

            <div className='lg:w-[50%] mt-10 lg:mt-0'>
              <Element className='mb-7' />
              <p className='xl:text-lg 2xl:text-xl font-medium'>Fundada em 1989, hoje somos líder no mercado brasileiro e latino americano no desenvolvimento e  fabricação de dosadoras e injetoras de PU.</p>
              <h2 className='border-t border-gray-400 pt-7 mt-10 mb-10 text-3xl font-medium'>Projetos personalizados</h2>
              <p className='xl:text-base 2xl:text-lg font-light'>Temos capacidade tecnológica e fabril para desenvolver, fabricar e entregar projetos especiais dos mais diversos portes.</p>
              <div className='lg:flex gap-20 mt-12 mb-12'>
                <span className='flex gap-2 items-center xl:text-base 2xl:text-lg font-light'><Octagone /> Pequeno porte</span>
                <span className='flex gap-2 items-center xl:text-base 2xl:text-lg font-light'><Octagone /> Médio porte</span>
                <span className='flex gap-2 items-center xl:text-base 2xl:text-lg font-light'><Octagone /> Grande porte</span>
              </div>
              <p className='xl:text-base 2xl:text-lg font-light'>Oferecemos aos mais diversos setores da indústria os melhores equipamentos com alta tecnologia, desempenho, qualidade, eficiência e produtividade.</p>
              <h2 className='pt-8 mt-10 border-t border-gray-400 mb-8 text-3xl font-medium'>Tecnologia sulpol</h2>
              <p className='mb-16 xl:text-base 2xl:text-lg font-light'>Temos tecnologia própria na fabricação dos nossos equipamentos, oferecendo soluções tecnológicas personalizadas para a necessidade de cada cliente.</p>
              <ButtonPrimary text="Ver história completa" />
            </div>
          </div>
        </div>
      </section>

      <section>
      <Equipamentos className="pt-10 pb-10" />
      </section>
      
    </div>
  )
}

export default Home;