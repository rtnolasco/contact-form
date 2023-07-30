const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// POST route to save form data to a JSON file
app.post('/api/saveFormData', (req, res) => {
	try {
		const formData = req.body; //data is sent as JSON in the request body

		console.log(formData); // Log the form data received from the frontend

		// Read the existing data from data.json
		let jsonData = [];
		if (fs.existsSync('data.json')) {
			const existingData = fs.readFileSync(
				'data.json',
				'utf-8'
			);
			jsonData = JSON.parse(existingData);
		}

		// Ensure jsonData is an array
		if (!Array.isArray(jsonData)) {
			jsonData = [];
		}

		// Concatenate the new form data to the existing array
		jsonData = jsonData.concat(formData);

		// Write the updated data back to data.json
		fs.writeFileSync(
			'data.json',
			JSON.stringify(jsonData, null, 2)
		);

		res.json({
			success: true,
			message: 'Form data saved successfully!',
		});
	} catch (error) {
		console.error('Error saving form data:', error);
		res.status(500).json({
			success: false,
			message: 'Error saving form data',
		});
	}
});

// Start the server
const PORT = 5200;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
