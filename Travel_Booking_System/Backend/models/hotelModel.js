const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Import your Sequelize configuration

const Hotel = sequelize.define("Hotel", {
    // Define the Hotel model attributes (fields)
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pricePerNight: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    // Additional attributes as needed
});

// Define associations (e.g., Hotel.belongsTo(HotelChain), Hotel.hasMany(Booking))
// if your application requires them

module.exports = Hotel;
