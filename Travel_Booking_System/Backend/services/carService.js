const Car = require('../models/carModel');

// Get all cars
async function getAllCars() {
  try {
    const cars = await Car.findAll();
    return cars;
  } catch (error) {
    throw error;
  }
}

// Create a new car
async function createCar(carData) {
  try {
    const newCar = await Car.create(carData);
    return newCar;
  } catch (error) {
    throw error;
  }
}

// Other car-related service functions...

module.exports = { getAllCars, createCar };
