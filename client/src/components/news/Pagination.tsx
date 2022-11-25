import React from 'react'
import {MdNavigateNext, MdNavigateBefore, MdLastPage, MdFirstPage} from 'react-icons/md'
import { useNavigate, createSearchParams } from 'react-router-dom'

type PaginationProps = {
    page: number
}

function Pagination(props: PaginationProps) {

    const navigate = useNavigate()
    const arr = []
    for(let i = props.page; i > 0 && i >= props.page - 3; i--) arr.push(i)
    arr.reverse()
    for(let i = props.page + 1; i < props.page + 4 && i <= 50; i++) arr.push(i)
    

    return (
        <div className = 'justify-center text-white items-center mb-10 flex w-full mt-10'>
            <MdFirstPage onClick = {() => {
                navigate({
                    pathname: '/news',
                    search: `?${createSearchParams({ 
                        page: '1'
                    })}`
                })
            }} className = 'text-4xl cursor-pointer'/>
            <MdNavigateBefore onClick = {() => {
                navigate({
                    pathname: '/news',
                    search: `?${createSearchParams({ 
                        page: `${Math.max(props.page - 1, 1)}`
                    })}`
                })
            }} className = 'text-white text-4xl cursor-pointer' />
            <ul className = 'flex'>{arr.map((num: number, i: number) => {
                return <li onClick = {() => {
                    navigate({
                        pathname: '/news',
                        search: `?${createSearchParams({ 
                            page: `${num}`
                        })}`
                    })
                }} key = {i} className = {`cursor-pointer text-sm mx-4 ${num === props.page? 'text-black bg-white px-2 rounded-md': ''}`}>{num}</li>
            })}</ul>
            <MdNavigateNext onClick = {() => {
                navigate({
                    pathname: '',
                    search: `?${createSearchParams({ 
                        page: `${Math.min(props.page + 1, 50)}`
                    })}`
                })
            }} className = 'text-4xl cursor-pointer'/>
            <MdLastPage onClick = {() => {
                navigate({
                    pathname: '',
                    search: `?${createSearchParams({ 
                        page: `50`
                    })}`
                })
            }} className = 'text-4xl cursor-pointer' />
        </div>
  )
}

export default Pagination