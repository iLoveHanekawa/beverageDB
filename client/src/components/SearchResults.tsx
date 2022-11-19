import React from 'react'
import { StateType, AppDispatch } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { fetchData } from '../features/data'
import { HiOutlineDocument} from 'react-icons/hi'
import Loading from './Loading'
import SplashNav from './splash/SplashNav'

type AllQueryParamsType = [key: string, value: string][]

function Search() {
    const [page, setPage] = React.useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchText = useSelector((state: StateType) => state.text.default)
    const allQueryParams: AllQueryParamsType = []
    searchParams.forEach((key, value) => {
        allQueryParams.push([key, value])
    })

    const navigate = useNavigate()

    let queryString = '?'
    allQueryParams.forEach(element => {
        queryString += `${element[1]}=${element[0]}&`
    });

    const dispatch: AppDispatch = useDispatch()
    const documents = useSelector((state: StateType) => { return state.data.default })
    const count = useSelector((state: StateType) => { return state.data.default.count})
    const loading = useSelector((state: StateType) => (state.data.loading))
    React.useEffect(() => {
        dispatch(fetchData(allQueryParams))
    }, [queryString])


  return (
    <div className = 'w-full text-white flex flex-col border-gray-300 h-fit items-center overflow-hidden'>
        <SplashNav />
        <div className = 'absolute top-10  left-0 self-start text-4xl  ml-8 mt-4'>{`Search results(${count})`}</div>
        <div className = 'self-start text-md  tracking-wider absolute top-20 left-10 border-gray-200 w-full'>{`For: ${searchText}`}</div>
        {loading? <Loading />: 
            count > 0? 
            <div className = 'absolute top-32 border-t border-l border-r mt-8 w-nvw border-gray-300 shadow-gray-300 shadow-md rounded-md px-4 mb-10'>
                <div>{documents.data.map((i, index) => 
                    <li className = 'border-b-2 cursor-pointer border-gray-100 list-none  py-4 ml-3' onClick = {() => {
                        navigate(`/beverage/${i._id}`)
                    }} key = {index}>
                        <div className = 'hover:underline text-md pb-1 flex gap-5 justify-start items-center'><HiOutlineDocument className = 'text-md' />{`${i.name}`}</div>
                        <div className = 'cursor-default ml-3 text-sm '>{`ID: ${i._id}`}</div>
                    </li>)}
                </div>
            </div>:
            <div className='self-start ml-10 mt-2 pb-2  text-lg'>{`Sorry no results found for "${searchText}"`}</div>
        }
    </div>
  )
}

export default Search
