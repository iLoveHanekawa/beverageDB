import React from 'react'
import SplashNav from '../splash/SplashNav'
import { StateType, AppDispatch } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom'
import { fetchData } from '../../features/data'
import SearchItem from './SearchItem'

type AllQueryParamsType = [key: string, value: string][]

function Search() {
    const [formValues, setFormValues] = React.useState({
        name: '',
        starterCulture: '',
        ingredients: '',
        place: '',
        microorganisms: '',
        alcoholPercent: '',
    })
    const [page, setPage] = React.useState('1')
    const [searchParams, setSearchParams] = useSearchParams()
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
    React.useEffect(() => {
        dispatch(fetchData(allQueryParams))
    }, [queryString])

  return (
    <div className = 'text-white w-screen h-screen'>
        <SplashNav />
        <div className = 'absolute flex flex-col justify-start w-screen top-24'>
            <div className = 'ml-10 text-4xl font-bold border-b-2 pb-2 border-gray-800 tracking-wide'>Query Submission Form</div>
            <form onSubmit={e => {
                e.preventDefault()
                navigate({ pathname: '/beverages/search', search: `?${createSearchParams({...formValues, page: page})}` })
            }} className = 'flex flex-col w-1/3 self-center mt-10'>
                <div className='tracking-wide border-b-2 border-gray-800 pb-3 flex mb-10 justify-between text-xl font-bold'>
                    <div>PARAMETER</div>
                    <div>VALUE</div>
                </div>
                <SearchItem objKey = {'name'} text = {formValues.name} setText = {setFormValues} title = {'Name'} />
                <SearchItem objKey = {'starterCulture'} text = {formValues.starterCulture} setText = {setFormValues} title = {'Starter Culture'} />
                <SearchItem objKey = {'place'} text = {formValues.place} setText = {setFormValues} title = {'Place'} />
                <SearchItem objKey = {'ingredients'} text = {formValues.ingredients} setText = {setFormValues} title = {'Ingredients'} />
                <SearchItem objKey = {'microorganisms'} text = {formValues.microorganisms} setText = {setFormValues} title = {'Microorganisms'} />
                <SearchItem objKey = {'alcoholPercent'} text = {formValues.alcoholPercent} setText = {setFormValues} title = {'Alcohol Percent'} />
                <button className = 'bg-red-300 h-16 rounded-md tracking-wide font-bold mt-10 hover:scale-105 hover:bg-red-400 duration-300 transition'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Search