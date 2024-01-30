// Import required modules
const express = require('express');
const app = express();

// Import your data or connect to your database
const pets = require('./data'); // Assuming you have a 'data.js' file exporting the pets array

// Define your routes
// GET - all pets
app.get('/api/v1/pets', (req, res) => {
    // Logic to retrieve all pets
});

// GET - pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // Logic to retrieve a pet by name
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
