const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

// Define flight routes

// Get all flights
router.get('/', flightController.getAllFlights);

// Get a flight by ID
router.get('/:id', flightController.getFlightById);

// Create a new flight
router.post('/', flightController.createFlight);

// Update a flight by ID
router.put('/:id', flightController.updateFlight);

// Delete a flight by ID
router.delete('/:id', flightController.deleteFlight);

module.exports = router;
