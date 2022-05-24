const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Error = require('../../models/Error');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  express.json(),
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    let name = firstName + ' ' + lastName;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists, please login' }] });
      }

      user = new User({
        name,
        firstName,
        lastName,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

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

router.post('/update', express.json(), async (req, res) => {
  try {
    const { userId, billingDetails = null, isDefault = false } = req.body;

    const user = await User.findOne({ _id: userId });

    if (billingDetails) {
      if (isDefault || !user?.address?.city) {
        user.address = billingDetails.address;
        user.save();
      }
    }

    res.status(200).json(user);
  } catch (err) {
    console.error({ err });
    res.status(500).send({ err });
  }
});

router.post('/error', express.json(), async (req, res) => {
  let error = req.body?.error || null;
  let userId = req.body?.userId || null;

  try {
    const err = new Error({
      error,
      userId,
    });
    err.save();
    console.log(err);
    res.status(200).send(err);
  } catch (err) {
    console.error({ err });
    res.status(500).send({ err });
  }
});

module.exports = router;
