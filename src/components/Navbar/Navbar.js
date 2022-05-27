import React, { useState } from 'react'
import {ReactComponent as Logo } from '../../images/logo.svg';


import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

import '../Navbar/Navbar.css'


import { NavLink, Link } from "react-router-dom";
import NavButton from '../NavButton/NavButton';
import Flags from '../Flags/Flags';

import Star300s from '../../images/star300s.png'

import Star300S from '../Maquinas/Star300S';

function Navbar() {

  const [menuMobile, setMenuMobile] = useState(0);


  const openMenu = () => {
    setMenuMobile(!menuMobile);
  }

  const [menuProdutos, setProdutos] = useState(0);

  const openProdutos = () => {
    setProdutos(!menuProdutos);

    if (data == true) {
      setData(!data)
    }
  }

  const [hideMenu, setHideMenu] = useState(0);

  const toggleHideMenu = () => {
    setHideMenu(!hideMenu)
  }

  const [data, setData] = useState(0)

  const toggleMaquinas = () => {
    setData(!data)
    
  }

 




  return (
    <div>
    <nav className='bg-white h-28 shadow-md relative z-20'>
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full'>
        <Link to={'/'}><div> <Logo className="w-48 logo"/> </div></Link>
        <ul className='hidden lg:flex gap-7 nav-links items-center'>
          <NavLink className="nav-link" to={'/'}>Inicio</NavLink>   
          <NavLink className="nav-link" to={'/A-Sulpol'}>A Sulpol</NavLink>
          <li onClick={openProdutos} className="nav-link flex items-center">Produtos <IoMdArrowDropdown className='mt-1' /></li>
          <li className="nav-link">Serviços</li>
          <li className="nav-link">Aplicação</li>
          <li className="nav-link">FAQ</li>

          <div  className="ml-10 flex items-center lg:flex-col xl:flex-row lg:gap-1 xl:gap-4">
          <NavButton></NavButton>
          <Flags></Flags>
          </div>
        </ul>

        
        <div onClick={openMenu} className='Toggler lg:hidden'> <RiMenu3Fill size={30} /></div>
        </div>
        
      </div>
    </nav>

    <div className={`w-full h-0 overflow-hidden bg-gray-800 transitio transition-all ${menuMobile ? "h-96 pt-9" : null}`}>
        <ul className='flex flex-col items-center gap-5'>
        <NavLink className="nav-link text-white" to={'/'}>Inicio</NavLink>   
        <NavLink className="nav-link text-white" to={'/A-Sulpol'}>A Sulpol</NavLink>
        <li onClick={openProdutos} className="nav-link flex items-center text-white">Produtos <IoMdArrowDropdown className='mt-1' /></li>
        <li className="nav-link text-white">Serviços</li>
        <li className="nav-link text-white">Aplicação</li>
        <li className="nav-link text-white">FAQ</li>
        </ul>

    </div>

    <div className={`bg-white shadow-md h-0 overflow-hidden w-full lg:w-[30%] 2xl:w-1/4 transition-all duration-1000 fixed z-10 ${menuProdutos ? "h-[350px] lg:h-screen" : null} ${hideMenu ? "-translate-y-72" : null}`}>
      <div className='container mx-auto h-full'>

      <div className={`flex flex-wrap lg:flex-nowrap lg:flex-col lg:mt-5 gap-2 sm:gap-4 lg:gap-3 ${menuProdutos ? "h-[45vh] lg:h-[75vh] overflow-y-scroll" : null}`}>
        <div onClick={() => toggleMaquinas()} className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>STAR <span className='text-sulpol-green font-bold'>300S</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>STAR <span className='text-sulpol-green font-bold'>300S-MRP</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>STAR <span className='text-sulpol-green font-bold'>300S-PV</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>STAR 300S-<span className='text-sulpol-green font-bold'>R24/36</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>STAR <span className='text-sulpol-green font-bold'>300S-TG</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>DOSADORA <span className='text-sulpol-green font-bold'>ELASTÔMERO</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>DOSADORA <span className='text-sulpol-green font-bold'>PORTÁTIL</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>DOSADORA DE<br/><span className='text-sulpol-green font-bold'>ALTA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex w-[31%] sm:w-[31%] md:w-[31.7%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name w-full sm:w-[130px] md:w-[150px] lg:w-2/5'>DOSADORA DE <span className='text-sulpol-green font-bold'>BAIXA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5'> <img className='hidden sm:block w-[50px] md:w-auto' src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='w-full lg:hidden flex justify-center'><IoMdArrowDropdown onClick={toggleHideMenu} size={30} /></div>

      </div>

      </div>
      
    </div>
    
    <div>
    <Star300S toggleMaquinas={data} />
    </div>
      
    </div>
    

    
    
  )
}

export default Navbar