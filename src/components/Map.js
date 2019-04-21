import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'

const mapStyles = {
    width: '75%',
    height: '75%'
};

export class MapContainer extends Component {
    render() {
        return (
        <div>
            <Map 
                google={this.props.google} 
                zoom={12}
                style={mapStyles}
                initialCenter={{
                    lat: 40.7128,
                    lng: -73.9352,            
                }}
                >
                <Marker 
                    name={'Synagogue for the Arts'}
                    position={{lat: 40.718526, lng: -74.004156}}
                />
                <Marker
                    name={'Action Center To End World Hunger'}
                    position={{lat: 40.715781, lng: -74.016518}}
                />
                <Marker
                    name={'Circle Line Downtown'}
                    position={{lat: 40.705717, lng: -74.002453}}
                />
                <Marker
                    name={'3 Legged Dog, Inc.'}
                    position={{lat: 40.707514, lng: -74.0138}}
                />
                <Marker
                    name={'Church of Our Lady of the Rosary'}
                    position={{lat: 40.702398, lng: -74.013287}}
                />
                <Marker
                    name={'Trinity Church'}
                    position={{lat: 40.708387, lng: -74.012563}}
                />
                <Marker
                    name={'Museum of American Finance'}
                    position={{lat: 40.706331, lng: -74.009396}}
                />
                <Marker
                    name={'Bodies The Exhibition'}
                    position={{lat: 40.706639, lng: -74.003477}}
                />
                <Marker
                    name={'The Skyscraper Museum'}
                    position={{lat: 40.705869, lng: -74.017994}}
                />
                <Marker
                    name={'Museum of Jewish Heritage-A Living Memorial to the Holocaust'}
                    position={{lat: 40.705806, lng: -74.018019}}
                />
                <Marker
                    name={'Intercoastal Adventures'}
                    position={{lat: 40.705717, lng: -74.002453}}
                />
                <Marker
                    name={'Lower Manhattan Community Church'}
                    position={{lat: 40.716668, lng: -74.013542}}
                />
                <Marker
                    name={'Ministry of Culture'}
                    position={{lat: 40.72729, lng: -74.010842}}
                />
                <Marker
                    name={'NYSE Euronext'}
                    position={{lat: 40.707399, lng: -74.011105}}
                />
                <Marker
                    name={'South Street Seaport'}
                    position={{lat: 40.706916, lng: -74.003697}}
                />
                <Marker
                    name={'St. Pauls Chapel'}
                    position={{lat: 40.710967, lng: -74.009}}
                />
                <Marker
                    name={'World Financial Center Arts & Events Program'}
                    position={{lat: 40.71412, lng: -74.01475}}
                />
                <Marker
                    name={'Statue of Liberty, Museum Services Division'}
                    position={{lat: 40.689887, lng: -74.045337}}
                />
                <Marker
                    name={'Gray Line Double Decker Bus Tours'}
                    position={{lat: 40.756087, lng: -73.981072}}
                />
                <Marker
                    name={'Schimmel Center for the Arts'}
                    position={{lat: 40.711909, lng: -74.005843}}
                />
                <Marker
                    name={'Messiahs Reformed Fellowship'}
                    position={{lat: 40.707981, lng: -74.002471}}
                />
                <Marker
                    name={'Battery Park Synagogue'}
                    position={{lat: 40.711329, lng: -74.015893}}
                />
                <Marker
                    name={'New York Public Library'}
                    position={{lat: 40.713314, lng: -74.007759}}
                />
                <Marker
                    name={'Shooting Star Theater'}
                    position={{lat: 40.707712, lng: -74.001508}}
                />
                <Marker
                    name={'Castle Clinton National Monument'}
                    position={{lat: 40.70288, lng: -74.015523}}
                />
                <Marker
                    name={'African Burial Ground National Memorial'}
                    position={{lat: 40.714807, lng: -74.005764}}
                />
                <Marker
                    name={'Fraunces Tavern Museum'}
                    position={{lat: 40.703496, lng: -74.011375}}
                />
                <Marker
                    name={'John Street United Methodist Church'}
                    position={{lat: 40.709254, lng: -74.008051}}
                />
                <Marker
                    name={'Our Lady of Victory Church'}
                    position={{lat: 40.707108, lng: -74.008844}}
                />
                <Marker
                    name={'St. Peters Roman Catholic Church'}
                    position={{lat: 40.712353, lng: -74.008892}}
                />
                <Marker
                    name={'Wall Street Helicopter Tours'}
                    position={{lat: 40.701481, lng: -74.009171}}
                />
                <Marker
                    name={'National Museum of the American Indian'}
                    position={{lat: 40.704294, lng: -74.013237}}
                />
                <Marker
                    name={'Regal Battery Park'}
                    position={{lat: 40.714812, lng: -74.016153}}
                />
                <Marker
                    name={'New York City Police Museum'}
                    position={{lat: 40.703279, lng: -74.008039}}
                />
                <Marker
                    name={'Federal Hall National Memorial'}
                    position={{lat: 40.706927, lng: -74.010355}}
                />
                <Marker
                    name={'9/11 Memorial Preview Site'}
                    position={{lat: 40.711843, lng: -74.009562}}
                />
                <Marker
                    name={'African American Art Gallery'}
                    position={{lat: 40.710734, lng: -74.007178}}
                />
                <Marker
                    name={'Tribute WTC'}
                    position={{lat: 40.71002, lng: -74.012408}}
                />
                <Marker
                    name={'Center for Castle Garden Immigration'}
                    position={{lat: 40.704785, lng: -74.014099}}
                />
                <Marker
                    name={'Ellis Island National Museum'}
                    position={{lat: 40.698831, lng: -74.039753}}
                />
                <Marker
                    name={'Wall Street Synagogue'}
                    position={{lat: 40.710095, lng: -74.005295}}
                />
                <Marker
                    name={'Manhattan By Sail'}
                    position={{lat: 40.705717, lng: -74.002453}}
                />
                <Marker
                    name={'Poets House'}
                    position={{lat: 40.716033, lng: -74.016446}}
                />
                <Marker
                    name={'South Street Seaport Museum'}
                    position={{lat: 40.706631, lng: -74.003495}}
                />
                <Marker
                    name={'Cannons Walk'}
                    position={{lat: 40.707007, lng: -74.003181}}
                />
                <Marker
                    name={'The River Vineyard Christian Fellowship'}
                    position={{lat: 40.71322, lng: -74.011709}}
                />
                <Marker
                    name={'New York Public Library'}
                    position={{lat: 40.715654, lng: -74.015529}}
                />
                <Marker
                    name={'Bike & Roll Bike Rentals'}
                    position={{lat: 40.705717, lng: -74.002453}}
                />
                <Marker
                    name={'NY Waterway Tours'}
                    position={{lat: 40.704475, lng: -74.017406}}
                />
            </Map>
        </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GMAPS_API_KEY
})(MapContainer);
