import React from 'react'
import '../ButtonPrimary/ButtonPrimary.css'

const ButtonPrimary = ({text}) => {
  return (
    <button className='ButtonPrimary'>{text}</button>
  )
}

export default ButtonPrimary