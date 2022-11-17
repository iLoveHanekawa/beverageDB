import React from "react";
import { SiElement } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import { colors } from './colors'

type StarterItemProps = {
    _id: number
    index: number
    name: string
    description: string
}


export default function StarterListItem(props: StarterItemProps) {

    const navigate = useNavigate()
    const [isHovering, setIsHovering] = React.useState(false)

    return <div onClick = {() => {
        navigate(`/starter/${props._id}?index=${props.index}`)
    }} onMouseEnter={() => { setIsHovering(true) }}
        onMouseLeave = {() => { setIsHovering(false)}} className = {`${colors[props.index]} ${isHovering? 'scale-105': ''} relative cursor-pointer h-full rounded-md duration-300 transition`}>
        <div className = {`font-bold pl-16 duration-300 transition pt-7 ${isHovering? 'scale-125': 'scale-90'}`}>{props.name}</div>
        <SiElement className = {`absolute top-1/2 left-1/2 text-6xl -translate-x-1/2 -translate-y-1/2 ${isHovering? 'rotate-180 scale-150 opacity-40': ''} duration-300 transition`} />
    </div>
}