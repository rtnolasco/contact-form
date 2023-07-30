import React, { useState } from 'react';
import {
	GoogleMap,
	Marker,
	LoadScript,
} from '@react-google-maps/api';
import ColorButton from '../ColorButton/ColorButton';
import BusinessDetails from '../BusinessDetails/BusinessDetails';

import './ContactFormMap.css';

const ContactFormMap = () => {
	const mapStyles = {
		width: '492px',
		height: '248px',
		position: 'relative', // Add position relative to the map container
	};

	const defaultCenter = {
		lat: 34.811134070137776,
		lng: 32.43246047036922,
	}; // Set your default center coordinates

	const [activeButton, setActiveButton] = useState(null);

	const handleButtonClick = (label) => {
		setActiveButton(label);
	};

	return (
		<div className="map-container">
			<h2>find us IN ONE OF THREE OFFICES IN CYPRUS:</h2>
			<LoadScript googleMapsApiKey="AIzaSyAZzcASoVMLs64CWUpWPKYm-DAd0ZeTHqA">
				<div style={mapStyles}>
					<GoogleMap
						mapContainerStyle={{
							width: '100%',
							height: '100%',
						}}
						center={defaultCenter}
						zoom={10}
					>
						{/* Add marker for Paphos Office */}
						<Marker
							position={{
								lat: 34.736787186398466,
								lng: 33.11806258279454,
							}}
						/>

						{/* Add marker for Limassol Office */}
						<Marker
							position={{
								lat: 35.37109458698558,
								lng: 33.35211614703572,
							}}
						/>

						<Marker
							position={{
								lat: 35.16203568659566,
								lng: 33.35991982042725,
							}}
						/>
					</GoogleMap>
				</div>
			</LoadScript>

			<div className="button-container">
				<ColorButton
					label="Paphos Office"
					isActive={activeButton === 'Paphos Office'}
					onClick={handleButtonClick}
				/>
				<ColorButton
					label="Limassol Office"
					isActive={activeButton === 'Limassol Office'}
					onClick={handleButtonClick}
				/>
				<ColorButton
					label="3rd Address Office"
					isActive={activeButton === '3rd Address Office'}
					onClick={handleButtonClick}
				/>
			</div>
			<div>
				<BusinessDetails />
			</div>
		</div>
	);
};

export default ContactFormMap;
