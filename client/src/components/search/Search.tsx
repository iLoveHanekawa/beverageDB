import React from 'react'
import SplashNav from '../splash/SplashNav'
import { useNavigate, createSearchParams } from 'react-router-dom'
import SearchItem from './SearchItem'

function Search() {
    const [formValues, setFormValues] = React.useState({
        name: '',
        starter: '',
        ingredients: '',
        place: '',
        microorganisms: '',
        minAC: '',
        maxAC: '',
        minFT: '',
        maxFT: ''
    })
    const navigate = useNavigate()
    const page = '1'
  return (
    <div className = 'text-white w-screen h-screen'>
        <SplashNav />
        <div className = 'absolute flex flex-col justify-start w-screen top-24'>
            <div className = 'ml-10 text-4xl font-bold border-b-2 pb-2 border-gray-800 tracking-wide'>Query Submission Form</div>
            <form onSubmit={e => {
                e.preventDefault()
                navigate({ pathname: '/beverages/search', search: `?${createSearchParams({...formValues, page: page})}` })
            }} className = 'flex flex-col w-2/4 self-center mt-10'>
                <div className='tracking-wide border-b-2 border-gray-800 pb-3 flex mb-10 justify-between text-xl font-bold'>
                    <div>PARAMETER</div>
                    <div>VALUE</div>
                </div>
                <SearchItem objKey = {'name'} text = {formValues.name} setText = {setFormValues} title = {'Name'} />
                <SearchItem objKey = {'starter'} text = {formValues.starter} setText = {setFormValues} title = {'Starter Culture'} />
                <SearchItem objKey = {'place'} text = {formValues.place} setText = {setFormValues} title = {'Place'} />
                <SearchItem objKey = {'ingredients'} text = {formValues.ingredients} setText = {setFormValues} title = {'Ingredients'} />
                <SearchItem objKey = {'microorganisms'} text = {formValues.microorganisms} setText = {setFormValues} title = {'Microorganisms'} />
                <SearchItem objKey = {'maxAC'} text = {formValues.maxAC} setText = {setFormValues} title = {'Max Alcohol Percent'} />
                <SearchItem objKey = {'minAC'} text = {formValues.minAC} setText = {setFormValues} title = {'Min Alcohol Percent'} />
                <SearchItem objKey = {'maxFT'} text = {formValues.maxFT} setText = {setFormValues} title = {'Max Fermentation Time'} />
                <SearchItem objKey = {'minFT'} text = {formValues.minFT} setText = {setFormValues} title = {'Min Fermentation Time'} />

                <button className = 'bg-red-300 h-16 rounded-md tracking-wide font-bold mt-10 hover:scale-105 hover:bg-red-400 duration-300 transition'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Search