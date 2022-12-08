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
        <GridItem itemDescription='Interactive maps. Click on a region to display the beverages found in it.' color = {'bg-blue-300 hover:bg-blue-400'} Icon = { BiMap } IconArt = {FaMapMarkedAlt} itemTitle = {'Maps'} route = {'/maps'}/>
        <GridItem itemDescription='Statistics drawn over various parameters to draw useful inferences. Click on different properties to observe the available stats.' color = {'bg-pink-300 hover:bg-pink-400'} Icon = { BsBarChartFill } IconArt = {ImStatsBars} itemTitle = {'Stats'} route = {'/stats'}/>        
        <GridItem itemDescription='Search all the beverages over various parameters and their combinations. Search with an empty field to browse through all the available drinks.' color = {'bg-yellow-300 hover:bg-yellow-400'} Icon = {BiSearch} IconArt = {BiSearch} itemTitle = {'Search'} route = {'/search'} />
        <GridItem itemDescription='Starter cultures used in the available beverages. Description of the most common starter cultures is availble.' color = {'bg-green-300 hover:bg-green-400'} Icon = { FaBacterium } IconArt = {FaBacteria} itemTitle = {'Starters'} route = {'/starters'} />        
        <GridItem itemDescription='News section powered by Guardian API. Browse over 490 news articles that are regularly updated.' color = {'bg-red-300 hover:bg-red-400'} Icon = {HiOutlineNewspaper } IconArt = {HiNewspaper} itemTitle = {'News'} route = {'/news'}/>        
    </div>
  )
}

export default Grid