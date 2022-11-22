import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../app/store'
import { NewsType } from '../../features/news'

type GridItemProps = {
    styling: string
    data: NewsType
}

function GridItem(props: GridItemProps) {
    const [hover, setHover] = React.useState(false)
  const loading = useSelector((state: StateType) => state.news.loading)  
  return (
    <a onMouseEnter={() => setHover(true)} onMouseLeave = {() => setHover(false)} href = {`${props.data.web_url}`} className={`hover:scale-105 duration-500 transition rounded-lg relative overflow-hidden`}>
        {!loading && <div className='w-max h-max'>
            <img className={`object-fill duration-500 transition ${hover? 'brightness-50 scale-125': ''}`} src = {`https://www.nytimes.com/${props.data.multimedia[0].url}`} />
            <div className={`absolute bottom-0 text-lg duration-500 transition font-bold p-10 flex w-full justify-center ${hover? 'scale-110': ''}`}>{props.data.headline.main}</div>
        </div>}
    </a>
  )
}

export default GridItem
