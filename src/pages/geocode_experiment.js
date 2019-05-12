import React from 'react'

import Layout from '../components/layout'

const GeocodeExperimentPage = () => (
  <Layout>
     Geocode Experiment
     <Geocode />
  </Layout>
)


class Geocode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      location: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
geocodeAddress(address) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GATSBY_GMAPS_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            location: result.results[0].geometry.location
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
    this.setState({address: event.target.address});
  }

  handleSubmit(event){
    event.preventDefault();
    this.geocodeAddress(document.querySelector('#address').value);
  }

  render() {
     const { location } = this.state;
    return(
     <div>
       <p> Enter address </p>
       <form onSubmit={this.handleSubmit}> 
         <input type="text" id="address" />
         <button type="submit" >Submit</button>
       </form>
       location: {location ? `lat : ${location.lat} lng : ${location.lng}` : ''}
     </div>
   );
  }
}

export default GeocodeExperimentPage
