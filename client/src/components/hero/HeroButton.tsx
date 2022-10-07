import React from 'react'

type HeroButtonProps = {
    browseSelect: string
    setBrowseSelect: React.Dispatch<React.SetStateAction<string>>
    setBrowseOpen: React.Dispatch<React.SetStateAction<boolean>>
    setPlaceHolderText: React.Dispatch<React.SetStateAction<string>>
    setParam: React.Dispatch<React.SetStateAction<string>>
    browseValue: string
    placeHolderValue: string
    paramValue: string
}

function HeroButton(props: HeroButtonProps) {
  return (
    <button onClick = {() => {
        props.setBrowseSelect(props.browseValue) 
        props.setBrowseOpen(i => !i);
        props.setPlaceHolderText(props.placeHolderValue) 
        props.setParam(props.paramValue)
      }} 
      className = {props.browseSelect === props.browseValue? `selectedBrowse pt-1`: `notSelectedBrowse`}>{props.browseValue}</button>
  )
}

export default HeroButton