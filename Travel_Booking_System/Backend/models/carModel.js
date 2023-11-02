const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Import your Sequelize configuration

const Car = sequelize.define("Car", {
    // Define the Car model attributes (fields)
    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pricePerDay: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    // Additional attributes as needed
});

// Define associations (e.g., Car.belongsTo(RentalCompany), Car.hasMany(Booking))
// if your application requires them

module.exports = Car;
