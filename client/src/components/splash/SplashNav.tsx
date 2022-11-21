import React from 'react'
import { BiDrink } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import Search from './search/SplashSearch'
import { useNavigate } from 'react-router-dom'
import { GiWineGlass } from 'react-icons/gi'

function SplashNav() {

  const navigate = useNavigate()

  return (
    <div className = 'w-screen absolute top-3 z-20 flex justify-between items-start pr-5'>
      <button onClick = { () => { navigate('/') }}  className = 'flex pl-5 items-center gap-2'>
          <GiWineGlass className = '-rotate-45 text-white text-xl'/>
          <div className = 'text-white text-xl'>BeverageDB</div>
      </button>
      <div className = 'flex'>
        <Search />
        <a href='https://github.com/iLoveHanekawa/beverageDB' className = 'h-max' target = '__blank'>
          <AiFillGithub className = 'text-white text-3xl' />
        </a>
      </div>
    </div>
  )
}

export default SplashNav