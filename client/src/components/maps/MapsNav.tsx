import React from 'react'
import { AiOutlineSearch, AiFillGithub } from 'react-icons/ai'
import { MdLocalBar, MdNavigateBefore } from 'react-icons/md'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux'
import { StateType, AppDispatch } from '../../app/store'
import { useNavigate, useSearchParams } from 'react-router-dom'
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
    <div className='flex flex-col absolute right-0 top-0 shadow-md text-white shadow-gray-400 overflow-hidden bg-black w-96 h-nvh z-10'>
        <div className = 'pl-2 text-lg flex justify-between items-center pt-1'>
            <div onClick = {() => { navigate('/') }} className = 'flex items-center cursor-pointer'>
                <GiWineGlass />
                <div className = 'ml-1'>BeverageDB</div>
            </div>
            <a href='https://github.com/iLoveHanekawa/beverageDB' className = 'h-max' target = '__blank'>
                <AiFillGithub className = 'text-white text-2xl mr-1' />
            </a>
        </div>
        <div className = 'pb-2 mt-4 border-b-2 border-gray-800 flex items-center text-3xl'>
            <MdNavigateBefore onClick = {() => {
                navigate('/')
            }} className = 'hover:scale-125 transition duration-300 text-5xl cursor-pointer' />
            <div className = 'flex flex-col justify-center'>
                <div className = 'font-bold'>Maps</div>
                <div className = 'text-gray-300 text-sm'>{props.selected === 'Enter valid location'? `Selected location: None`:`Find on Google Maps: `}{props.selected !== 'Enter valid location' && <a target={'_blank'} href={`https://www.google.com/maps/place/${props.selected}`} className = 'hover:underline text-cyan-500'>{props.selected}</a>}</div>
            </div>
        </div>
        <form onSubmit={ submitForm } className='mt-5 pb-4 pl-3 border-b-2 border-gray-800 flex items-center'>
            <BiNavigation className = 'mr-4 tracking-wide text-2xl' />
            <input list = 'states' value = {inputText} onChange = {(event) => {
                setInputText(event.target.value)
            }} type = 'text' className = {`focus:outline-none h-7 text-sm w-3/5 indent-1 rounded-md text-gray-800`} />
            <button>    
                <AiOutlineSearch className = 'text-2xl ml-2 hover:scale-125 transition duration-300'/>
            </button>
            <datalist id = 'states'>
                {props.datalist.countries.map((country, index) => <option value = {country} key = {index} />)}
                {props.datalist.states.map((state, index) => <option value = {state} key = {index} />)}
            </datalist>
        </form>
        {
            props.selected !== 'Enter valid location'? <div>   
                <div className = 'flex flex-col text-lg ml-4 mt-3 border-b-2 border-gray-800 justify-center'>
                    <div className = 'tracking-wide font-bold text-2xl'>{`Beverages in `}<span className = 'text-red-500'>{props.selected}</span></div>
                    <div className = 'ml-3 text-sm text-gray-300'>{`Search results: ${data.data.length} hits`}</div>
                </div>
                {
                    loading? <div><Loading /></div>:
                    <ul className = 'flex flex-col border-2 border-gray-800 mt-5 mx-2 scrollbar-thin h-96 scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 overflow-x-hidden overflow-y-scroll'>
                        {data.data.map((item, i) => <li className = 'py-2 pl-2 hover:text-black transition duration-300 hover:bg-white cursor-pointer' key = {i}>
                            <div className = '' onClick = {() => {
                                navigate(`/beverage/${item._id}`)
                            }}>{`${item.name}`}</div>
                        </li>)}
                    </ul>
                }
            </div>: <div className = 'mt-3 font-bold text-lg tracking-wide self-center'>Select a location first.</div>
        }

    </div>     
  )
}

export default MapsNav