import React from 'react'
import GridItem from './GridItem'

function Grid() {
  return (
    <div className = 'text-white grid grid-cols-16 grid-rows-12'>
        <GridItem styling='bg-blue-300 row-span-10 col-span-8' />
        <GridItem styling = 'bg-green-300 row-span-2 col-span-8' />
        <GridItem styling = 'bg-yellow-300 row-span-4 col-span-4' />
        <GridItem styling = 'bg-red-300 row-span-4 col-span-4' />
        <GridItem styling = 'bg-pink-300 row-span-2 col-span-16' />
        <GridItem styling='bg-gray-300 row-span-10 col-span-8' />
        <GridItem styling = 'bg-teal-300 row-span-2 col-span-8' />
        <GridItem styling = 'bg-cyan-300 row-span-4 col-span-4' />
        <GridItem styling = 'bg-amber-300 row-span-4 col-span-4' />
        <GridItem styling = 'bg-rose-400 row-span-2 col-span-16' />
    </div>
  )
}

export default Grid