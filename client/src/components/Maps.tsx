import React from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

type MapsProps = {
    setRenderHero: React.Dispatch<React.SetStateAction<boolean>>
}

function Maps(props: MapsProps) {

    React.useEffect(() => {
        props.setRenderHero(false)
    }, [])

    return (  
        <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[20.5937, 78.9629]}>
                <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Maps
