const cors = require('cors');

const whitelist = [
  'http://localhost:3000',
  'https://www.masakaliretreat.com',
  'https://masakaliretreat.com',
  'https://staging.masakaliretreat.com',
  'staging.masakaliretreat.com',
];

// module.exports =
//   (enabled = true) =>
//   (req, res, next) => {
//     const options = {
//       credentials: true,

//       origin(origin, callback) {
//         if (!origin) {
//           callback(null, true);
//           return;
//         }
//         const originIsWhitelisted = enabled
//           ? whitelist.indexOf(origin) !== -1
//           : true;
//         if (originIsWhitelisted) {
//           console.log('cors runs');
//           callback(null, originIsWhitelisted);
//           return;
//         }
//         callback({
//           statusCode: 401,
//           error: 'Not allowed',
//         });
//       },
//     };
//     return cors(options)(req, res, next);
//   };

// module.exports = (req, res, next) => {
//   const origin = req.headers.origin;
//   console.log({ origin });
//   if (whitelist.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials', true);
//   return next();
// };
