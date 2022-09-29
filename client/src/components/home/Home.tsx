import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Home() {

  return (
    <div className='overflow-hidden justify-between flex h-1/2 my-4 mx-4'>
      
      <div className = 'rounded-l-2xl flex flex-col items-center h-full w-1/6 relative text-gray-400 bg-gray-200'>
        <nav className = 'w-full mt-7 text-md flex flex-col items-center overflow-hidden pr-7'>
          <div className='text-xl black text-gray-600 border-gray-300 border-b-2 mb-6 pr-8'>Contents</div>
          <NavLink className = 'navlink' to = '/introduction'>Introduction</NavLink>
          <NavLink className = 'navlink' to = '/searching'>Searching</NavLink>
          <NavLink className = 'navlink' to = '/api'>API</NavLink>
          <NavLink className = 'navlink' to = '/documentation'>Documentation</NavLink>
          <NavLink className = 'navlink' to = '/contact'>Contact</NavLink>
        </nav>
      </div>
      <div className='w-2/4 overflow-hidden'>
        {/* <p className = 'text-gray-400 mt-6'>Some introduction text</p> */}
        <Outlet />
      </div>
      <div className = 'rounded-r-2xl h-full w-1/6 relative text-gray-400 bg-gray-200'>
        <ul className = 'mt-7 text-md flex flex-col items-center'>
          <li className = 'text-xl black text-gray-600 border-gray-300 border-b-2'>Suggested Articles</li>
        </ul>
      </div>
    </div>
  )
}

export default Home