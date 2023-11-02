const Flight = require('../models/flightModel');

// Get all flights
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.findAll();
    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a flight by ID
exports.getFlightById = async (req, res) => {
  const { id } = req.params;
  try {
    const flight = await Flight.findByPk(id);
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    res.json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new flight
exports.createFlight = async (req, res) => {
  const { flightNumber, origin, destination, departureTime, price } = req.body;
  try {
    const flight = await Flight.create({ flightNumber, origin, destination, departureTime, price });
    res.status(201).json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a flight by ID
exports.updateFlight = async (req, res) => {
  const { id } = req.params;
  const { flightNumber, origin, destination, departureTime, price } = req.body;
  try {
    const flight = await Flight.findByPk(id);
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    flight.flightNumber = flightNumber;
    flight.origin = origin;
    flight.destination = destination;
    flight.departureTime = departureTime;
    flight.price = price;
    await flight.save();
    res.json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a flight by ID
exports.deleteFlight = async (req, res) => {
  const { id } = req.params;
  try {
    const flight = await Flight.findByPk(id);
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    await flight.destroy();
    res.status(204).send(); // No content after successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
