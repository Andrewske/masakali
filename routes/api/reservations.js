const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Reservation = require('../../models/Reservation');
const Villa = require('../../models/Villa');

// Get all reservations by name
router.get('/', async (req, res) => {
  try {
    const { name, startDate = null, endDate = null, userId = null } = req.query;
    let filter = {
      name,
      ...(startDate && { startDate: { $gte: new Date(startDate) } }),
      ...(endDate && { endDate: { $lte: new Date(endDate) } }),
      ...(userId && { userId }),
    };
    let reservations = await Reservation.find(filter);
    return res.status(400).send(reservations);
  } catch (err) {
    console.log({ err });
    res.status(400).send({ err });
  }
});

// Add reservation
router.post('/add', express.json(), async (req, res) => {
  try {
    let {
      startDate,
      endDate,
      name,
      amount,
      guests,
      source = null,
      userId = null,
    } = req.body;

    name = name.toLowerCase();

    const data = { startDate, endDate, name, amount, source, userId, guests };

    let reservation = await new Reservation(data);

    await reservation.save();

    await Villa.update(
      { name },
      { $push: { datesReserved: { startDate, endDate } } }
    );

    res.status(200).send(reservation);
  } catch (err) {
    console.log({ err });
    res.status(400).send({ err });
  }
});

// Update reservation
router.post('/update', express.json(), async (req, res) => {
  try {
    let { reservationId, stripeId = null } = req.body;

    let reservation = await Reservation.findOne({ _id: reservationId });

    if (stripeId) {
      reservation.stripeId = stripeId;
    }

    reservation.save();

    res.status(200).send(reservation);
  } catch (err) {
    console.error({ err });
    res.status(422).json({ err });
  }
});

// Delete reservation

module.exports = router;