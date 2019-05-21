import React, { Component } from 'react'

class GeocodeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      location: [],
      address: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  geocodeAddress (address) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
        process.env.GATSBY_GMAPS_API_KEY
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            location: result.results[0].geometry.location,
            address,
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  handleChange (event) {
    this.setState({ address: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.geocodeAddress(this.state.address)
  }

  render () {
    const { location } = this.state
    return (
      <div>
        <p>Enter address:</p>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='address' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
        <span>
          location:{' '}
          {location ? `lat : ${location.lat} lng : ${location.lng}` : ''}
        </span>
      </div>
    )
  }
}

export default GeocodeForm
