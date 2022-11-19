import React from 'react'
import SplashNav from './splash/SplashNav'
import { createSearchParams, useParams, Link, useNavigate, useSearchParams } from 'react-router-dom'
import { StateType, AppDispatch } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../features/data'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import Loading from '../components/Loading'

type AllQueryParamsType = [key: string, value: string][]

function SearchResults() {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
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

    const arr = []
    for(let i = 1; i <= Math.ceil(total / 10); i++) arr.push(i)
    
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
                        <div className = 'text-xl text-gray-400'>{`(${10 * (page - 1)} - ${Math.min(total, (page - 1) * 10 + 10)} out of ${total})`}</div>
                    </div>
                    <div className = 'pl-6 text-gray-400 text-sm'>{`For search query: { ${searchText} }`}</div>
                    <div className = 'z-20 pl-6 text-gray-400 text-sm'>Need more specific search results?<Link className = 'ml-1 text-red-400 hover:underline tracking-wide' to = '/search'>Search Here</Link></div>
                </div>
                {
                    loading? <Loading />:
                    <div className = 'flex flex-col justify-center items-start'>
                        <ul className='grid pl-16 grid-cols-3 border-b-2 border-gray-800 grid-rows-11 w-11/12 mt-10 overflow-y-scroll scrollbar-thin scrollbar-track-rounded-full h-1/4'>
                            <li className = 'border-b-2 border-gray-800 font-bold tracking-wider mb-5 text-3xl w-10/12 grid row-span-1 col-span-3 grid-rows-1 grid-cols-3'>
                                <div>NAME</div>
                                <div>PLACE</div>
                                <div>ID</div>
                            </li>
                            {documents.data.map((i, index) => <li key = {index} className = 'hover:text-black pl-3 w-10/12 hover:scale-110 rounded-full items-center transition duration-300 hover:bg-white h-12 grid cursor-pointer grid-rows-1 grid-cols-3 row-span-1 col-span-3'>
                                <div>{i.name}</div>
                                <div>{i.place}</div>
                                <div>{i._id}</div>
                            </li>)}
                        </ul>
                        <div className = 'justify-start items-center ml-10 mb-10 flex w-full mt-10'>
                            <MdNavigateBefore onClick = {() => {
                                navigate({
                                    pathname: '',
                                    search: `?${createSearchParams({ 
                                        page: `${Math.max(page - 1, 1)}`,
                                        name: searchParams.get('name') || '',
                                        alcoholPercent: searchParams.get('alcoholPercent') || '',
                                        ingredients: searchParams.get('ingredients') || '',
                                        starterCulture: searchParams.get('starterCulture') || '',
                                        microorganisms: searchParams.get('microorganisms') || ''
                                    })}`
                                })
                            }} className = 'text-white text-3xl cursor-pointer' />
                            <ul className = 'flex'>{arr.map((num: number, i: number) => {
                                return <li onClick = {() => {
                                    navigate({
                                        pathname: '',
                                        search: `?${createSearchParams({ 
                                            page: `${num}`,
                                            name: searchParams.get('name') || '',
                                            alcoholPercent: searchParams.get('alcoholPercent') || '',
                                            ingredients: searchParams.get('ingredients') || '',
                                            starterCulture: searchParams.get('starterCulture') || '',
                                            microorganisms: searchParams.get('microorganisms') || ''
                                        })}`
                                    })
                                }} key = {i} className = {`cursor-pointer mx-4 ${num === page? 'text-black bg-white px-2 rounded-md': ''}`}>{num}</li>
                            })}</ul>
                            <MdNavigateNext onClick = {() => {
                                navigate({
                                    pathname: '',
                                    search: `?${createSearchParams({ 
                                        page: `${Math.min(page + 1, Math.ceil(total / 10))}`,
                                        name: searchParams.get('name') || '',
                                        alcoholPercent: searchParams.get('alcoholPercent') || '',
                                        ingredients: searchParams.get('ingredients') || '',
                                        starterCulture: searchParams.get('starterCulture') || '',
                                        microorganisms: searchParams.get('microorganisms') || ''
                                    })}`
                                })
                            }} className = 'text-3xl'/>
                        </div>
                    </div>
                }
            </div>
        </div>
  )
}

export default SearchResults