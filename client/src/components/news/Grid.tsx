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
          <div className = 'grid h-full gap-4 grid-cols-3 w-screen grid-rows-2 mb-4 px-2'>
              <GridItem data = { data[0] }/>
              <GridItem data = { data[1] }/>
              <GridItem data = { data[2] }/>
              <GridItem data = { data[3] }/>
              <GridItem  data = { data[4] }/>
              <GridItem data = { data[5] }/>
          </div>
          <div className = 'h-full w-screen gap-4 grid grid-cols-3 grid-rows-1 mb-4 px-2'>
              <GridItem data = { data[6] }/>
              <GridItem data = { data[7] }/>
              <GridItem data = { data[8] }/>
          </div>
      </div>}
    </div>
  )
}

export default Grid