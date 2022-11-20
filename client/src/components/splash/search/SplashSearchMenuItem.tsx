import React from 'react'

type SplashSearchMenuItemProps = {
    browseSelect: string
    setBrowseSelect: React.Dispatch<React.SetStateAction<string>>
    setBrowseOpen: React.Dispatch<React.SetStateAction<boolean>>
    setParam: React.Dispatch<React.SetStateAction<string>>
    browseValue: string
    paramValue: string
}

function SplashSearchMenuItem(props: SplashSearchMenuItemProps) {
  return (
    <button onClick = {() => {
        props.setBrowseSelect(props.browseValue) 
        props.setBrowseOpen(i => !i);
        props.setParam(props.paramValue)
      }} 
      className = { props.browseSelect === props.browseValue? `selectedBrowse pt-1`: `notSelectedBrowse` }>{ props.browseValue }</button>
  )
}

export default SplashSearchMenuItem