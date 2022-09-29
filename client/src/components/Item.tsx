import React from 'react'
import { useParams } from 'react-router-dom'
import { SchemaType } from '../features/data'
import axios from 'axios'

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
        <div>
            {item? <div className = 'flex-col flex items-center'>
                <div className = 'text-gray-600 self-start text-4xl mt-4 ml-8 border-b py-2 w-full'>{item.name}</div>
                <div className = {`grid grid-rows-${Object.keys(item).length} grid-cols-3 w-full pb-14 px-5 pt-10`}>
                    {item._id && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Id</div>
                        <div className = 'itemStyle'>{item._id}</div>
                    </div>}
                    {item.alcoholContent && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Alcohol Content</div>
                        <div className = 'itemStyle'>{item.alcoholContent}</div>
                    </div>}
                    {item.culturalImportance && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Cultural Importance</div>
                        <div className = 'itemStyle'>{item.culturalImportance}</div>
                    </div>}
                    {item.fermentationTime && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Fermentation Time</div>
                        <div className = 'itemStyle'>{item.fermentationTime}</div>
                    </div>}
                    {item.ingredients && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Ingredients</div>
                        <div className = 'itemStyle'>{item.ingredients}</div>
                    </div>}
                    {item.microorganisms && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Microorganisms</div>
                        <div className = 'itemStyle'>{item.microorganisms}</div>
                    </div>}
                    {item.nutritionalValue && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Nutritional Value</div>
                        <div className = 'itemStyle'>{item.nutritionalValue}</div>
                    </div>}
                    {item.place && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Place</div>
                        <div className = 'itemStyle'>{item.place}</div>
                    </div>}
                    {item.reference && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Reference</div>
                        <a href = {`http://${item.reference}`} target = '__blank' className = 'itemStyle hover:underline'>{item.reference}</a>
                    </div>}
                    {item.starter && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Starter</div>
                        <div className = 'itemStyle'>{item.starter}</div>
                    </div>}
                    {item.tasteAndOdour && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Taste and Odour</div>
                        <div className = 'itemStyle'>{item.tasteAndOdour}</div>
                    </div>}
                    {item.texture && <div className = 'itemField'>
                        <div className = 'fieldStyle'>Texture</div>
                        <div className = 'itemStyle'>{item.texture}</div>
                    </div>}

                </div>
            </div>: <div>Loading</div>}
        </div>
    )
}

export default Item