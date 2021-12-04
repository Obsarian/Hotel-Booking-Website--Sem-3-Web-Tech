import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Mapcontainer extends React.Component {
	render() {
		const mapStyle = {
			width: "100%",
			minWidth: "1400px",
			height: "722px"
		};
		const mapDivStyle = {
			height: "722px", 
			borderTop: "3px solid sienna"
		};
		return (
			<div style={mapDivStyle}>
				<Map style={mapStyle} google={this.props.google} zoom={14}>
					<Marker onClick={this.onMarkerClick} name={'Current location'} />
					<InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyCRObkoJwYCb3EV7ohmLDPLCd6mGuombKY")
})(Mapcontainer);