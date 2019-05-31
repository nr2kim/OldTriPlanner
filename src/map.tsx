import * as React from 'react';
import { observer } from 'mobx-react';

import '../css/style.css';

@observer
export class Map extends React.Component <any, any> {
    private mapObject;
    private latlng;
    public constructor(props) {
        super(props);
    }

    public componentDidMount(): void {
        this.latlng = {lat: -25.344, lng: 131.036};
        this.mapObject = new google.maps.Map(document.getElementById('map'), { center: this.latlng,  zoom: 4 });
    }

    public getMarker(mlat: number, mlon: number) {
        // return <Marker position={{ lat: mlat, lng: mlon }} />;
    }

    public addMarker(mEv) {
        // this.props.storage.markers.push(this.getMarker(mEv.lat(), mEv.lng()));
    }

    public render() {
        return (
            <div id='map'>
            </div>
        );
    }
}
