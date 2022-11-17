import React from "react";
import { SiElement } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

type StarterItemProps = {
    index: number
    name: string
    description: string
}

const colors = ["bg-cyan-300 hover:bg-cyan-300",
"bg-green-300 hover:bg-green-300",
"bg-blue-300 hover:bg-blue-300",
"bg-orange-300 hover:bg-orange-300",
"bg-gray-300 hover:bg-gray-300",
"bg-pink-300 hover:bg-pink-300",
"bg-teal-300 hover:bg-teal-300",
"bg-yellow-300 hover:bg-yellow-300",
"bg-red-300 hover:bg-red-300",
"bg-amber-300 hover:bg-amber-300",
"bg-emerald-300 hover:bg-emerald-300",
"bg-purple-300 hover:bg-purple-300"
]

export default function StarterListItem(props: StarterItemProps) {

    const navigate = useNavigate()
    const [isHovering, setIsHovering] = React.useState(false)

    return <div onClick = {() => {
        navigate(`/starters/${props.name}`)
    }} onMouseEnter={() => { setIsHovering(true) }}
        onMouseLeave = {() => { setIsHovering(false)}} className = {`${colors[props.index]} ${isHovering? 'scale-105': ''} relative h-full rounded-md duration-300 transition`}>
        <div className = {`font-bold pl-16 duration-300 transition pt-7 ${isHovering? 'scale-125': 'scale-90'}`}>{props.name}</div>
        <SiElement className = {`absolute top-1/2 left-1/2 text-6xl -translate-x-1/2 -translate-y-1/2 ${isHovering? 'rotate-180 scale-150 opacity-40': ''} duration-300 transition`} />
    </div>
}