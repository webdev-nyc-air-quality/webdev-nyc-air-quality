import React from 'react'

import LeafletMap from '../components/LeafletMap'

let RL = false
let Marker = false
let Popup = false
if (typeof window !== 'undefined') {
  RL = require('react-leaflet')
  Marker = RL.Marker
  Popup = RL.Popup
}

const CulturalInstitutions = ({ center, zoom, data }) => (
  <LeafletMap center={center} zoom={zoom}>
    {data.nodes.map((node, index) => (
      <Marker key={index} position={node.position}>
        <Popup>
          <strong>{node.Organization_Name}</strong>
          <br />
          {node.Preferred_Address_Line_1}
        </Popup>
      </Marker>
    ))}
  </LeafletMap>
)

export default CulturalInstitutions