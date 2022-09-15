import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'

function Hero() {
  return (
    <div className = 'text-white z-0 w-full h-2/4 bg-black bg-opacity-70 relative flex-col overflow-hidden rounded-b-3xl shadow-md shadow-gray-500'>
        <div className = { `absolute w-full h-full top-0 left-0 bg-[url('../src/images/hero.jpg')] opacity-90 bg-cover mix-blend-overlay`}></div>
        <div className = { `w-full top-1/4 absolute left-1/4`}>
            <h1 className='text-6xl font-bold'>BeverageDB</h1>
            <p className ='text-sm text-gray-200 mt-3'>An online resource for biological information on beverages</p>
            <div className='flex items-center mt-5'>
              <button className = 'bg-red-400 py-1 px-3 flex items-center rounded-tl-2xl'>
                <div className = 'ml-1'>Browse</div>
                <IoMdArrowDropdown className = 'ml-1 text-xl' />
              </button>
              <form className = 'w-full flex items-center'>
                <input placeholder='Beverage name: eg. Sake' className = 'font-nunito w-1/4 py-1 focus:outline-none text-gray-600 indent-3' type = 'text' />
                <button className = ' bg-red-400 py-1 px-4 rounded-r-full flex gap-1 items-center'>
                  <AiOutlineSearch className = 'text-xl' />Search
                </button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Hero