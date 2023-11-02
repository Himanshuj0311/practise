const Hotel = require('../models/hotelModel');

// Get all hotels
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a hotel by ID
exports.getHotelById = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new hotel
exports.createHotel = async (req, res) => {
  const { name, location, pricePerNight } = req.body;
  try {
    const hotel = await Hotel.create({ name, location, pricePerNight });
    res.status(201).json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a hotel by ID
exports.updateHotel = async (req, res) => {
  const { id } = req.params;
  const { name, location, pricePerNight } = req.body;
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    hotel.name = name;
    hotel.location = location;
    hotel.pricePerNight = pricePerNight;
    await hotel.save();
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a hotel by ID
exports.deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    await hotel.destroy();
    res.status(204).send(); // No content after successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
