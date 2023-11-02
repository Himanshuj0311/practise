const Flight = require('../models/flightModel');

// Get all flights
async function getAllFlights() {
  try {
    const flights = await Flight.findAll();
    return flights;
  } catch (error) {
    throw error;
  }
}

// Create a new flight
async function createFlight(flightData) {
  try {
    const newFlight = await Flight.create(flightData);
    return newFlight;
  } catch (error) {
    throw error;
  }
}

// Other flight-related service functions...

module.exports = { getAllFlights, createFlight };
