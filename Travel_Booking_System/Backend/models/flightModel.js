const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Import your Sequelize configuration

const Flight = sequelize.define("Flight", {
    // Define the Flight model attributes (fields)
    flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
});

// Define associations (e.g., Flight.belongsTo(Airline), Flight.hasMany(Booking))
// if your application requires them

module.exports = Flight;
