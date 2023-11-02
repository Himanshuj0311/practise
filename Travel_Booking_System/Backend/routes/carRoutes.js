const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Define car routes

// Get all cars
router.get('/', carController.getAllCars);

// Get a car by ID
router.get('/:id', carController.getCarById);

// Create a new car
router.post('/', carController.createCar);

// Update a car by ID
router.put('/:id', carController.updateCar);

// Delete a car by ID
router.delete('/:id', carController.deleteCar);

module.exports = router;
