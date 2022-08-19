import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '260px',
  height: '220px'
};


function Maps(props) {
	console.log(props.lng);
	const center = {
		lat: props.lat,
		lng: props.lng
	};
	let [showingInfoWindow, setShowingInfoWindow] = useState(false);
	let [activeMarker, setActiveMarker] = useState({});
	let	[selectedPlace, setSelectedPlace] = useState();

	// function onMarkerClick = (props, marker, e) => {
	// 	setSelectedPlace =  props.location
	// 	setActiveMarker =  marker
	// 	setShowingInfoWindow = true
	// 	};

	// onMapClicked = props => {
	// 	console.log('click');
	// 	if (showingInfoWindow) {
	// 		setShowingInfoWindow = false
	// 		setActiveMarker = null
	// 	}
	// };

	return (
		<LoadScript
			googleMapsApiKey = {process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY}
		>
		<GoogleMap
			mapContainerStyle={containerStyle}
      center={center}
      // zoom={10}
			// google={props.google}
			zoom={2}
			// center={{
			// 	lat: props.lat,
			// 	lng: props.lng
			// }}
		>
			<Marker
				title={props.name}
				name={props.location}
				position={{
					lat: props.lat,
					lng: props.lng
				}}
			/>
		</GoogleMap>
		</LoadScript>
	)
}

export default React.memo(Maps);
