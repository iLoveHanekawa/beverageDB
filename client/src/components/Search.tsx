import React from 'react'
import { StateType, AppDispatch } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { fetchData } from '../features/data'

type AllQueryParamsType = [key: string, value: string][]

function Search() {

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

    console.log(documents)

  return (
    <div className = 'w-full flex flex-col border-gray-300 h-fit items-center mt-1'>
        <div className = 'self-start text-4xl text-gray-400 ml-8 mt-4'>{`Search results(${count})`}</div>
        <div className = 'self-start text-xl text-gray-300 ml-8 mt-2 border-b-2 border-gray-300 w-full'>{`For: ${searchText}`}</div>
        {count > 0? <div className = 'border-t border-l border-r mt-8 w-nvw border-gray-300 shadow-gray-300 shadow-md bg-gray-200 rounded-md px-4 mb-10'>
            {loading? <div>Loading...</div>: <div>
                {documents.data.map((i, index) => <li className = 'border-b-2 cursor-pointer hover:underline border-gray-100 list-none text-gray-500 py-2 ml-3' onClick = {() => {
                    navigate(`/data/${i._id}`)
                }} key = {index}>{i._id}</li>)}</div>}
        </div>: <div className='self-start ml-8 mt-2 text-gray-400 text-lg'>{`Sorry no results found for "${searchText}"`}</div>}
    </div>
  )
}

export default Search
