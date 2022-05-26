import React from 'react'
import '../Flags/Flags.css'

import  BrazilFlag  from '../../images/flagBrazil.png';
import  USAFlag  from '../../images/flagUSA.png';
import  SpainFlag  from '../../images/flagSpain.png';

const Flags = () => {
  return (
    <div className='flex items-center gap-3 Flags'>
        <button> <img src={BrazilFlag}/> </button>
        <button> <img src={USAFlag}/></button>
        <button> <img src={SpainFlag}/></button>
    </div>
  )
}

export default Flags;