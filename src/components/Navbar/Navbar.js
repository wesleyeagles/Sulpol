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

function Navbar(props) {

  const [menuMobile, setMenuMobile] = useState(0);


  const openMenu = () => {
    setMenuMobile(!menuMobile);
  }

  const [menuProdutos, setProdutos] = useState(0);

  const openProdutos = () => {
    setProdutos(!menuProdutos);
  }

 




  return (
    <div>
    <nav className='bg-white h-28 shadow-md relative z-10'>
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

    <div className={`bg-white shadow-md h-0 overflow-hidden w-1/4 transition-all duration-1000 fixed ${menuProdutos ? "h-screen" : null}`}>
      <div className='container mx-auto h-full'>

      <div className={`flex flex-col mt-5 gap-3 ${menuProdutos ? "h-[75vh] overflow-y-scroll" : null}`}>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>STAR <span className='text-sulpol-green font-bold'>300S</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>STAR <span className='text-sulpol-green font-bold'>300S-MRP</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>STAR <span className='text-sulpol-green font-bold'>300S-PV</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>STAR 300S-<span className='text-sulpol-green font-bold'>R24/36</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>STAR <span className='text-sulpol-green font-bold'>300S-TG</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>DOSADORA <span className='text-sulpol-green font-bold'>ELASTÔMERO</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>DOSADORA <span className='text-sulpol-green font-bold'>PORTÁTIL</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>DOSADORA DE<br/><span className='text-sulpol-green font-bold'>ALTA PRESSÃO</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>
        <div className='flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer'> <h2 className='machine-name w-2/5'>DOSADORA DE <span className='text-sulpol-green font-bold'>BAIXA PRESSÃO</span> </h2> <div className='flex items-center gap-5'> <img src={Star300s}/> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div>

      </div>

      </div>
      
    </div>
      
    </div>
    

    
    
  )
}

export default Navbar