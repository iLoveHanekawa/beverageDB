import React from 'react'
import GridItem from './GridItem'
import Loading from '../Loading';
import { StateType } from '../../app/store'
import { useSelector } from 'react-redux';

function Grid() {

  const data = useSelector((state: StateType) => state.news.default.data)
  const loading = useSelector((state: StateType) => state.news.loading)

  return (
    <div className = 'text-white w-screen h-full flex justify-center items-center'>
      {loading? <div><Loading /></div>:<div className = 'h-full flex flex-col justify-center items-center w-screen'>
          <div className = 'grid h-screen gap-4 grid-cols-3 w-screen grid-rows-2 mb-4 px-2'>
              <GridItem styling='bg-blue-300 row-span-1 col-span-1' data = { data[0] }/>
              <GridItem styling = 'bg-green-300 row-span-1 col-span-1' data = { data[1] }/>
              <GridItem styling = 'bg-yellow-300 row-span-1 col-span-1' data = { data[2] }/>
              <GridItem styling = 'bg-red-300 row-span-1 col-span-1' data = { data[3] }/>
              <GridItem styling = 'bg-pink-300 row-span-1 col-span-1' data = { data[4] }/>
              <GridItem styling='bg-blue-300 row-span-1 col-span-1' data = { data[5] }/>
          </div>
          <div className = 'h-hvh w-screen gap-4 grid grid-cols-3 grid-rows-1 mb-4 px-2'>
              <GridItem styling = 'bg-green-300 row-span-1 col-span-1' data = { data[6] }/>
              <GridItem styling = 'bg-yellow-300 row-span-1 col-span-1' data = { data[7] }/>
              <GridItem styling = 'bg-red-300 row-span-1 col-span-1' data = { data[8] }/>
          </div>
      </div>}
    </div>
  )
}

export default Grid