// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const path = require('path'); // To handle file paths

const PORT = 8080;

// Serve the homepage by serving up the index.html file from the public folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.json(pets); // send the pets array as a response
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.query.owner; // get the owner from the request

    // find the pets owned by the owner in the pets array
    const petsByOwner = pets.filter(pet => pet.owner === owner);

    res.json(petsByOwner); // send the pets as a response
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name; // get the name from the request

    // find the pet by name in the pets array
    const pet = pets.find(pet => pet.name === name);

    if (pet) {
        res.json(pet); // send the pet as a response
    } else {
        res.status(404).json({ error: 'Pet not found' }); // send an appropriate error message if the pet is not found
    }
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;

// Import required modules
const express = require('express');
const app = express();

const pets = require('./data'); 


// GET - all pets
app.get('/api/v1/pets', (req, res) => {
    // Logic to retrieve all pets
});

// GET - pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // Logic to retrieve a pet by name
});

// Start the server
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Define a route to get a pet by its owner's name using a query string
app.get('/api/v1/pets/owner', (req, res) => {
    const ownerName = req.query.owner; // Extract the 'owner' parameter from the query string

    // Find the pet in the pets array by its owner's name
    const pet = pets.find(pet => pet.owner === ownerName);

    if (pet) {
        res.json(pet); // Send the pet as a JSON response
    } else {
        res.status(404).json({ error: 'Pet not found' }); // Send an appropriate error message if the pet is not found
    }
});
