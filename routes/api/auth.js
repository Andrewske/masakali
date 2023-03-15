const express = require('express');
const router = express.Router();
const url = require('url');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
let clientUrl = config.get('clientUrl');
const { check, validationResult } = require('express-validator');
const passport = require('passport');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Reservation = require('../../models/Reservation');

router.all('*', (req, res, next) => {
  const origin = req.headers.host;
  if (origin.match(/(staging)/g)) {
    clientUrl = 'https://staging.masakaliretreat.com';
  }
  return next();
});

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  //auth middleware
  try {
    let userId = req.user.id;
    let user = await User.findById(userId).select('-password').lean();
    const reservation = await Reservation.find({ userId: userId });

    if (reservation) {
      console.log('reservation');
      user.reservations = { past: reservation };
    }
    console.log(user);

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate User
// @access  Public
router.post(
  '/',
  express.json(),
  [
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/auth
// @desc    Test route
// @access  Public

router.post('/reset-password', express.json(), async (req, res) => {
  let { userId, password } = req.body;

  try {
    let user = await User.findOne({ _id: userId });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    console.log(user);

    await user.save();
    return res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error({ location: '/reset-password', message: err.message });
  }
});

router.get('/login/success', express.json(), (req, res) => {
  if (req.user) {
    res.status(200).json({
      user: req.user,
    });
  } else {
    res.status(422).json({
      error: 'Login failed',
    });
  }
});

router.get('/google', (req, res, next) => {
  const returnTo = url.parse(req.url, true).query.redirect;
  const state = returnTo
    ? Buffer.from(JSON.stringify({ returnTo })).toString('base64')
    : undefined;

  const authenticator = passport.authenticate('google', {
    callbackURL: '/api/auth/google/callback',
    scope: ['profile', 'email'],
    state,
  });

  authenticator(req, res, next);
});

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: clientUrl,
    callbackURL: '/api/auth/google/callback',
  }),
  (req, res) => {
    try {
      const { state } = req.query;
      const { returnTo } = JSON.parse(Buffer.from(state, 'base64').toString());
      if (typeof returnTo === 'string') {
        return res.redirect(clientUrl + '/' + returnTo);
      }
    } catch {
      // just redirect normally below
      console.log('error');
    }
    res.redirect(clientUrl);
  }
);

module.exports = router;
