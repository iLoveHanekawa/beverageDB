import React from 'react'
import {MdNavigateNext, MdNavigateBefore, MdLastPage, MdFirstPage} from 'react-icons/md'
import { useNavigate, createSearchParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StateType } from '../app/store'

function Pagination() {

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const page = Number(searchParams.get('page'))
    const total = useSelector((state: StateType) => state.data.default.total)
    const arr = []
    for(let i = page; i > 0 && i >= page - 3; i--) arr.push(i)
    arr.reverse()
    for(let i = page + 1; i < page + 4 && i <= Math.ceil(total / 15); i++) arr.push(i)
    
    const commonObj = { 
        name: searchParams.get('name') || '',
        alcoholContent: searchParams.get('alcoholContent') || '',
        ingredients: searchParams.get('ingredients') || '',
        starterCulture: searchParams.get('starterCulture') || '',
        microorganisms: searchParams.get('microorganisms') || '',
        place: searchParams.get('place') || ''
    }
    

    return (
        <div className = 'justify-center items-center mb-10 flex w-full mt-10'>
            <MdFirstPage onClick = {() => {
                navigate({
                    pathname: '',
                    search: `?${createSearchParams({ 
                        ...commonObj,
                        page: `${Math.ceil(1)}`
                    })}`
                })
            }} className = 'text-4xl cursor-pointer'/>
            <MdNavigateBefore onClick = {() => {
                navigate({
                    pathname: '',
                    search: `?${createSearchParams({ 
                        ...commonObj,
                        page: `${Math.max(page - 1, 1)}`
                    })}`
                })
            }} className = 'text-white text-4xl cursor-pointer' />
            <ul className = 'flex'>{arr.map((num: number, i: number) => {
                return <li onClick = {() => {
                    navigate({
                        pathname: '',
                        search: `?${createSearchParams({ 
                            ...commonObj,
                            page: `${num}`
                        })}`
                    })
                }} key = {i} className = {`cursor-pointer text-sm mx-4 ${num === page? 'text-black bg-white px-2 rounded-md': ''}`}>{num}</li>
            })}</ul>
            <MdNavigateNext onClick = {() => {
                navigate({
                    pathname: '',
                    search: `?${createSearchParams({ 
                        ...commonObj,
                        page: `${Math.min(page + 1, Math.ceil(total / 15))}`
                    })}`
                })
            }} className = 'text-4xl cursor-pointer'/>
            <MdLastPage onClick = {() => {
                navigate({
                    pathname: '',
                    search: `?${createSearchParams({ 
                        ...commonObj,
                        page: `${Math.ceil(total / 15)}`
                    })}`
                })
            }} className = 'text-4xl cursor-pointer' />
        </div>
  )
}

export default Pagination