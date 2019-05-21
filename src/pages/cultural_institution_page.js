import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import LeafletMap from '../components/LeafletMap'

let RL = false
let Marker = false
let Popup = false
if (process.env.GATSBY_CLIENT) {
  console.log(`env: ${process.env.GATSBY_CLIENT}`)
  RL = require('react-leaflet')
  Marker = RL.Marker
  Popup = RL.Popup
}

class CulturalInstitutionsPage extends Component {
  state = {
    zoom: 12,
    center: {
      lat: 40.7128,
      lng: -73.9352,
    },
  }

  render () {
    return (
      <Layout
        siteTitle={this.props.data.site.siteMetadata.title}
        subpageTitle='Cultural Institutions'
      >
        <LeafletMap center={this.state.center} zoom={this.state.zoom}>
          {this.props.data.allCulturalInstitutionsJson.nodes.map(
            (node, index) => (
              <Marker key={index} position={node.position}>
                <Popup>
                  <strong>{node.Organization_Name}</strong>
                  <br />
                  {node.Preferred_Address_Line_1}
                </Popup>
              </Marker>
            )
          )}
        </LeafletMap>
      </Layout>
    )
  }
}

export const query = graphql`
  query CulturalInstitutionsQuery {
    site {
      ...SiteTitle
    }
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
`

export default CulturalInstitutionsPage
