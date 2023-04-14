import React from 'react'
import SplashNav from './splash/SplashNav'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { StateType, AppDispatch } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../features/data'
import Loading from '../components/Loading'
import Pagination from './Pagination'


function SearchResults() {

    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page'))
    const [searchText, setSearchText] = React.useState('')
    let queryString = '?'
    searchParams.forEach((key, value) => {
        queryString += `${value}=${key}&`
    })
    
    const total = useSelector((state: StateType) => state.data.default.total)
    const documents = useSelector((state: StateType) => { return state.data.default })
    const loading = useSelector((state: StateType) => { return state.data.loading })
    console.log(documents.data)    
    React.useEffect(() => {
        dispatch(fetchData(queryString))
        setSearchText(prev => {
            let str = ''
            searchParams.forEach((value, key) => {
                if(value != '') {
                    str += ` ${key} = ${value},`
                }
            })
            str = str.slice(0, -1)
            return str
        })    
    }, [queryString])

    return (
        <div className = 'w-screen relative overflow-x-hidden h-screen scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 text-white flex flex-col'>
            <SplashNav />
            <div className = 'absolute top-20 w-screen'>
                <div className = 'pl-10 text-4xl flex flex-col justify-start items-start border-b-2 pb-2 border-gray-800 tracking-wide'>
                    <div className='flex justify-start items-end'>
                        <div className = 'font-bold text-4xl mr-2'>Search Results</div>
                        <div className = 'text-xl text-gray-400'>{`(${15 * (page - 1) + 1} - ${Math.min(total, (page - 1) * 15 + 15)} out of ${total})`}</div>
                    </div>
                    <div className = 'pl-6 pt-1 text-gray-400 text-sm'>{`For search query: { ${searchText} }`}</div>
                    <div className = 'z-20 pl-6 text-gray-400 text-sm'>Need more specific search results?<Link className = 'ml-1 text-red-400 hover:underline tracking-wide' to = '/search'>Search Here</Link></div>
                </div>
                {
                    loading? <Loading />:
                    <div className = 'flex flex-col justify-center items-start w-screen'>
                        <ul className='grid grid-cols-3 border-b-2 w-screen px-20 py-12 border-gray-800 grid-rows-11 overflow-y-scroll scrollbar-thin scrollbar-track-rounded-full'>
                            <li className = 'border-gray-800 font-bold tracking-wider text-3xl grid row-span-1 col-span-3 grid-rows-1 grid-cols-3'>
                                <div className='border-r-2 border-t-2 border-b border-l-2 py-2 border-gray-800 pl-4'>NAME</div>
                                <div className='border-r-2 border-t-2 border-b-2 py-2 border-gray-800 pl-4'>PLACE</div>
                                <div className='border-r-2 border-t-2 border-b-2 py-2 border-gray-800 pl-4'>ID</div>
                            </li>
                            {documents.data.map((i, index) => <li onClick = {() => {
                                navigate(`/beverage/${i._id}`)
                            }} key = {index} className = {`hover:text-black items-center transition duration-300 hover:bg-white grid cursor-pointer grid-rows-1 grid-cols-3 row-span-1 col-span-3 ${index === documents.data.length - 1? 'border-b-2 border-gray-800': ''}`}>
                                <div className = 'border-r-2 py-2 h-full border-l-2 border-gray-800 pl-4'>{i.name}</div>
                                <div className = 'border-r-2 py-2 h-full border-gray-800 ml-4'>{i.place}</div>
                                <div className = 'border-r-2 py-2 h-full border-gray-800 ml-4'>{i._id}</div>
                            </li>)}
                        </ul>
                        <Pagination />
                    </div>
                }
            </div>
        </div>
  )
}

export default SearchResults