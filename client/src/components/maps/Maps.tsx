import React from 'react'
import { MapContainer, TileLayer, GeoJSON, ZoomControl} from 'react-leaflet'
import { Layer } from 'leaflet'
import {GeoJsonObject, Feature, Geometry} from 'geojson'
import * as mapData from '../../../mapData.json'
import MapsNav from './MapsNav'
import { useNavigate, useSearchParams } from 'react-router-dom'

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];
//thank you https://gist.github.com/mucar

function Maps() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [datalist, setDatalist] = React.useState<string[]>([])
    const navigate = useNavigate()
    const [selected, setSelected] = React.useState<string>()

    React.useEffect(() => {
        setSelected("Click on a state")
    }, [])

    let queryString = '?'
    searchParams.forEach((key, value) => {
        queryString += `${value}=${key}&`
    })

    let x = -1;
    
    const onEachState = (state: Feature<Geometry, any>, layer: Layer) => {
        // layer.bindPopup(state.properties.NAME_1)
        layer.on({
            click: (event) => {
                setSelected(event.target.feature.properties.NAME_1)
                navigate(`/maps/?place=${event.target.feature.properties.NAME_1}`, { replace: true })
            },
        })
    }

    const stateStyle = (feature: Feature<Geometry, any> | undefined) => {
        x++;
        if(!datalist.includes(feature?.properties.NAME_1)) datalist.push(feature?.properties.NAME_1)
        return {
            fillColor: colorArray[colorArray.length - 1 - x],
            fillOpacity: selected === feature?.properties.NAME_1? 0.8: 0.3,
            color: "gray",
            weight: selected === feature?.properties.NAME_1? 2: 0.3
        }
    }

    const [data, setData] = React.useState(mapData as GeoJsonObject)

    return (  
        <div className='w-screen h-screen overflow-hidden'>
            <MapsNav setSelected={setSelected} datalist={datalist} searchParams = {searchParams} selected = {selected as string} />
            <MapContainer zoomControl = {false} style = {{
            }} center={[22.5937, 98.9629]} zoom={5} scrollWheelZoom={true}>
                <GeoJSON onEachFeature={onEachState} data = {data} style = {stateStyle}/>
                <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    url={`https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_MAPTILER_KEY}`}
                    noWrap = {true}
                />
                <ZoomControl position='bottomleft' />
            </MapContainer>
        </div>
    )
}

export default Maps
