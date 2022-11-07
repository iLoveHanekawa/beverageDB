import { data } from 'autoprefixer'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdLocalBar } from 'react-icons/md'
import { FaLocationArrow } from 'react-icons/fa'
import { TiLocationArrowOutline } from 'react-icons/ti'

type MapsNavProps = {
    selected: string
    datalist: string[]
    setSelected: React.Dispatch<React.SetStateAction<string | undefined>>
}

function MapsNav(props: MapsNavProps) {

    const [inputText, setInputText] = React.useState('')
    const [searchOpen, setSearchOpen] = React.useState(true)

  return (
    <div className = 'flex flex-col absolute right-0 top-5 shadow-md shadow-gray-400 overflow-hidden bg-white w-96 h-nvh z-10'>
        <div className = 'h-2/6 w-full bg-gray-800 absolute'>
            <form onSubmit={(event) => {
                event.preventDefault()
                props.setSelected(props.datalist.includes(inputText)? inputText: "Enter a valid state")
            }} className='rounded-full h-8 bg-white left-10 top-12 absolute'>
                <input list = 'states' value = {inputText} onChange = {(event) => {
                    setInputText(event.target.value)
                }} type = 'text' placeholder='State name; eg: Uttar Pradesh' className = {`rounded-full text-sm italic h-8 absolute top-0 left-0 focus:outline-none transition duration-300 origin-left indent-8 w-64 ${searchOpen? 'scale-x-100 opacity-100': 'scale-x-0 opacity-0'}`} />
                <button>    
                    <AiOutlineSearch className = 'absolute top-0 left-0 h-8 bg-white rounded-full p-1 text-gray-800 text-3xl '/>
                </button>
                <datalist id = 'states'>
                    {props.datalist.map((state, index) => <option value = {state} key = {index} />)}
                </datalist>
            </form>
            <div className = 'w-max absolute flex top-28 items-center justify-between left-12 text-white'>
                <TiLocationArrowOutline className = 'text-5xl' />
                <div className = 'flex flex-col ml-4 items-start'>
                    <div className = 'text-2xl'>{props.selected}</div>
                    <div className = 'ml-3 text-sm text-gray-500'>India</div>
                </div>
            </div>
        </div>
        <div className = 'flex items-center absolute top-64 text-xl text-gray-500 ml-4 border-b-2'>
            <MdLocalBar className = 'mr-2 text-4xl' />
            <div className = 'flex flex-col w-screen'>
                Local Beverages
                <div className = 'text-sm ml-4 text-gray-400'>in {props.selected === "Click on a state"? `"Please choose a state first"`: props.selected}</div>
            </div>
        </div>
    </div>
    
  )
}

export default MapsNav