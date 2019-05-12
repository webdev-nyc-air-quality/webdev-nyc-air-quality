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
      location: []
    };
  }
componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.GATSBY_GMAPS_API_KEY}`)
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

  render() {
     const { location } = this.state;
    return(
     <div>
       location: {location ? `lat : ${location.lat} lng : ${location.lng}` : ''}
     </div>
   );
  }
}

export default GeocodeExperimentPage
