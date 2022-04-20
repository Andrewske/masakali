const express = require('express');

var compression = require('compression');
const passport = require('passport');
const connectDB = require('./config/db');

const session = require('express-session');
const cookieSession = require('cookie-session');
const config = require('config');
const clientUrl = config.get('clientUrl');
const path = require('path');

const app = express();

const cors = require('cors');
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://www.masakaliretreat.com',
      'https://masakaliretreat.com',
    ],
    credentials: true,
  })
);
//app.options('*', cors());

connectDB();

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
app.use('/api/smoobu', require('./routes/api/smoobu'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
