import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { observer } from 'mobx-react';

import '../css/style.css';

@observer
export class Map extends React.Component <any, any> {
    public constructor(props) {
        super(props);

    }

    public componentDidMount() {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(function (position) {

        //     });
        //     // this.setState({
        //     //     markerLat: position.coords.latitude,
        //     //     markerLon: position.coords.longitude
        //     // })
        // } else {
        //     // TODO:: get last location from database
        //     // if (in database) { get it }
        // }
    }

    public getMarker(mlat: number, mlon: number) {
        return <Marker position={{ lat: mlat, lng: mlon }} />;
    }

    public addMarker(mEv) {
        this.props.storage.markers.push(this.getMarker(mEv.lat(), mEv.lng()));
    }

    public render() {
        console.log(this.props.storage.getMarkers);
        const MyMapComponent = withScriptjs(withGoogleMap(() =>
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 80.5449, lng: 43.4723 }}
            onClick={(mEv) => this.props.storage.addMarker(this.getMarker(mEv.latLng.lat(), mEv.latLng.lng()))}
          >
            {this.props.storage.getMarkers}
          </GoogleMap>
        ));

        return (
            <MyMapComponent 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLk1Q4ZhxulHQK07gdTx964zXlrp3PSTY"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className="map" />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}
