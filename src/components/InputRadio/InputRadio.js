import React from 'react'
import '../InputRadio/InputRadio.css'

const InputRadio = ({inputID, labelFor, labelText}) => {
  return (
    <div>
        <label htmlFor={labelFor}>
        <input name='filtro' type="radio" id={inputID} />
        <span className='bg-white'>{labelText}</span>
        </label>
    </div>
  )
}

export default InputRadio