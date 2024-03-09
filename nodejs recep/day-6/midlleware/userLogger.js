// backend/middlewares/userLogger.js
const fs = require('fs');

const userLogger = (req, res, next) => {
  try {
    const logData = `${req.users} (${req.users}) logged in at ${new Date().toISOString()}\n`;
    fs.appendFileSync('log.txt', logData);
    next();
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error: 'Internal Server Error.' });
  }
};

module.exports = {userLogger};
