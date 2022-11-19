import {FaMapMarkedAlt} from 'react-icons/fa'
import GridItem from './GridItem'
import { BiMap } from 'react-icons/bi'
import { ImStatsBars } from 'react-icons/im'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { FaBacterium } from 'react-icons/fa'
import { BsBarChartFill } from 'react-icons/bs'
import {HiNewspaper} from 'react-icons/hi'
import { FaBacteria } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'

function Grid() {
  return (
    <div className = 'grid grid-rows-1 w-full h-2/3 gap-3 pb-2 px-20 absolute top-60 grid-cols-5'>
        <GridItem color = {'bg-blue-300 hover:bg-blue-400'} Icon = { BiMap } IconArt = {FaMapMarkedAlt} itemTitle = {'Maps'} route = {'/maps'}/>
        <GridItem color = {'bg-pink-300 hover:bg-pink-400'} Icon = { BsBarChartFill } IconArt = {ImStatsBars} itemTitle = {'Stats'} route = {'/stats'}/>        
        <GridItem color = {'bg-yellow-300 hover:bg-yellow-400'} Icon = {BiSearch} IconArt = {BiSearch} itemTitle = {'Search'} route = {'/search'} />
        <GridItem color = {'bg-green-300 hover:bg-green-400'} Icon = { FaBacterium } IconArt = {FaBacteria} itemTitle = {'Starters'} route = {'/starters'} />        
        <GridItem color = {'bg-red-300 hover:bg-red-400'} Icon = {HiOutlineNewspaper } IconArt = {HiNewspaper} itemTitle = {'News'} route = {'/maps'}/>        
    </div>
  )
}

export default Grid