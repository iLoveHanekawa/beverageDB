import React from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Menu() {

  const navigate = useNavigate()
  return (
    <div onClick = {() => { navigate('/contribute')}} className = 'text-white text-2xl cursor-pointer flex flex-col items-end h-min pt-1 ml-3'>
      <FaHandsHelping />
    </div>
  )
}

export default Menu