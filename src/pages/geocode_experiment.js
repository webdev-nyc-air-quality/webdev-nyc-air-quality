import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import LeafletMap from '../components/LeafletMap'
import GeocodeForm from '../components/GeocodeForm'

class GeocodeExperimentPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      address: '',
      mapOptions: {
        zoom: 12,
        center: {
          lat: 40.7128,
          lng: -73.9352,
        },
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ address: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.geocodeAddress(this.state.address)
  }

  geocodeAddress (address) {
    if (!address) return false
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
        process.env.GATSBY_GMAPS_API_KEY
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          const outputLocation = result.results.length
            ? result.results[0].geometry.location
            : false
          this.setState({
            mapOptions: {
              zoom: 12,
              center: outputLocation,
            },
          })
        },
        error => {
          this.setState({
            mapOptions: {
              zoom: 12,
              center: false,
            },
          })
        }
      )
  }

  render () {
    return (
      <Layout
        siteTitle={this.props.data.site.siteMetadata.title}
        subpageTitle='Geocode Experiment'
      >
        <GeocodeForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          outputLocation={this.state.mapOptions.center}
        />
        <LeafletMap mapOptions={this.state.mapOptions} />
      </Layout>
    )
  }
}

export const query = graphql`
  query GeocodeExperimentQuery {
    site {
      ...SiteTitle
    }
  }
`

export default GeocodeExperimentPage
