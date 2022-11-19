import React from 'react'
import { BiDrink } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import Grid from './grid/Grid'
import Search from './search/SplashSearch'
import SplashNav from './SplashNav'

function Splash() {

  return (
    <div className = {`bg-black w-screen relative h-screen bg-opacity-80 font-nunito overflow-hidden`}>
        <div className = {`bg-[url('./images/grapes.jpg')] w-screen h-screen opacity-90 bg-cover mix-blend-overlay`}></div>
        <SplashNav />
        <p className = 'text-white text-4xl absolute font-bold top-10 left-10 py-10 w-2/5'>A fast and easy to use tool for getting all information on ethnic beverages. </p>
        <Grid />
    </div>
  )
}

export default Splash