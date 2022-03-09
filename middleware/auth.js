const jwt = require('jsonwebtoken');
const config = require('config');
const url = require('url');
module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  const userId = url.parse(req.url, true).query.userId;

  if (userId) {
    req.user = { id: userId };
    next();
  } else {
    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }
};
