import React from 'react'

type SearchItemProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<{
        name: string;
        starter: string;
        ingredients: string;
        place: string;
        microorganisms: string;
        minAC: string;
        maxAC: string
        minFT: string,
        maxFT: string
    }>>
    title: string
    objKey: string
}

function SearchItem(props: SearchItemProps) {
  return (
    <div className = 'flex text-lg mb-1 justify-between'>
        <label htmlFor = {props.title}>{props.title}</label>
        <input value = {props.text} onChange = {(e) => {
            const change = e.currentTarget.value
            props.setText(i => {
                return { ...i, [props.objKey]: change };
            })
        }} id = {props.title} className = 'text-gray-500 text-sm h-8 w-1/2 indent-3 rounded-sm focus:outline-none' />
    </div>
  )
}

export default SearchItem