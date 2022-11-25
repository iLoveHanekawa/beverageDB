import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SchemaType } from '../../features/data'
import axios from 'axios'
import Loading from '../Loading'
import ItemItem from './ItemItem'
import SplashNav from '../splash/SplashNav'
import { MdNavigateBefore} from 'react-icons/md'

function Item() {

    const { userId } = useParams()
    const [item, setItem] = React.useState<SchemaType | undefined>()

    React.useEffect(() => {
        const getItem = async () => {
            const res = await axios.get(`https://beveragedb-production.up.railway.app/api/v1/data/${userId}`)
            const data = res.data
            setItem(data.data)
        }
        getItem()
    }, []) 
    
    const navigate = useNavigate()

    return (
        <div className='w-screen relative overflow-x-hidden h-full scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 text-white flex flex-col'>
            <SplashNav />
            {!item? <div className='absolute left-1/2 -translate-x-1/2 translate-y-1/2'><Loading /></div>:
            <div className = 'absolute top-20 left-0 z-20 w-screen'>
                <div className = 'flex items-center w-full border-b-gray-800 border-b-2 pb-3 text-4xl'>
                    <MdNavigateBefore onClick = {() => {
                        navigate(-1)
                    }} className = 'ml-3 text-6xl cursor-pointer hover:scale-125 duration-300 transition' />
                    <div className='tracking-wide w-full'>{item.name}</div>
                </div>
                <div className={`grid px-16 py-16 grid-cols-3 grid-rows-${Object.keys(item).length + 5}`}>
                    <div className = 'col-span-3 pl-2 font-bold tracking-wide bg-pink-500'>General</div>
                    {item.name && <ItemItem title = {'Name'} description = {item.name} />} 
                    {item._id && <ItemItem title = {'ID'} description = {String(item._id)} />}
                    {item.place && <ItemItem title = {'Place'} description = {item.place} />}
                    <div className = 'col-span-3 pl-2 font-bold tracking-wide bg-red-500'>Brewing</div>
                    {item.alcoholContent && <ItemItem title = {'Alcohol Content'} description = {item.alcoholContent} />}
                    {item.fermentationTime && <ItemItem title = {'Fermentation Time'} description = {item.fermentationTime} />}
                    {item.starter && <ItemItem title = {'Starter'} description = {item.starter} />}
                    {item.microorganisms && <ItemItem title = {'Microorganisms'} description = {item.microorganisms} />}
                    <div className = 'col-span-3 pl-2 font-bold tracking-wide bg-cyan-500'>Properties</div>
                    {item.tasteAndOdour && <ItemItem title = {'Taste and Odour'} description = {item.tasteAndOdour} />}
                    {item.texture && <ItemItem title = {'Texture'} description = {item.texture} />}
                    {item.ingredients && <ItemItem title = {'Ingredients'} description = {item.ingredients} />}
                    <div className = 'col-span-3 pl-2 font-bold tracking-wide bg-green-500'>Additional Information</div>
                    {item.nutritionalValue && <ItemItem title = {'Nutritional Value'} description = {item.nutritionalValue} />}
                    {item.culturalImportance && <ItemItem title = {'Cultural Importance'} description = {item.culturalImportance} />}
                    <div className = 'col-span-3 pl-2 font-bold tracking-wide bg-purple-500'>Links and References</div>
                    {item.reference && <div className = 'grid col-span-3 row-span-1 grid-rows-1 grid-cols-3'>
                        <div className = 'col-span-1 border-r-2 py-2 h-full border-l-2 border-b-2 pl-4 border-gray-800'>Reference</div>
                        <a href = {`http://${item.reference}`} target = '__blank' className = 'col-span-2 pl-4 py-2 border-b-2 border-gray-800 border-r-2 hover:underline'>{item.reference}</a>
                    </div>}
                </div>
            </div>}
        </div>
    )
}

export default Item