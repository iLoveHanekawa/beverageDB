import React from 'react'
import { IconType } from 'react-icons'
import { createSearchParams, useNavigate } from 'react-router-dom'

type GridItemProps = {
    color: string
    Icon: IconType
    IconArt: IconType
    itemTitle: string
    route: string
}

function GridItem(props: GridItemProps) {

    const navigate = useNavigate()
    const [isHovering, setIsHovering] = React.useState(false)

  return (
    <div className = 'row-span-1 col-span-1 shadow-inner'>
        <div className = 'grid grid-rows-5 grid-cols-1 h-full'>
            <div className = 'text-gray-300 row-span-1 text-sm'>Some information about this section. More information about this section. Even more information about this section.</div>
            <div className = {`${props.color} transform relative hover:scale-105 duration-300 row-span-4 rounded-lg`}>
                <div onClick = {() => {
                    navigate({pathname: props.route, search: `?${createSearchParams(props.route === '/news'? {
                        page: '1'
                    }: {})}`})
                }} onMouseEnter={() => {
                    setIsHovering(true)
                }} onMouseLeave = {() => {
                    setIsHovering(false)
                }} className = ' grid grid-rows-5 grid-cols-1 justify-center text-white pt-8 gap-4'>
                    <div className = {`${isHovering? 'opacity-100 scale-100': 'opacity-0 scale-90'} transform duration-300 pl-8 pt-5 flex items-center gap-3 row-span-1`}>
                        
                        <div className = 'font-bold text-3xl'>{props.itemTitle}</div>
                    </div>
                    <div className = 'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                        <props.IconArt className={`transform duration-300 text-white ${isHovering? 'text-8xl opacity-40': 'text-7xl'} ${(props.itemTitle === 'Starters' || props.itemTitle === 'Search')? ``: `-rotate-45`}`} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GridItem