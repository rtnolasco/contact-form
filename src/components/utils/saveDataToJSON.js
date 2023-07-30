const fs = require('fs');
const path = require('path');

// Function to save form data to a JSON file in MySQL-like format
const saveDataToJSON = (formData) => {
	const jsonData = {
		data: [],
	};

	try {
		// Read the existing JSON file if it exists
		const filePath = path.join(__dirname, 'data.json');
		if (fs.existsSync(filePath)) {
			const fileData = fs.readFileSync(filePath, 'utf8');
			jsonData.data = JSON.parse(fileData).data;
		}

		// Append the new form data to the existing JSON data
		jsonData.data.push(formData);

		// Write the updated JSON data back to the file
		fs.writeFileSync(
			filePath,
			JSON.stringify(jsonData, null, 2),
			'utf8'
		);

		console.log(
			'Form data saved to data.json successfully!'
		);
	} catch (err) {
		console.error(
			'Error saving form data to data.json:',
			err
		);
	}
};

module.exports = saveDataToJSON;
