import React from 'react'
import SplashNav from './splash/SplashNav'
import { StateType, AppDispatch } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'

function SearchResults() {

    const total = useSelector((state: StateType) => state.data.default.total)
    const count = useSelector((state: StateType) => state.data.default.count)

  return (
    <div className = 'w-screen h-screen text-white flex flex-col'>
        <SplashNav />
        <div className = 'absolute top-16 w-screen'>
            <div className = 'ml-10 text-4xl flex justify-start items-end font-bold border-b-2 pb-2 border-gray-800 tracking-wide'>
                <div className = 'font-bold text-4xl mr-2'>Search Results</div>
                <div className = 'text-xl text-gray-400'>{`(${10} - ${20} out of ${total})`}</div>
            </div>
        </div>
    </div>
  )
}

export default SearchResults