import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet'
import {GeoJsonObject} from 'geojson'
import * as mapData from '../../mapData.json'

type MapsProps = {
    setRenderHero: React.Dispatch<React.SetStateAction<boolean>>
}

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
//thank you https://gist.github.com/mucar

function Maps(props: MapsProps) {

    React.useEffect(() => {
        props.setRenderHero(false)
    }, [])

    const [data, setData] = React.useState(mapData as GeoJsonObject)
    const [selected, setSelected] = React.useState(-1)
    let x = -1;

    return (  
        <MapContainer center={[22.5937, 78.9629]} zoom={5} scrollWheelZoom={true}>
            <GeoJSON onEachFeature={(state, layer) => {
                layer.bindPopup(state.properties.NAME_1)
                layer.on({
                    click: (event) => {
                        setSelected(event.target.feature.properties.NAME_1)
                        // layer.openPopup()
                    },
                })
            }} data = {data} style = {(feature) => {
                x++;
                
                return {
                    fillColor: colorArray[colorArray.length - 1 - x],
                    fillOpacity: selected === feature?.properties.NAME_1? 0.9: 0.3,
                    color: "gray",
                    weight: 0.8
                }
            }}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Maps
