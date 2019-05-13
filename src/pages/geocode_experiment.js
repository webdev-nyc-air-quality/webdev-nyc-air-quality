import React from 'react'
import { Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


import Layout from '../components/layout'

const GeocodeExperimentPage = () => (
  <Layout>
     Geocode Experiment
     <Geocode />
     <LeafletMap  />
  </Layout>
)


class Geocode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      location: [],
      address: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

geocodeAddress(address) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GATSBY_GMAPS_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            location: result.results[0].geometry.location,
            address
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleChange(event) {
    this.setState({address: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.geocodeAddress(this.state.address);
  }

  render() {
     const { location } = this.state;
    return(
     <div>
       <p> Enter address </p>
       <form onSubmit={this.handleSubmit}> 
         <input type="text" name="address" onChange={this.handleChange} />
         <button type="submit" >Submit</button>
       </form>
       location: {location ? `lat : ${location.lat} lng : ${location.lng}` : ''}
      </div>
   );
  }
}

class LeafletMap extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map style= {{height : '800px', width : '800px' }} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

export default GeocodeExperimentPage
