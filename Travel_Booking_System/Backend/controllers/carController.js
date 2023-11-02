const Car = require('../models/carModel');

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new car
exports.createCar = async (req, res) => {
  const { make, model, capacity, pricePerDay } = req.body;
  try {
    const car = await Car.create({ make, model, capacity, pricePerDay });
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a car by ID
exports.updateCar = async (req, res) => {
  const { id } = req.params;
  const { make, model, capacity, pricePerDay } = req.body;
  try {
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    car.make = make;
    car.model = model;
    car.capacity = capacity;
    car.pricePerDay = pricePerDay;
    await car.save();
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    await car.destroy();
    res.status(204).send(); // No content after successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
