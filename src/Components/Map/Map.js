import React, { Component } from 'react';
import './Map.css';
import GoogleMapReact from 'google-map-react';

// map component for the google map
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 23.6943,
      lng: 90.3444
    },
    zoom: 11
  };
 
  render() {
    return (
      <div className="mapMainDiv">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB7QgujXikfZEfcDr9SS8MDNFdXR1EdbbI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.6943}
            lng={90.3444}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;