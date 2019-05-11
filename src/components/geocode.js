import React from "react";


class Geocode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.GATSBY_GMAPS_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
        //console.log('ajax: ', result)
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
    // console.log(location);
    // location: {location ? `lat : ${location.lat} lng : ${location.lng}` : ''} 
    return(
    
     <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>               
            <label className="sr-only" htmlFor="address">Address</label>
            <input type="text" name="address" size="130" placeholder="New York, United States"  required />
            <button type="submit" >Submit</button>
        </form> 
     </div>
     
   );
  }
}
export default Geocode;