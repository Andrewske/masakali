const express = require('express');

var compression = require('compression');
const passport = require('passport');
const connectDB = require('./config/db');

const session = require('express-session');
const cookieSession = require('cookie-session');
const config = require('config');
const clientUrl = config.get('clientUrl');
const path = require('path');
//const cors = require('./middleware/cors');
const app = express();
// const cors = require('cors');

// app.use(cors());

const whitelist = [
  'http://localhost:3000',
  'https://www.masakaliretreat.com',
  'https://masakaliretreat.com',
  'https://staging.masakaliretreat.com',
  'https://staging.masakaliretreat.com/',
  'staging.masakaliretreat.com',
];

app.use('*', (req, res, next) => {
  var origin = req.headers.origin || req.headers.referer;
  if (whitelist.indexOf(origin) != -1) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', [
    'Content-Type',
    'X-Requested-With',
    'X-HTTP-Method-Override',
    'Accept',
  ]);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Cache-Control', 'no-store,no-cache,must-revalidate');
  res.header('Vary', 'Origin');
  if (req.method === 'OPTIONS') {
    res.status(200).send('');
    return;
  }
  next();
});

// app.use((req, res, next) => {
//   const origin = req.headers.origin || req.headers.referer;
//   console.log({ headers: req.headers });
//   if (whitelist.includes(origin)) {
//     console.log('setting origin', origin);
//     origin.endsWith('/') ? origin.slice(0, -1) : origin;
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials', true);

//   return next();
// });

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: './.env' });
}
// } else {
//   app.use(
//     cors({
//       origin: [
//         'http://localhost:3000',
//         'https://www.masakaliretreat.com',
//         'https://masakaliretreat.com',
//         'https://staging.masakaliretreat.com',
//         'staging.masakaliretreat.com',
//       ],
//       credentials: true,
//     })
//   );
//   app.options(
//     '*',
//     cors({
//       origin: [
//         'http://localhost:3000',
//         'https://www.masakaliretreat.com',
//         'https://masakaliretreat.com',
//         'https://staging.masakaliretreat.com',
//         'staging.masakaliretreat.com',
//       ],
//       credentials: true,
//     })
//   );
// }

// app.use(function (req, res, next) {
//   console.log(req.hostname);
//   if (req.hostname.endsWith('masakaliretreat.com')) {
//     res.setHeader('Access-Control-Allow-Origin', 'https://' + req.hostname);
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'X-Requested-With, Content-Type'
//     );
//     res.setHeader(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     res.header('Access-Control-Allow-Credentials', 'true');
//   }
//   next();
// });

// var whitelist = [
//   'http://localhost:3000',
//   'https://www.masakaliretreat.com',
//   'https://masakaliretreat.com',
//   'https://staging.masakaliretreat.com',
//   'staging.masakaliretreat.com',
// ];

// app.use(function (req, res, next) {
//   console.log({ origin: req.headers.origin, host: req.headers.host });
//   req.headers.origin = req.headers.origin || req.headers.host;
//   next();
// });

// var corsOptions = {
//   origin: function (origin, callback) {
//     console.log({ origin });
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log('Yes');
//       callback(null, true);
//     } else {
//       console.log('No');
//       callback(new Error('Not allowed by CORS'), true);
//     }
//   },
//   credentials: true,
// };

// app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: [
//       'http://localhost:3000',
//       'https://www.masakaliretreat.com',
//       'https://masakaliretreat.com',
//       'https://staging.masakaliretreat.com',
//       'staging.masakaliretreat.com',
//     ],
//     credentials: true,
//   })
// );
// app.options(
//   '*',
//   cors({
//     origin: [
//       'http://localhost:3000',
//       'https://www.masakaliretreat.com',
//       'https://masakaliretreat.com',
//       'https://staging.masakaliretreat.com',
//       'staging.masakaliretreat.com',
//     ],
//     credentials: true,
//   })
// );

connectDB();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET],
  })
);

// Passport Config
require('./config/passport')(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(compression());

// Init Middleware
//app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/villas', require('./routes/api/villas'));
app.use('/api/currency', require('./routes/api/currency'));
app.use('/api/reservations', require('./routes/api/reservations'));
app.use('/api/stripe/customer', require('./routes/api/stripe/customer'));
app.use('/api/stripe/payment', require('./routes/api/stripe/payment'));
app.use('/api/stripe/webhook', require('./routes/api/stripe/webhook'));
app.use('/api/smoobu', require('./routes/api/smoobu'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
