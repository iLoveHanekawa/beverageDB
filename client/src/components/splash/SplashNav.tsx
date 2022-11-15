import React from 'react'
import { BiDrink } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import Search from './search/Search'

function SplashNav() {
  return (
    <div className = 'w-screen absolute top-3 z-10 flex justify-between items-start pr-5'>
          <div className = 'flex pl-5 items-center gap-2'>
              <BiDrink className = 'text-white text-xl'/>
              <div className = 'text-white text-xl'>BeverageDB</div>
          </div>
          <div className = 'flex'>
            <Search />
            <a href='https://github.com/iLoveHanekawa/beverageDB' target = '__blank'>
              <AiFillGithub className = 'text-white bg-black text-3xl' />
            </a>
          </div>
    </div>
  )
}

export default SplashNav