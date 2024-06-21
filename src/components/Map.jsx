import 'leaflet/dist/leaflet.css'
import { useEffect, useMemo } from 'react'
import {
    MapContainer, Marker, Popup, TileLayer, useMap
} from 'react-leaflet'
import MarkerPosition from './MarkerPosition.jsx'

export const Map = ({lat,lng}) => {


    return (
        <div className='absolute top-[400px] left-0 right-0 mx-auto z-0'>
            <MapContainer
                center={[lat, lng]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '68vh', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerPosition lat={lat} lng={lng} />
            </MapContainer>


        </div>
    )

}