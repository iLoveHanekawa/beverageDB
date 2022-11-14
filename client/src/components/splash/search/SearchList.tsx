import React from 'react'
import HeroButton from '../../hero/HeroButton'

type SearchListProps = {
    isBrowseOpen: boolean
    setBrowseSelect: React.Dispatch<React.SetStateAction<string>>
    browseSelect: string
    setBrowseOpen: React.Dispatch<React.SetStateAction<boolean>>
    setParam: React.Dispatch<React.SetStateAction<string>>
}

const urlParamKeys = ['name', 'starter', 'ingredients', 'place', 'microorganim', 'alcoholPercent']

function SearchList(props: SearchListProps) {
  return (
    <ul className = {props.isBrowseOpen? 'openDropdown': 'closeDropdown'}>
        <HeroButton 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[0] }
            browseValue = {'Name'}
        />
        <HeroButton 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[1] }
            browseValue = {'Starter Culture'}
        />
        <HeroButton 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[2] }
            browseValue = {'Ingredients'}
        />
        <HeroButton 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[3] }
            browseValue = {'Place'}
        />
        <HeroButton 
            setBrowseSelect = { props.setBrowseSelect }
            setBrowseOpen = { props.setBrowseOpen }
            setParam = {props.setParam}
            browseSelect = { props.browseSelect }
            paramValue = { urlParamKeys[4] }
            browseValue = {'Microorganism'}
        />     
        <HeroButton 
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