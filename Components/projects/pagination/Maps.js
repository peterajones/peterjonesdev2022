import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	};

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onMapClicked = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	render() {
		return (
			<Map
				google={this.props.google}
				zoom={2}
				initialCenter={{
					lat: this.props.lat,
					lng: this.props.lng
				}}
			>
				<Marker
					title={this.props.name}
					name={this.props.location}
					position={{
						lat: this.props.lat,
						lng: this.props.lng
					}}
				/>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY
})(Maps);
