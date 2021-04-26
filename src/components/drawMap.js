import React, { useState, useRef } from "react"
import { MapConsumer, TileLayer, FeatureGroup } from "react-leaflet"


const DrawMap = () => {
  const [center, setCenter] = useState({
    lat: 25.6714,
    lng: -100.309
  })
  const mapRef = useRef()
  const ZOOM_LEVEL = 12


const _onCreate = e => {
    console.log(e)
}

const _onEdited = e => {
    console.log(e)
}

const _onDeleted = e => {
    console.log(e)
}

  return (
    <div>
        <h1>MAP</h1>
    </div>
    )
}

export default DrawMap
