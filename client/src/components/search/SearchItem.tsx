import React from 'react'

type SearchItemProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<{
        name: string;
        starter: string;
        ingredients: string;
        place: string;
        microorganisms: string;
        tribes: string;
        districts: string;
        weather: string;
        minAC: string;
        maxAC: string
        minFT: string;
        maxFT: string;
        minRainfall: string;
        maxRainfall: string;
        minHumidity: string;
        maxHumidity: string;
    }>>
    title: string
    objKey: string
}

function SearchItem(props: SearchItemProps) {
  return (
    <div className = 'flex text-md mb-1 justify-between'>
        <label className = 'cursor-pointer' htmlFor = {props.title}>{props.title}</label>
        <input value = {props.text} onChange = {(e) => {
            const change = e.currentTarget.value
            props.setText(i => {
                return { ...i, [props.objKey]: change };
            })
        }} id = {props.title} className = 'text-gray-500 text-sm h-8 w-1/2 indent-3 rounded-full focus:outline-none' />
    </div>
  )
}

export default SearchItem