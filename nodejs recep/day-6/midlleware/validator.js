// backend/middlewares/validator.js
const validateRole = (requiredRole) => {
    return async (req, res, next) => {
      try {
        if (!req.users || req.users.role !== requiredRole) {
          throw new Error();
        }
        next();
      } catch (error) {
        res.status(403).send({ error: 'Access forbidden. Insufficient privileges.' });
      }
    };
  };
  
  module.exports = {validateRole};
  