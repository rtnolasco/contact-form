import React, { useState } from 'react';

import './ContactFormFields.css';
import emailjs from 'emailjs-com';
import axios from 'axios';
// const saveDataToJSON = require('../utils/saveDataToJSON');

const ContactFormFields = () => {
	// const history = useHistory();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	// console.log(formData);
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setErrors({
			...errors,
			[e.target.name]: validateField(
				e.target.name,
				e.target.value
			),
		});
		setSuccessMessage(''); // Clear success message when the user starts typing again
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Save the form data to the backend server
			const formDataJSON = JSON.stringify(formData);

			// axios.post('http://localhost:5200/api/saveFormData', formData);
			await axios.post(
				'http://localhost:5200/api/saveFormData',
				formDataJSON,
				{
					headers: {
						'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
					},
				}
			);
			setIsSubmitted(true);
			console.log('Data has been saved');
		} catch (error) {
			console.error('Error saving form data:', error);
		}

		// service_au0lzje
		emailjs
			.send(
				'service_au0lzje',
				'template_5vh225l',
				formData,

				'oOlRF8mNTJTQdiihk'
			)

			.then(
				(response) => {
					console.log('SUCCESS...', response);
				},
				(error) => {
					console.log('FAILED...', error);
				}
			);

		const newErrors = validateForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			// submission
			// show the success message and reset the form after.
			setSuccessMessage(
				'THANK YOU! PLEASE CHECK YOUR INBOX!'
			);

			setTimeout(() => {
				setFormData({
					name: '',
					email: '',
					phone: '',
					message: '',
				});
				setSuccessMessage('');
			}, 2000);
		}
	};

	const validateForm = (data) => {
		const errors = {};
		if (!data.name.trim()) {
			errors.name = 'Name is required';
		}
		if (!data.email.trim()) {
			errors.email = 'Email is required';
		} else if (!isValidEmail(data.email)) {
			errors.email = 'Invalid email format';
		}
		if (!data.phone.trim()) {
			errors.phone = 'Phone is required';
		} else if (!isValidPhone(data.phone)) {
			errors.phone = 'Invalid phone format';
		}
		if (!data.message.trim()) {
			errors.message = 'Message is required';
		}
		return errors;
	};

	const validateField = (fieldName, value) => {
		switch (fieldName) {
			case 'name':
				return value.trim() ? '' : 'Name is required';
			case 'email':
				return value.trim()
					? isValidEmail(value)
						? ''
						: 'Invalid email format'
					: 'Email is required';
			case 'phone':
				return value.trim()
					? isValidPhone(value)
						? ''
						: 'Invalid phone format'
					: 'Phone is required';
			case 'message':
				return value.trim() ? '' : 'Message is required';
			default:
				return '';
		}
	};

	const isValidEmail = (email) => {
		//  email validation logic here.
		// Check the email format.
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const isValidPhone = (phone) => {
		// phone validation logic
		// check the phone format
		const phonePattern = /^[0-9]{10,}$/;
		return phonePattern.test(phone);
	};

	return (
		<div className="contact-form-fields">
			<h2>
				Have ANY questions? FEEL FREE TO drop US a line
			</h2>
			{successMessage ? (
				<div className="success-message">
					{successMessage}
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className="contact-form"
				>
					<div className="form-group">
						<label htmlFor="name">Name *</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className={`form-input ${
								errors.name ? 'error' : ''
							}`}
						/>
						{errors.name && (
							<div className="error-message">
								{errors.name}
							</div>
						)}
					</div>
					<div className="form-group">
						<label htmlFor="email">Email *</label>
						<input
							type="text"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className={`form-input ${
								errors.email ? 'error' : ''
							}`}
						/>
						{errors.email && (
							<div className="error-message">
								{errors.email}
							</div>
						)}
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone *</label>
						<input
							type="text"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className={`form-input ${
								errors.phone ? 'error' : ''
							}`}
						/>
						{errors.phone && (
							<div className="error-message">
								{errors.phone}
							</div>
						)}
					</div>
					<div className="form-group full-width">
						<label htmlFor="message">Message *</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							className={`form-input message ${
								errors.message ? 'error' : ''
							}`}
						></textarea>
						{errors.message && (
							<div className="error-message">
								{errors.message}
							</div>
						)}
					</div>
					<button type="submit" className="submit-button">
						Send Message
					</button>
				</form>
			)}
		</div>
	);
};

export default ContactFormFields;
