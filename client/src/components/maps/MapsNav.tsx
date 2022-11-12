import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdLocalBar } from 'react-icons/md'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux'
import { StateType, AppDispatch } from '../../app/store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { fetchData } from '../../features/data'
import { HiOutlineDocument} from 'react-icons/hi'
import Loading from '../Loading'

type MapsNavProps = {
    selected: string
    searchParams: URLSearchParams
    datalist: string[]
    setSelected: React.Dispatch<React.SetStateAction<string | undefined>>
}

type AllQueryParamsType = [key: string, value: string][]

function MapsNav(props: MapsNavProps) {

    const dispatch: AppDispatch = useDispatch()
    const allQueryParams: AllQueryParamsType = []
    const navigate = useNavigate()
    let queryString = '?'
    props.searchParams.forEach((key, value) => {
        queryString += `${value}=${key}&`
        allQueryParams.push([key, value])
    })
    const loading = useSelector((state: StateType) => (state.data.loading))
    
    React.useEffect(() => {
        if(props.datalist.includes(props.searchParams.get('place') as string)) dispatch(fetchData(allQueryParams))
        props.setSelected(() => {
            let state = props.searchParams.get('place') as string
            if(props.datalist.includes(state)) return state
            else return defaultText
        })
    }, [props.selected])

    const data = useSelector((state: StateType) => state.data.default)
    const [inputText, setInputText] = React.useState('')
    const defaultText = "Enter a valid state"

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.setSelected(props.datalist.includes(inputText)? inputText: defaultText)
        if(inputText != defaultText) navigate(`/maps?place=${inputText}`)
    }

  return (
    <div className = 'flex flex-col absolute right-0 top-5 shadow-md shadow-gray-400 overflow-hidden bg-white w-96 h-nvh z-10'>
        <div className = 'h-2/6 w-full bg-gray-800 '>
            <form onSubmit={ submitForm } className='rounded-full h-8 bg-white left-10 top-12 absolute'>
                <input list = 'states' value = {inputText} onChange = {(event) => {
                    setInputText(event.target.value)
                }} type = 'text' placeholder='State name; eg: Uttar Pradesh' className = {`rounded-full text-sm italic h-8 absolute top-0 left-0 focus:outline-none transition duration-300 origin-left indent-9 w-64`} />
                <button>    
                    <AiOutlineSearch className = 'hover:bg-gray-800 hover:text-white transition duration-300 absolute top-0 left-0 h-8 bg-white rounded-full p-1 text-gray-800 text-3xl '/>
                </button>
                <datalist id = 'states'>
                    {props.datalist.map((state, index) => <option value = {state} key = {index} />)}
                </datalist>
            </form>
            <div className = 'w-max flex mt-28 items-center justify-between ml-12 text-white'>
                <TiLocationArrowOutline className = 'text-5xl' />
                <div className = 'flex flex-col ml-4 items-start'>
                    <div className = 'text-2xl'>{props.selected}</div>
                    <div className = 'ml-3 text-sm text-gray-500'>India</div>
                </div>
            </div>
        </div>
        <div className = 'flex justify-center items-center mt-5 text-xl text-gray-500 ml-6 border-b-2'>
            <MdLocalBar className = 'w-44 mr-3 text-4xl' />
            <div className = 'flex flex-col w-screen'>
                Local Beverages
                <div className = 'text-sm ml-4 text-gray-400'>in {props.selected === "Click on a state"? `"Please choose a state first"`: props.selected}</div>
            </div>
        </div>
        {loading? <Loading />: <div className = 'overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-md overflow-scroll mt-1 ml-5'>
            {data.data.map((item, i) => <li className = 'list-none border-b-2 mt-2 border-gray-100 text-gray-400' key = {i}>
            <div className = 'hover:underline cursor-pointer text-md pb-1 flex gap-2 justify-start items-center' onClick = {() => {
                navigate(`/data/${item._id}`)
            }}><HiOutlineDocument className = 'text-md' />{`${item.name}`}</div>
                </li>)}
        </div>}
    </div>
    
  )
}

export default MapsNav