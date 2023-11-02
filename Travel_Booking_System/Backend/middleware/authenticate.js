// Example authentication middleware
function authenticate(req, res, next) {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
      return next(); // User is authenticated, continue
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
  
  module.exports = { authenticate };
  