import React from 'react'
import InputRadio from '../InputRadio/InputRadio'

const Equipamentos = () => {
  return (
    <div className='bg-[#F8F8F8]'>
        <div className='container mx-auto'>
            <div className='flex justify-between'>
                <div className='w-[25%]'>
                    <small className='text-sulpol-green xl:text-base 2xl:text-lg font-medium'>EQUIPAMENTOS</small>
                    <h2 className='text-[32px] leading-tight font-medium'>Tecnologia para atender todas as necessidades</h2>
                </div>

                <div className='flex'>
                    <InputRadio labelText="Calçado" labelFor="Calçado" inputID="Calçado" />
                    <InputRadio labelText="Refrigeração" labelFor="Refrigeração" inputID="Refrigeração" />
                    <InputRadio labelText="Filtros automotivos" labelFor="Filtros automotivos" inputID="Filtros automotivos" />
                    <InputRadio labelText="Ver tudo" labelFor="Ver tudo" inputID="Ver tudo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Equipamentos