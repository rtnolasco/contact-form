import React from 'react';
import './BusinessDetails.css';

const BusinessDetails = () => {
	return (
		<div className="contact-info-container">
			<div className="left-column">
				<div className="address">
					<h3>ADDRESS</h3>
					<p>
						Tsakalof 15, Kolonaki, Limassol, Cypruss, 22033
					</p>
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
					<p> +30 210 3635 457</p>
				</div>
				<div className="address">
					<h3>EMAIL</h3>
					<p>info@century21.com</p>
				</div>
			</div>
		</div>
	);
};

export default BusinessDetails;
