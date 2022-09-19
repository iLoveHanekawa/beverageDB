import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate, createSearchParams } from 'react-router-dom'

function Hero() {

  const ptArray = ['Beverage name: eg. Sake',
    'Beverage starter culture: eg. Marcha',
    'Beverage ingredients: eg. Barley',
    'Beverage place: eg. India',
    'Beverage microorganism: eg. Saccharomyces',
    'Beverage alcohol content: eg. 40%'
  ]
  
  const urlParamKeys = ['name', 'starterCulture', 'ingredients', 'place', 'microorganim', 'alcoholPercent']

  const [searchText, setSearchText] = React.useState('')
  const [param, setParam] = React.useState(urlParamKeys[0])
  const [isBrowseOpen, setBrowseOpen] = useState(false)
  const [browseSelect, setBrowseSelect] = useState('Name')
  const [placeholderText, setPlaceHolderText] = useState(ptArray[0])
  const navigate = useNavigate()

  return (
    <div className = 'text-white z-10 w-full h-2/4 bg-black bg-opacity-70 relative flex-col rounded-b-3xl shadow-md shadow-gray-500'>
        <div className = { `absolute w-full h-full top-0 left-0 bg-[url('../src/images/hero.jpg')] rounded-b-3xl opacity-90 bg-cover mix-blend-overlay`}></div>
        <div className = { `w-full top-1/4 absolute pl-80`}>
            <h1 className='text-6xl font-bold'>BeverageDB</h1>
            <p className ='text-sm text-gray-200 mt-3'>An online resource for biological information on beverages</p>
            <div className='flex items-center mt-5'>
              <button onClick = {() => { setBrowseOpen(i => !i) }} className = 'bg-red-400 py-1 px-3 flex items-center rounded-tl-2xl'>
                <div className = 'ml-1 pl-2 w-32 transition'>{browseSelect}</div>
                <IoMdArrowDropdown className = {isBrowseOpen? 'openDropdownIcon': 'closeDropdownIcon'}/>
              </button>
              <form className = 'w-full flex items-center'>
                <input onChange = {(event) => { 
                  setSearchText(event.target.value) 
                  }} value = {searchText} placeholder={placeholderText} className = 'font-nunito w-3/6 py-1 focus:outline-none text-gray-600 indent-3' type = 'text' />
                <button onClick = {(event) => { 
                  event.preventDefault()
                  navigate({ pathname: '/data/search', search: `?${createSearchParams({ [param]: searchText })}`}) }
                } className = 'bg-red-400 w-32 py-1 px-4 rounded-r-full flex gap-1 items-center'>
                  <AiOutlineSearch className = 'text-xl' />Search
                </button>
              </form>
            </div>
            <ul className = {isBrowseOpen? 'openDropdown': 'closeDropdown'}>
              <button onClick = {() => {
                  setBrowseSelect('Name') 
                  setBrowseOpen(i => !i)
                  setPlaceHolderText(ptArray[0])
                  setParam(urlParamKeys[0])

                }} 
                className = {browseSelect === 'Name'? `selectedBrowse pt-1`: `notSelectedBrowse pt-1`}>Name</button>
              <button onClick = {() => {
                  setBrowseSelect('Starter Culture') 
                  setBrowseOpen(i => !i);
                  setPlaceHolderText(ptArray[1]) 
                  setParam(urlParamKeys[1])
                }} 
                className = {browseSelect === 'Starter Culture'? `selectedBrowse pt-1`: `notSelectedBrowse`}>Starter Culture</button>
              <button onClick = {() => {
                  setBrowseSelect('Ingredients') 
                  setBrowseOpen(i => !i)
                  setPlaceHolderText(ptArray[2])
                  setParam(urlParamKeys[2])

                }} 
                className = {browseSelect === 'Ingredients'? `selectedBrowse pt-1`: `notSelectedBrowse`}>Ingredients</button>
              <button onClick = {() => {
                  setBrowseSelect('Place') 
                  setBrowseOpen(i => !i) 
                  setPlaceHolderText(ptArray[3])
                  setParam(urlParamKeys[3])

                }} 
                className = {browseSelect === 'Place'? `selectedBrowse pt-1`: `notSelectedBrowse`}>Place</button>
              <button onClick = {() => {
                  setBrowseSelect('Microorganisms') 
                  setBrowseOpen(i => !i) 
                  setPlaceHolderText(ptArray[4])
                  setParam(urlParamKeys[4])
                }} 
                className = {browseSelect === 'Microorganisms'? `selectedBrowse pt-1`: `notSelectedBrowse`}>Microorganism</button>
              <button onClick = {() => {
                  setBrowseSelect('Alcohol Percent') 
                  setBrowseOpen(i => !i) 
                  setPlaceHolderText(ptArray[5])
                  setParam(urlParamKeys[5])
                }} 
                className = {browseSelect === 'Alcohol Percent'? `selectedBrowse pt-1`: `notSelectedBrowse`}>Alcohol Percent</button>
            </ul>
        </div>
    </div>
  )
}

export default Hero