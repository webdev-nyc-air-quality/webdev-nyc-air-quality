import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
    center: {
        lat: 40.71,
        lng: -73.94,
    },
    zoom: 12,
}

const AnyReactComponent = ({ text }) => <div>{ text }</div>

const GoogleMap = () => (
    <div style={{ height: '400px', width: 'auto' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDbj2cK_KGt9X1cX1Fgz2koBIYc-ivwrxI' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
        <AnyReactComponent 
            lat={40.7128}
            lng={-73.935242}
            text={'New York'}
        />
        </GoogleMapReact>
    </div>
)

export default GoogleMap