import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allCulturalInstitutionsJson {
              nodes {
                name
                position {
                  lat
                  lng
                }
              }
            }
          }
        `}
        render={data => (
          <Map 
            google={this.props.google} 
            zoom={12}
            initialCenter={{
              lat: 40.7128,
              lng: -73.9352,      
            }}
          >
            {data.allCulturalInstitutionsJson.nodes.map((node, index ) => (
              <Marker 
                key={index}
                name={node.name}
                position={node.position}
              />
            ))}
          </Map>
        )}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GMAPS_API_KEY
})(MapContainer);
