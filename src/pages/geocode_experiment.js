import React, { Component } from 'react'

import Layout from '../components/layout'
import LeafletMap from '../components/LeafletMap'
import GeocodeForm from '../components/GeocodeForm'

class GeocodeExperimentPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      outputLocation: false,
      address: '',
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
            outputLocation,
          })
        },
        error => {
          this.setState({
            outputLocation: false,
          })
        }
      )
  }

  render () {
    return (
      <Layout subpageTitle='Geocode Experiment'>
        <GeocodeForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          outputLocation={this.state.outputLocation}
        />
        <LeafletMap />
      </Layout>
    )
  }
}

export default GeocodeExperimentPage
