import React from 'react'
import SplashSearchMenuItem from './SplashSearchMenuItem'

type SearchListProps = {
    isBrowseOpen: boolean
    setBrowseSelect: React.Dispatch<React.SetStateAction<string>>
    browseSelect: string
    setBrowseOpen: React.Dispatch<React.SetStateAction<boolean>>
    setParam: React.Dispatch<React.SetStateAction<string>>
}

const urlParamKeys = ['name', 'starter', 'ingredients', 'place', 'microorganisms', 'alcoholPercent']

function SearchList(props: SearchListProps) {
  return (
    <ul className = {props.isBrowseOpen? 'openDropdown': 'closeDropdown'}>
        <SplashSearchMenuItem 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[0] }
            browseValue = {'Name'}
        />
        <SplashSearchMenuItem 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[1] }
            browseValue = {'Starter Culture'}
        />
        <SplashSearchMenuItem 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[2] }
            browseValue = {'Ingredients'}
        />
        <SplashSearchMenuItem 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[3] }
            browseValue = {'Place'}
        />
        <SplashSearchMenuItem 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[4] }
            browseValue = {'Microorganism'}
        />     
        <SplashSearchMenuItem 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[5] }
            browseValue = {'Alcohol Percent'}
        />     
    </ul>
  )
}

export default SearchList