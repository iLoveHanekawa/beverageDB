import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='overflow-hidden justify-between flex h-1/2 my-4 mx-4'>
      <div className = 'rounded-l-2xl flex flex-col items-center h-full w-1/6 relative text-gray-400 bg-gray-200'>
        <ul className = 'mt-7 text-md flex flex-col items-start'>
          <div className='text-xl black text-gray-600 border-gray-300 border-b-2'>Contents</div>
          <li className = 'text-black scale-105 ml-4 mt-4 pt-3 pb-1'>Introduction</li>
          <li className = 'ml-4 py-1'>Searching</li>
          <li className = 'ml-4 py-1'>API</li>
          <li className = 'ml-4 py-1'>Documentation</li>
          <li className = 'ml-4 py-1'>Contact</li>
        </ul>
      </div>
      <div className='w-2/4 overflow-hidden'>
        <h1 className = 'text-4xl text-gray-500 pt-3 border-b-2'>Introduction</h1>
        <p className = 'text-gray-400 mt-6'>Some introduction text</p>
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