
// GET - all pets
app.get('/api/v1/pets', (req, res) => {
    // Retrieve all pets data from the database
    // Example: const allPets = PetModel.find();
    // Send the retrieved data as a response in JSON format
    // Example: res.json(allPets);
});

// GET - pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // Extract the 'name' parameter from the request
    // Example: const petName = req.params.name;
    // Query the database to find the pet with the provided name
    // Example: const pet = PetModel.findOne({ name: petName });
    // If the pet is found, send the pet data as a response in JSON format
    // Example: res.json(pet);
    // If the pet is not found, send an appropriate error message
    // Example: res.status(404).json({ error: 'Pet not found' });
});

// GET - pet by owner name
app.get('/api/v1/pets/owner', (req, res) => {
    // Extract the owner's name from the query string parameters
    // Example: const ownerName = req.query.owner;
    // Query the database to find pets owned by the provided owner's name
    // Example: const petsByOwner = PetModel.find({ owner: ownerName });
    // If pets are found, send the pet data as a response in JSON format
    // Example: res.json(petsByOwner);
    // If no pets are found, send an appropriate error message
    // Example: res.status(404).json({ error: 'No pets found for the owner' });
});

// STRETCH GOAL - Serve Home Page
app.get('/', (req, res) => {
    // Serve an `index.html` or React application that renders the data in the browser
    // Ensure that the frontend application fetches data from the previously defined API endpoints
});
