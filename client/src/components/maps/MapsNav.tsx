import React from 'react'
import { AiOutlineSearch, AiFillGithub } from 'react-icons/ai'
import { MdLocalBar, MdNavigateBefore } from 'react-icons/md'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { IoIosWine } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { FaWineBottle } from 'react-icons/fa'
import { StateType, AppDispatch } from '../../app/store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { GoLocation } from 'react-icons/go'
import { fetchData } from '../../features/data'
import { HiOutlineDocument} from 'react-icons/hi'
import { GiWineGlass } from 'react-icons/gi'
import Loading from '../Loading'
import {BiNavigation} from 'react-icons/bi'
import { LocationType } from '../maps/Maps'

type MapsNavProps = {
    selected: string
    searchParams: URLSearchParams
    datalist: LocationType
    setSelected: React.Dispatch<React.SetStateAction<string | undefined>>
}


function MapsNav(props: MapsNavProps) {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    let queryString = '?'
    props.searchParams.forEach((key, value) => {
        queryString += `${value}=${key}&`
    })
    const loading = useSelector((state: StateType) => (state.data.loading))
    
    React.useEffect(() => {
        if(props.datalist.states.includes(props.searchParams.get('place') as string) ||
        props.datalist.countries.includes(props.searchParams.get('place') as string)) dispatch(fetchData(queryString))
        props.setSelected(() => {
            let location = props.searchParams.get('place') as string
            if(props.datalist.countries.includes(location) || props.datalist.states.includes(location)) return location
            else return defaultText
        })
    }, [props.selected])

    const data = useSelector((state: StateType) => state.data.default)
    const [inputText, setInputText] = React.useState('')
    const defaultText = "Enter valid location"

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.setSelected(props.datalist.states.includes(inputText) || props.datalist.countries.includes(inputText)? inputText: defaultText)
        if(inputText != defaultText) navigate(`/maps?place=${inputText}`)
    }

  return (
    <div className='flex flex-col absolute rounded-tl-2xl rounded-bl-2xl right-0 top-0 shadow-md text-white shadow-gray-400 overflow-hidden bg-black w-2/6 h-nvh z-10'>
        <div className = 'pl-2 text-md flex justify-between items-center pt-2'>
            <div onClick = {() => { navigate('/') }} className = 'pt-1 flex items-center cursor-pointer'>
                <GiWineGlass className = '-rotate-45 ml-1' />
                <div className = 'ml-1 tracking-wide'>BeverageDB</div>
            </div>
            <a href='https://github.com/iLoveHanekawa/beverageDB' className = 'h-max' target = '__blank'>
                <AiFillGithub className = 'text-white text-2xl mr-1' />
            </a>
        </div>
        <div className = 'ml-1 pt-3 pb-6 mt-4 border-b-2 border-gray-800 flex items-center text-2xl'>
            <MdNavigateBefore onClick = {() => {
                navigate('/')
            }} className = 'hover:scale-125 transition duration-300 mr-1 text-5xl cursor-pointer' />
            <div className = 'flex flex-col justify-center'>
                <div className = 'font-bold'>Maps</div>
                <div className = 'text-gray-300 text-xs'>{props.selected === 'Enter valid location'? `Selected location: None`:`Find on Google Maps: `}{props.selected !== 'Enter valid location' && <a target={'_blank'} href={`https://www.google.com/maps/place/${props.selected}`} className = 'hover:underline items-center gap-1 text-cyan-500'>{props.selected}</a>}</div>
            </div>
        </div>
        <form onSubmit={ submitForm } className='mt-6 pl-5 border-gray-800 flex items-center'>
            
            <input list = 'states' placeholder='Location' value = {inputText} onChange = {(event) => {
                setInputText(event.target.value)
            }} type = 'text' className = {`focus:outline-none h-7 text-sm w-3/5 indent-4 rounded-full ml-1 text-gray-800`} />
            <button>    
                <AiOutlineSearch className = 'text-xl ml-2 hover:scale-125 transition duration-300'/>
            </button>
            <datalist id = 'states'>
                {props.datalist.countries.map((country, index) => <option value = {country} key = {index} />)}
                {props.datalist.states.map((state, index) => <option value = {state} key = {index} />)}
            </datalist>
        </form>
        {
            props.selected !== 'Enter valid location'? <div className = 'relative h-full'>   
                <div className = 'flex text-lg ml-6 border-b-2 py-6 border-gray-800 justify-start items-center'>
                    <IoIosWine className = 'text-3xl -rotate-45' />
                    <div className = 'flex flex-col justify-start'>
                        <div className = 'tracking-wide font-bold flex items-center gap-1 text-xl ml-1'>{`Beverages in`}<span className = 'text-red-500'>{props.selected}</span></div>
                        <div className = 'ml-5 text-xs text-gray-300'>{`Search results: ${data.data.length} hits`}</div>
                    </div>
                </div>
                {
                    loading? <div><Loading /></div>:
                    <ul className = 'flex flex-col absolute border-gray-800 w-full scrollbar-thin h-5/6 pt-2 scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 overflow-x-hidden overflow-y-scroll'>
                        {data.data.map((item, i) => <li onClick = {() => {
                                navigate(`/beverage/${item._id}`)
                            }} className = 'py-3 pl-6 hover:text-black transition duration-300 hover:bg-white cursor-pointer flex' key = {i}>
                            <div className = 'text-sm pl-2 flex items-center' ><HiOutlineDocument className='mr-2 text-lg' />{`${item.name}`}</div>
                        </li>)}
                    </ul>
                }
            </div>: <div className = 'pb-10 font-bold text-lg tracking-wide h-full flex justify-center items-center w-full'>Select a location first.</div>
        }

    </div>     
  )
}

export default MapsNav