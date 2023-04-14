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
        tribes: '',
        districts: '',
        weather: '',
        minAC: '',
        maxAC: '',
        minFT: '',
        maxFT: '',
        minRainfall: '',
        maxRainfall: '',
        minHumidity: '',
        maxHumidity: ''
    })
    const navigate = useNavigate()
    const page = '1'
  return (
    <div className = 'text-white w-screen h-screen overflow-y-scroll'>
        <SplashNav />
        <div className = 'absolute flex flex-col justify-start w-screen  bg-black top-24'>
            <div className = 'ml-10 text-4xl font-bold border-b-2 pb-2  border-gray-800 tracking-wide'>Query Submission Form</div>
            <form onSubmit={e => {
                e.preventDefault()
                navigate({ pathname: '/beverages/search', search: `?${createSearchParams({...formValues, page: page})}` })
            }} className = 'flex flex-col w-2/4 self-center mt-10 '>
                <div className='tracking-wide border-b-2 border-gray-800  pb-3 flex mb-10 justify-between text-xl font-bold'>
                    <div>PARAMETER</div>
                    <div>VALUE</div>
                </div>
                <SearchItem objKey = {'name'} text = {formValues.name} setText = {setFormValues} title = {'Name'} />
                <SearchItem objKey = {'starter'} text = {formValues.starter} setText = {setFormValues} title = {'Starter Culture'} />
                <SearchItem objKey = {'place'} text = {formValues.place} setText = {setFormValues} title = {'Place'} />
                <SearchItem objKey = {'ingredients'} text = {formValues.ingredients} setText = {setFormValues} title = {'Ingredients'} />
                <SearchItem objKey = {'microorganisms'} text = {formValues.microorganisms} setText = {setFormValues} title = {'Microorganisms'} />

                <SearchItem objKey = {'tribes'} text = {formValues.tribes} setText = {setFormValues} title = {'Tribes'} />
                <SearchItem objKey = {'districts'} text = {formValues.districts} setText = {setFormValues} title = {'Districts'} />
                <SearchItem objKey = {'weather'} text = {formValues.weather} setText = {setFormValues} title = {'Weather'} />


                <SearchItem objKey = {'maxAC'} text = {formValues.maxAC} setText = {setFormValues} title = {'Max Alcohol Percent'} />
                <SearchItem objKey = {'minAC'} text = {formValues.minAC} setText = {setFormValues} title = {'Min Alcohol Percent'} />
                <SearchItem objKey = {'maxFT'} text = {formValues.maxFT} setText = {setFormValues} title = {'Max Fermentation Time'} />
                <SearchItem objKey = {'minFT'} text = {formValues.minFT} setText = {setFormValues} title = {'Min Fermentation Time'} />

                <SearchItem objKey = {'minRainfall'} text = {formValues.minRainfall} setText = {setFormValues} title = {'Min Rainfall'} />
                <SearchItem objKey = {'maxRainfall'} text = {formValues.maxRainfall} setText = {setFormValues} title = {'Max Rainfall'} />
                <SearchItem objKey = {'minHumidity'} text = {formValues.minHumidity} setText = {setFormValues} title = {'Min Humidity'} />
                <SearchItem objKey = {'maxHumidity'} text = {formValues.maxHumidity} setText = {setFormValues} title = {'Max Humidity'} />


                <button className = 'bg-red-300 mb-5 h-16 rounded-md tracking-wide font-bold mt-10 hover:scale-105 hover:bg-red-400 duration-300 transition'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Search