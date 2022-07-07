const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');

// Get all villas
router.get('/google', async (req, res) => {
  try {
    let placeId = 'ChIJQzgXO78j0i0RoUhHE4pC6_E';
    let {
      data: {
        result: { reviews },
      },
    } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GOOGLE_API_KEY}&placeid=${placeId}`
    );
    return res.status(200).send(reviews);
  } catch (err) {
    console.log({ err });
    res.status(400).send({ err });
  }
});

module.exports = router;
