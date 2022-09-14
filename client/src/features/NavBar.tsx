import React from 'react'
import { BiDrink } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { RiContactsLine } from 'react-icons/ri'

function NavBar() {

    const navigate = useNavigate()

  return (
    <div className = "top-0 z-10 fixed w-full h-9 bg-gray-900 shadow-sm shadow-gray-900 text-gray-300 flex items-center justify-between px-5">
        <div className='btn flex items-center' onClick = {
            () => {
                navigate('/')
            }
        }>
            <BiDrink className = 'text-lg mr-1' />
            <button className = 'text-sm'>BeverageDB</button>
        </div>
        <div className='flex gap-6 items-center'>
            <div className='btn flex items-center gap-1' onClick = {
            () => {
                navigate('/')
            }
        }>
                <AiOutlineHome className='text-lg'/>
                <button className = 'text-sm'>Home</button>
            </div>
            <div className='btn flex items-center gap-1' onClick = {
            () => {
                navigate('/about')
            }
        }>
                <AiOutlineInfoCircle className = 'text-lg' />
                <button className = 'text-sm'>About</button>
            </div>
            <div className='btn flex items-center gap-2' onClick = {
            () => {
                navigate('/contact')
            }
        }>
                <RiContactsLine className = 'text-lg' />
                <button className = 'text-sm'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar