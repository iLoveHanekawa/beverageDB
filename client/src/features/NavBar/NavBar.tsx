import React from 'react'
import { BiDrink } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { RiContactsLine } from 'react-icons/ri'

function NavBar() {

    const navigate = useNavigate()

  return (
    <div className = "top-0 nav py-2 fixed">
        <div className = 'btn flex items-center' onClick = {
            () => {
                navigate('/')
            }
        }>
            <BiDrink className = 'text-md mr-1' />
            <button className = 'text-sm'>BeverageDB</button>
        </div>
        <div className = 'flex gap-6 items-center'>
            <div className = 'btn flex items-center gap-1' onClick = {
            () => {
                navigate('/')
            }
        }>
                <AiOutlineHome className='text-md'/>
                <button className = 'text-sm'>Home</button>
            </div>
            <div className='btn flex items-center gap-1' onClick = {
            () => {
                navigate('/about')
            }
        }>
                <AiOutlineInfoCircle className = 'text-md' />
                <button className = 'text-sm'>About</button>
            </div>
            <div className='btn flex items-center gap-2' onClick = {
            () => {
                navigate('/contact')
            }
        }>
                <RiContactsLine className = 'text-md' />
                <button className = 'text-sm'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar