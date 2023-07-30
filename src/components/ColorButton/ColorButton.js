// ColorButton.js
import React from 'react';
import './ColorButton.css';

const ColorButton = ({ label, isActive, onClick }) => {
	const handleClick = () => {
		onClick(label);
	};

	const buttonStyles = {
		backgroundColor: isActive ? '#BEB185' : '#1A1A1A',
		color: isActive ? '#FFFFFF' : '#BEB185',
		border: isActive ? 'none' : '1px solid #BEB185',
	};

	return (
		<button
			className="color-button"
			style={buttonStyles}
			onClick={handleClick}
		>
			{label}
		</button>
	);
};

export default ColorButton;
