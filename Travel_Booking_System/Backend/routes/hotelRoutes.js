const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Define hotel routes

// Get all hotels
router.get('/', hotelController.getAllHotels);

// Get a hotel by ID
router.get('/:id', hotelController.getHotelById);

// Create a new hotel
router.post('/', hotelController.createHotel);

// Update a hotel by ID
router.put('/:id', hotelController.updateHotel);

// Delete a hotel by ID
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;
