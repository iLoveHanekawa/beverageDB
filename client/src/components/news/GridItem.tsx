import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../app/store'
import { NewsType } from '../../features/news'
import img from '../../images/nyt.svg'
import { HiOutlineNewspaper } from 'react-icons/hi'

type GridItemProps = {
    data: NewsType
}

function GridItem(props: GridItemProps) {
    const [hover, setHover] = React.useState(false)
    const loading = useSelector((state: StateType) => state.news.loading)  
    return (
    <div className='hover:scale-105 duration-500 transition rounded-lg relative overflow-hidden' onMouseEnter={() => setHover(true)} onMouseLeave = {() => setHover(false)} >
        {!loading && <a target = {'_blank'} href = {`${props.data.webUrl}`} className={``}>
            {!loading && <div className='w-max h-max relative'>
                <img className={`object-fill duration-500 transition ${hover? 'brightness-25 scale-125': 'brightness-75'}`} src = {`${props.data.fields.thumbnail}`} />
                <div className={`absolute bottom-0 text-md duration-500 transition font-bold pb-5 px-16 flex w-full justify-center ${hover? 'scale-75 opacity-0': ''}`}>{props.data.webTitle}</div>
                <div className = {`absolute bottom-0 text-xs pb-10 duration-500 transition font-bold px-16 flex w-full justify-center ${hover? 'scale-110 opacity-100': 'scale-75 opacity-0'}`}>{props.data.fields.trailText}</div>
                <div className = {`absolute top-0 text-2xl duration-500 transition font-bold p-10 flex w-full gap-1 ml-2 items-center justify-start ${hover? 'scale-110 opacity-100': 'scale-75 opacity-0'}`}><HiOutlineNewspaper />Open article</div>
            </div>}
        </a>}
    </div>
  )
}

export default GridItem
