import React from 'react'
import { useParams } from 'react-router-dom'
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
            const res = await axios.get(`/api/v1/data/${userId}`)
            const data = res.data
            setItem(data.data)
        }
        getItem()
    }, []) 
    
    return (
        <div className = 'w-screen relative overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full h-screen'>
            <SplashNav />
            {item? <div className = 'text-white flex-col flex items-center'>
                <div className = 'flex ml-10 my-10 w-full justify-start bg-green-300'>
                    <div className = 'text-4xl absolute font-bold top-10 border-b-2 pb-2 border-gray-800 w-full tracking-wide'>{item.name}</div>
                    <MdNavigateBefore />
                </div>
                <div className = {`grid grid-rows-${Object.keys(item).length} absolute top-32 grid-cols-3 w-full pb-14 px-5 pt-10`}>
                    {item._id && <ItemItem title = {'ID'} description = {String(item._id)} />}
                    {item.alcoholContent && <ItemItem title = {'Alcohol Content'} description = {item.alcoholContent} />}
                    {item.culturalImportance && <ItemItem title = {'Cultural Importance'} description = {item.culturalImportance} />}
                    {item.fermentationTime && <ItemItem title = {'Fermentation Time'} description = {item.fermentationTime} />}
                    {item.ingredients && <ItemItem title = {'Ingredients'} description = {item.ingredients} />}
                    {item.microorganisms && <ItemItem title = {'Microorganisms'} description = {item.microorganisms} />}
                    {item.nutritionalValue && <ItemItem title = {'Nutritional Value'} description = {item.nutritionalValue} />}
                    {item.place && <ItemItem title = {'Place'} description = {item.place} />}
                    {item.reference && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Reference</div>
                        <a href = {`http://${item.reference}`} target = '__blank' className = 'itemStyle hover:underline'>{item.reference}</a>
                    </div>}
                    {item.starter && <ItemItem title = {'Starter'} description = {item.starter} />}
                    {item.tasteAndOdour && <ItemItem title = {'Taste and Odour'} description = {item.tasteAndOdour} />}
                    {item.texture && <ItemItem title = {'Texture'} description = {item.texture} />}
                </div>
            </div>: <Loading />}
        </div>
    )
}

export default Item