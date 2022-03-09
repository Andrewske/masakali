const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Villa = require('../../models/Villa');

// Get all villas
router.get('/', async (req, res) => {
  try {
    let villas = await Villa.find();
    return res.status(200).send(villas);
  } catch (err) {
    console.log({ err });
    res.status(400).send({ err });
  }
});

// Get villa by name
router.get('/:name', async (req, res) => {
  try {
    let villa = await Villa.findOne({ name: req.params.name });
    if (villa) {
      return res.status(200).send(villa);
    }
  } catch (err) {
    console.log({ err });
  }
});

router.post('/add', express.json(), async (req, res) => {
  try {
    let {
      name,
      title = null,
      description = null,
      price = null,
      reducedPrice = null,
      datesReserved = [],
    } = req.body;

    name = name.toLowerCase();

    let data = { name, title, description, price, reducedPrice, datesReserved };

    let villa = await Villa.findOne({ name });

    if (villa) {
      let result = await Villa.updateOne(
        { name },
        { description, price, reducedPrice }
      );
      res.status(200).send(result.modifiedCount);
      return;
    }

    villa = new Villa(data);
    await villa.save();

    res.status(200).send(villa);
  } catch (err) {
    console.log({ err });
  }
});

module.exports = router;
