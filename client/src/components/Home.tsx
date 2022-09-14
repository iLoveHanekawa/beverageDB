import React from 'react'

function Home() {
  return (
    <div className='overflow-hidden flex h-1/2 mt-4 ml-4'>
      <div className = 'rounded-2xl h-full w-1/6 relative text-gray-400 bg-gray-200'>
        <ul className = 'pl-12 mt-10 text-md flex flex-col items-start'>
          <li className = 'text-black scale-105'>Introduction</li>
          <li>Searching</li>
          <li>API</li>
          <li>Documentation</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='ml-20 w-3/4 overflow-hidden'>
        <h1 className = 'text-4xl text-gray-500 pt-3 border-b-2'>Introduction</h1>
        <p className = 'text-gray-400 mt-6'>Some introduction text</p>
      </div>
    </div>
  )
}

export default Home