const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const Error = require('../../models/Error');

router.get('/users', async (req, res) => {
  try {
    let users = await User.find();

    res.status(200).send(users);
  } catch (err) {
    console.error({ err });
    res.status(422).send(err.message);
  }
});

router.get('/errors', async (req, res) => {
  try {
    let errors = await Error.find();

    res.status(200).send(errors);
  } catch (err) {
    console.error({ err });
    res.status(422).send(err.message);
  }
});

module.exports = router;
