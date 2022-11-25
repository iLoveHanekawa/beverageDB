import React from 'react'
import SplashNav from '../splash/SplashNav'
import StarterListItem from './StarterListItem'
import {AppDispatch, StateType} from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../features/Starter/starter'
import Loading from '../Loading'

function Starter() {

    const dispatch: AppDispatch = useDispatch()
    const starterArray = useSelector((state: StateType) => state.starter.default)
    React.useEffect(() => {
        dispatch(fetchData('https://beveragedb-production.up.railway.app/api/v1/starter')) 
    }, [])

    return (
    <div className = 'relative bg-black text-white w-screen h-screen overflow-x-hidden'>
        <SplashNav />
        <p className='text-white text-4xl absolute font-bold top-10 ml-10 my-10 border-b-2 pb-2 border-gray-800 w-full tracking-wide'>Starters</p>
        {starterArray.length === 0? <div className = 'absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2'><Loading /></div>:<ul className = 'grid grid-cols-6 absolute top-40 h-3/4 px-9 gap-3 w-full grid-rows-2'>
            {starterArray.map((starter, i) => {
                return <li className = 'h-full' key = {i}>
                    <StarterListItem _id = {starter._id} index = {i} name = {starter.name} description = {starter.description} />
                </li>
            })}
        </ul>}
    </div>
    )
}

export default Starter