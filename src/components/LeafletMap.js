import React from 'react'

let RL = false
let Map = false
let TileLayer = false
let L = false
if (process.env.GATSBY_CLIENT) {
  console.log(`env: ${process.env.GATSBY_CLIENT}`)
  RL = require('react-leaflet')
  L = require('leaflet')
  require('leaflet/dist/leaflet.css')
  Map = RL.Map
  TileLayer = RL.TileLayer
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  })
}

const LeafletMap = ({ data, children }) => (
  <>
    {process.env.GATSBY_CLIENT && (
      <Map
        style={{ height: '800px', width: '800px' }}
        center={[51.505, -0.09]}
        zoom={13}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {children}
      </Map>
    )}
  </>
)

export default LeafletMap
