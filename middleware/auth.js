const jwt = require('jsonwebtoken');
const config = require('config');
const url = require('url');
module.exports = function (req, res, next) {
  console.log('auth middleware');
  const token = req.header('x-auth-token');
  const userId = url.parse(req.url, true).query.userId;

  if (userId) {
    console.log({ userId });
    req.user = { id: userId };
    next();
  } else {
    console.log('here');
    if (!token) {
      console.log('no token');
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      console.log({ decoded });
      req.user = decoded.user;
      next();
    } catch (err) {
      console.log(err);
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }
};
