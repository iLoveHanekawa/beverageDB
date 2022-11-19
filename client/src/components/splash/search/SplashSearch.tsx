import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { StateType, AppDispatch } from '../../../app/store'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { textActions } from '../../../features/searchText'
import SearchList from './SplashSearchList'
  
  const urlParamKeys = ['name', 'starter', 'ingredients', 'place', 'microorganim', 'alcoholPercent']

  function Search() {
    const searchText = useSelector((state: StateType) => state.text.default)
    const dispatch: AppDispatch = useDispatch()
    const [param, setParam] = React.useState(urlParamKeys[0])
    const [isBrowseOpen, setBrowseOpen] = useState(false)
    const [browseSelect, setBrowseSelect] = useState('Name')
    const navigate = useNavigate()
    return (
    <div className='text-white grid grid-cols-2 grid-rows-2 items-center'>
        <div className = 'row-span-2 col-span-1 flex-col'>
            <button onClick = {() => { setBrowseOpen(i => !i) }} className = 'py-1 w-full px-3 flex flex-col  items-center'>
                <div className = 'flex w-full justify-end'>
                    <div className = 'ml-1 pl-2 transition'>{browseSelect}</div>
                    <IoMdArrowDropdown className = {isBrowseOpen? 'openDropdownIcon': 'closeDropdownIcon'}/>
                </div>    
            </button>
            <SearchList setParam={setParam} isBrowseOpen = {isBrowseOpen} setBrowseOpen = {setBrowseOpen} browseSelect = {browseSelect} setBrowseSelect = {setBrowseSelect} />
        </div>
        <form className = 'col-span-1 row-span-2 flex self-start items-center'>
            <input onChange = {(event) => { 
                dispatch(textActions.setSearchText(event.target.value))
                }} value = {searchText} className = 'font-nunito py-1 focus:outline-none rounded-md text-gray-600 indent-3' type = 'text' />
            <button onClick = {(event) => { 
                event.preventDefault()
                navigate({ pathname: '/beverages/search', search: `?${createSearchParams({ [param]: searchText, page: '1' })}`}) }
            } className = 'py-1 px-4 rounded-r-full flex gap-1 items-center'>
                <AiOutlineSearch className = 'text-2xl rounded-tl-xl' />
            </button>
        </form>
    </div>
  )
}

export default Search