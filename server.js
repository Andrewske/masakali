const express = require('express');

var compression = require('compression');
const passport = require('passport');
const connectDB = require('./config/db');
const cors = require('cors');
const session = require('express-session');
const cookieSession = require('cookie-session');
const config = require('config');
const clientUrl = config.get('clientUrl');
console.log({ clientUrl: clientUrl });
const path = require('path');

const app = express();

connectDB();

// app.use(
//   cors({
//     origin: ['https://www.masakaliretreat.com', 'http://localhost:3000'],
//     credentials: true,
//     methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  );
  next();
});

// Sessions
// app.use(
//   session({
//     secret: 'bali is fun',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: true },
//   })
// );

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  require('dotenv').config({ path: './.env' });
}

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
