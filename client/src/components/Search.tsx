import React from 'react'
import { StateType, AppDispatch } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { fetchData } from '../features/data'

type AllQueryParamsType = [key: string, value: string][]

function Search() {

    const [searchParams, setSearchParams] = useSearchParams()
    const allQueryParams: AllQueryParamsType = []
    searchParams.forEach((key, value) => {
        allQueryParams.push([key, value])
    })

    let queryString = '?'
    allQueryParams.forEach(element => {
        queryString += `${element[1]}=${element[0]}&`
    });

    const dispatch: AppDispatch = useDispatch()
    const documents = useSelector((state: StateType) => { return state.data.default })
    const loading = useSelector((state: StateType) => (state.data.loading))
    React.useEffect(() => {
        dispatch(fetchData(allQueryParams))
    }, [queryString])

    console.log(documents)

  return (
    <div>
        {loading? <div>Loading...</div>: <div>
            {documents.data.map((i, index) => <li key = {index}>{i.name}</li>)}</div>}
    </div>
  )
}

export default Search
