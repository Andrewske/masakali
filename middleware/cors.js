const cors = require('cors');

const whitelist = [
  'http://localhost:3000',
  'https://www.masakaliretreat.com',
  'https://masakaliretreat.com',
  'https://staging.masakaliretreat.com',
  'staging.masakaliretreat.com',
];

module.exports =
  (enabled = true) =>
  (req, res, next) => {
    const options = {
      origin(origin, callback) {
        if (!origin) {
          callback(null, true);
          return;
        }
        const originIsWhitelisted = enabled
          ? whitelist.indexOf(origin) !== -1
          : true;
        if (originIsWhitelisted) {
          console.log('cors runs');
          callback(null, originIsWhitelisted);
          return;
        }
        callback({
          statusCode: 401,
          error: 'Not allowed',
        });
      },
    };
    return cors(options)(req, res, next);
  };
