import React from "react"
import {MapContainer, TileLayer, FeatureGroup} from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'

import 'leaflet/dist/leaflet.css'
import '../assets/scss/style.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import { circleMarker, polyline } from "leaflet"

const _onCreated = (e) => {
    const { _latlngs } = e.layer


    _latlngs.forEach(coord => {
                console.log(coord) //coords array
    })

}
 
const _onEdited = (e) => {

    const {_layers} = e.layers

    Object.values(_layers).map(coords => {
            
        coords._latlngs.forEach(coord => {
            console.log(coord) //coords array
        })
    })

}

const _onDeleted = (e) => {
    console.log(e)
}

const DrawMap = () => {
return (
        <div className="col-12 col-md-6">
        <MapContainer center={{lat:'25.6714', lng: '-100.309'}} zoom={12}>

        <FeatureGroup>
        <EditControl
      position='topright'
      onEdited={_onEdited}
      onCreated={_onCreated}
      onDeleted={_onDeleted}
          draw={{
        rectangle: false,
         polyline: false,
         circleMarker : false,
         marker : false,
         circlemarker : false,
         circle : false /*  Quitar esta propiedad si quieres dibujar cirulos */
      }}
    />
        </FeatureGroup>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         />
        </MapContainer>
        </div>
)
}

export default DrawMap
