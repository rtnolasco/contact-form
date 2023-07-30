import React from 'react';
import ContactFormFields from '../ContactFormFields/ContactFormFields';
// import ContactFormTabs from '../ContactFormTabs/ContactFormTabs';
import ContactFormMap from '../ContactFormMap/ContactFormMap';
import './ContactForm.css';

const ContactForm = () => {
	return (
		<div className="contact-form-container">
			<div className="contact-form-title">
				<h3>Century 21 CYPRUS</h3>
				<h1>CONTACT</h1>
			</div>
			<div className="contact-form-wrapper">
				<ContactFormMap />
				<ContactFormFields />
			</div>
			{/* 
			<ContactFormTabs /> */}
		</div>
	);
};

export default ContactForm;
