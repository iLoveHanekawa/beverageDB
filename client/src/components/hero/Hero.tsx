import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { StateType, AppDispatch } from '../../app/store'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { textActions } from '../../features/searchText'
import HeroButton from './HeroButton'

function Hero() {

  const ptArray = ['Beverage name: eg. Sake',
    'Beverage starter culture: eg. Marcha',
    'Beverage ingredients: eg. Barley',
    'Beverage place: eg. India',
    'Beverage microorganism: eg. Saccharomyces',
    'Beverage alcohol content: eg. 40%'
  ]
  
  const urlParamKeys = ['name', 'starter', 'ingredients', 'place', 'microorganim', 'alcoholPercent']

  const searchText = useSelector((state: StateType) => state.text.default)
  const dispatch: AppDispatch = useDispatch()
  const [param, setParam] = React.useState(urlParamKeys[0])
  const [isBrowseOpen, setBrowseOpen] = useState(false)
  const [browseSelect, setBrowseSelect] = useState('Name')
  const [placeholderText, setPlaceHolderText] = useState(ptArray[0])
  const navigate = useNavigate()

  return (
    <div className = 'text-white z-10 w-full h-2/6 bg-black bg-opacity-70 text-sm relative flex-col rounded-b-2xl shadow-md shadow-gray-500'>
        <div className = { `absolute w-full h-full top-0 left-0 bg-[url('../src/images/hero.jpg')] rounded-b-2xl opacity-90 bg-cover mix-blend-overlay`}></div>
        <div className = { `w-full top-1/4 absolute pl-80`}>
            <h1 className='text-4xl font-bold'>BeverageDB</h1>
            <p className ='text-sm text-gray-200 mt-3'>An online resource for biological information on beverages</p>
            <div className='flex items-center mt-5'>
              <button onClick = {() => { setBrowseOpen(i => !i) }} className = 'bg-red-400 py-1 px-3 flex items-center rounded-tl-2xl'>
                <div className = 'ml-1 pl-2 w-32 transition'>{browseSelect}</div>
                <IoMdArrowDropdown className = {isBrowseOpen? 'openDropdownIcon': 'closeDropdownIcon'}/>
              </button>
              <form className = 'w-full flex items-center'>
                <input onChange = {(event) => { 
                  dispatch(textActions.setSearchText(event.target.value))
                  }} value = {searchText} placeholder={placeholderText} className = 'font-nunito w-2/6 py-1 focus:outline-none text-gray-600 indent-3' type = 'text' />
                <button onClick = {(event) => { 
                  event.preventDefault()
                  navigate({ pathname: '/data/search', search: `?${createSearchParams({ [param]: searchText })}`}) }
                } className = 'bg-red-400 w-32 py-1 px-4 rounded-r-full flex gap-1 items-center'>
                  <AiOutlineSearch className = 'text-xl' />Search
                </button>
              </form>
            </div>
            <ul className = {isBrowseOpen? 'openDropdown': 'closeDropdown'}>
              <HeroButton 
                  setBrowseSelect = { setBrowseSelect }
                  setBrowseOpen = { setBrowseOpen }
                  setPlaceHolderText = {setPlaceHolderText}
                  setParam = {setParam}
                  browseSelect = { browseSelect }
                  placeHolderValue = { ptArray[0] }
                  paramValue = { urlParamKeys[0] }
                  browseValue = {'Name'}
              />
              <HeroButton 
                  setBrowseSelect = { setBrowseSelect }
                  setBrowseOpen = { setBrowseOpen }
                  setPlaceHolderText = {setPlaceHolderText}
                  setParam = {setParam}
                  browseSelect = { browseSelect }
                  placeHolderValue = { ptArray[1] }
                  paramValue = { urlParamKeys[1] }
                  browseValue = {'Starter Culture'}
              />
              <HeroButton 
                  setBrowseSelect = { setBrowseSelect }
                  setBrowseOpen = { setBrowseOpen }
                  setPlaceHolderText = {setPlaceHolderText}
                  setParam = {setParam}
                  browseSelect = { browseSelect }
                  placeHolderValue = { ptArray[2] }
                  paramValue = { urlParamKeys[2] }
                  browseValue = {'Ingredients'}
              />
              <HeroButton 
                  setBrowseSelect = { setBrowseSelect }
                  setBrowseOpen = { setBrowseOpen }
                  setPlaceHolderText = {setPlaceHolderText}
                  setParam = {setParam}
                  browseSelect = { browseSelect }
                  placeHolderValue = { ptArray[3] }
                  paramValue = { urlParamKeys[3] }
                  browseValue = {'Place'}
              />
              <HeroButton 
                  setBrowseSelect = { setBrowseSelect }
                  setBrowseOpen = { setBrowseOpen }
                  setPlaceHolderText = {setPlaceHolderText}
                  setParam = {setParam}
                  browseSelect = { browseSelect }
                  placeHolderValue = { ptArray[4] }
                  paramValue = { urlParamKeys[4] }
                  browseValue = {'Microorganism'}
              />     
              <HeroButton 
                  setBrowseSelect = { setBrowseSelect }
                  setBrowseOpen = { setBrowseOpen }
                  setPlaceHolderText = {setPlaceHolderText}
                  setParam = {setParam}
                  browseSelect = { browseSelect }
                  placeHolderValue = { ptArray[5] }
                  paramValue = { urlParamKeys[5] }
                  browseValue = {'Alcohol Percent'}
              />     
            </ul>
        </div>
    </div>
  )
}

export default Hero