import React from 'react'
import { BiDrink } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import Grid from './grid/Grid'

function Splash() {

  return (
    <div className = {`bg-black w-screen relative h-screen bg-opacity-80 font-nunito overflow-hidden`}>
        <div className = {`bg-[url('./images/grapes.jpg')] w-screen h-screen opacity-90 bg-cover mix-blend-overlay`}></div>
        <div className = 'absolute top-3 left-5 flex justify-between items-center w-screen'>
          <div className = 'w-screen flex items-center justify-between pr-10'>
            <div className = 'flex items-center gap-2'>
                <BiDrink className = 'text-white text-xl'/>
                <div className = 'text-white text-xl'>BeverageDB</div>
            </div>
            <a href='https://github.com/iLoveHanekawa/beverageDB' target = '__blank'>
              <AiFillGithub className = 'text-white bg-black text-3xl' />
            </a>
          </div>
        </div>
        <p className = 'text-white text-4xl absolute font-bold top-10 left-10 py-10 w-2/5'>A fast and easy to use tool for getting all information on ethnic beverages. </p>
        <Grid />
    </div>
  )
}

export default Splash