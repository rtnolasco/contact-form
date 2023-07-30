import React from 'react';
// import image from '../../assets/offices-img-1 1.png';
import './HeroBanner.css';
import cen21Logo from '../../assets/Vector.png';

const HeroBanner = () => {
	return (
		<div className="hero-image">
			<div className="cen21-logo">
				<img src={cen21Logo} alt=" " />
			</div>
		</div>
	);
};

export default HeroBanner;
