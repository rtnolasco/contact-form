import React, { useState } from 'react';
import {
	GoogleMap,
	Marker,
	LoadScript,
} from '@react-google-maps/api';
import ColorButton from '../ColorButton/ColorButton';

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

	const offices = [
		{
			label: 'Paphos Office',
			coordinates: {
				lat: 34.736787186398466,
				lng: 33.11806258279454,
			},
			address:
				'Tsakalof 15, Kolonaki, Limassol, Cypruss, 22033',
		},
		{
			label: 'Limassol Office',
			coordinates: {
				lat: 35.37109458698558,
				lng: 33.35211614703572,
			},
			address: 'Amathountos 58, Agios Tychon 4532, Cyprus',
		},
		{
			label: 'Island Kuzey',
			coordinates: {
				lat: 35.16203568659566,
				lng: 33.35991982042725,
			},
			address: 'Ali nasit sokak, Karakum 99320, Cyprus',
		},
	];

	// Set the first office as the default office
	const defaultOffice = offices[0];

	const [activeButton, setActiveButton] = useState(
		defaultOffice.label
	);
	const [selectedAddress, setSelectedAddress] = useState(
		defaultOffice.address
	);
	const [
		selectedCoordinates,
		setSelectedCoordinates,
	] = useState(defaultOffice.coordinates);

	const handleButtonClick = (label) => {
		setActiveButton(label);
		// Find the address and coordinates for the selected office label and set them in the state
		const selectedOffice = offices.find(
			(office) => office.label === label
		);
		if (selectedOffice) {
			setSelectedAddress(selectedOffice.address);
			setSelectedCoordinates(selectedOffice.coordinates);
		}
	};

	return (
		<div className="map-container">
			<h2>find us IN ONE OF THREE OFFICES IN CYPRUS:</h2>
			<LoadScript googleMapsApiKey="">
				<div style={mapStyles}>
					<GoogleMap
						mapContainerStyle={{
							width: '100%',
							height: '100%',
						}}
						center={selectedCoordinates || defaultCenter}
						zoom={9}
					>
						{selectedCoordinates && (
							<Marker position={selectedCoordinates} />
						)}
					</GoogleMap>
				</div>
			</LoadScript>

			<div className="button-container">
				{offices.map((office) => (
					<ColorButton
						key={office.label}
						label={office.label}
						isActive={activeButton === office.label}
						onClick={() => handleButtonClick(office.label)}
					/>
				))}
			</div>

			<div className="contact-info-container">
				<div className="left-column">
					<div className="address">
						<h3>ADDRESS</h3>
						<p>{selectedAddress}</p>
					</div>
					<div className="address">
						<h3>Business Hours</h3>
						<p>Mon to Fri: 9:00 AM - 6:00 PM</p>
					</div>
				</div>
				<div className="right-column">
					<div className="address">
						<h3>PHONE</h3>
						<p>+30 210 3635 457</p>
						<p>+30 210 3635 457</p>
					</div>
					<div className="address">
						<h3>EMAIL</h3>
						<p>info@century21.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactFormMap;
