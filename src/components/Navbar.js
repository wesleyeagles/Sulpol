import React from 'react'
import Logo from '../images/logo.png';


import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className='bg-white h-28 shadow-md'>
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full'>
        <Link to={'/'}><div> <img className='w-48 h-10' src={Logo} /> </div></Link>
        <ul className='flex gap-7'>
          <Link to={'/'} className="text-lg cursor-pointer hover:text-sulpol-green transition-all">Inicio</Link>
          <Link to={'/A-Sulpol'} className="text-lg cursor-pointer hover:text-sulpol-green transition-all">A Sulpol</Link>
          <li className="text-lg cursor-pointer hover:text-sulpol-green transition-all">Produtos</li>
          <li className="text-lg cursor-pointer hover:text-sulpol-green transition-all">Serviços</li>
          <li className="text-lg cursor-pointer hover:text-sulpol-green transition-all">Aplicação</li>
          <li className="text-lg cursor-pointer hover:text-sulpol-green transition-all">FAQ</li>

        </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar