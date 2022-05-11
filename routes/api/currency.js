const express = require('express');
const router = express.Router();
const axios = require('axios');
const getCurrency = require('../../components/currency');

router.get('/', express.json(), async (req, res) => {
  try {
    let data = await getCurrency();
    res.status(200).send(data);
  } catch (err) {
    console.error('Currency Error', err);
    res.status(422).send({ err });
  }
});

module.exports = router;
