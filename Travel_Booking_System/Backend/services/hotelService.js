const Hotel = require('../models/hotelModel');

// Get all hotels
async function getAllHotels() {
  try {
    const hotels = await Hotel.findAll();
    return hotels;
  } catch (error) {
    throw error;
  }
}

// Create a new hotel
async function createHotel(hotelData) {
  try {
    const newHotel = await Hotel.create(hotelData);
    return newHotel;
  } catch (error) {
    throw error;
  }
}

// Other hotel-related service functions...

module.exports = { getAllHotels, createHotel };
