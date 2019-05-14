import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const CulturalInstitutionsPage = () => (
  <Layout>
    Cultural Institutions Data
    <CulturalInstitution />
  </Layout>
)

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class CulturalInstitution extends React.Component {
  state = {
    lat: 40.7128,
    lng: -73.9352,
    zoom: 12,
  }

  // const position = [this.state.lat, this.state.lng]

  render() {
    return (
      <StaticQuery
        query={graphql`
        query {
          allCulturalInstitutionsJson {
            nodes {
              Organization_Name
              Preferred_Address_Line_1
              Borough
              Community_Board
              position {
                lat
                lng
              }
            }
          }
        }
      `}
        render={data => (
          <Map style={{ height: '100%', width: '66%' }} center={{ lat: 40.7128, lng: -73.9352 }} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.allCulturalInstitutionsJson.nodes.map((node, index) => (
              <Marker key={index} position={node.position}>
                <Popup>
                  <strong>                  
                    {node.Organization_Name}
                  </strong>
                  <br />
                  {node.Preferred_Address_Line_1}
                </Popup>
              </Marker>
            ))}
          </Map>
        )}
      />
    );
  }
}

export default CulturalInstitutionsPage
