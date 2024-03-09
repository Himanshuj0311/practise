// backend/middlewares/authenticator.js
const jwt = require('jsonwebtoken');
const userModel = require('../model/user');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    const decoded = jwt.verify(token, 'token'); // Replace with your secret key

//    const user = await userModel.findOne({ _id: decoded._id });

//     if (!user) {
      
//     }

//     req.user = user;
     req.token = token;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = {authenticate};
