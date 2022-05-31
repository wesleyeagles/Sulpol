import React, {useState} from 'react'
import '../FormularioMaquinas/FormularioMaquinas.css'
import SelectCities from './InputsSelect/SelectCities'
import SelectStates from './InputsSelect/SelectStates'

function FormularioMaquinas() {

  const [formValues, setFormValues] = useState({})

  const handleInputChange = (e) => {
      e.preventDefault();

      const {value, name} = e.target;
      setFormValues({...formValues, [name]:value })
  }

  console.log(formValues)


  return (
    <div>
        <form>
            <div>
            <h2 className='text-3xl text-[#202124] font-normal'>Tenho interesse</h2>
            <p className='font-normal mt-10'>Preencha o formulário abaixo e nossa equipe retornará o seu contato</p>
            </div>

            <div className='flex gap-[45px] mt-10'>
            <input className='border border-[#AAAAAA] p-5 rounded-md w-[370px] h-[55px]' type='text' placeholder="Nome"/>
            <input className='border border-[#AAAAAA] p-5 rounded-md w-[370px] h-[55px]' type='email' placeholder="E-mail"/>
            <input className='border border-[#AAAAAA] p-5 rounded-md w-[370px] h-[55px]' type='tel' placeholder="Telefone"/>
            </div>

            <div>
            <h2 className='text-2xl text-[#202124] font-normal mt-10'>De onde você é?</h2>
            </div>

            <div className='flex gap-[45px] mt-10 items-end'>
            <SelectStates onChange={handleInputChange}/>
            <SelectCities states={formValues.states} onChange={handleInputChange}/>
            <div className='flex gap-2'>
            <input name='politica' id='politica' type='checkbox' />
            <label className='text-sm' htmlFor='politica'>Estou de acordo com a Política de Privacidade</label>
            </div>
            </div>
            <button className='bg-sulpol-green w-full rounded text-white font-bold h-14 hover:bg-black duration-1000 mt-11'>SOLICITAR ORÇAMENTO</button>

        </form>

    </div>
  )
}

export default FormularioMaquinas