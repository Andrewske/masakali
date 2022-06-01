const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const Reservation = require('../../models/Reservation');
const User = require('../../models/User');

router.post('/sendConfirmation', express.json(), async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    const {
      id,
      email,
      name,
      villaName,
      startDate,
      endDate,
      price,
      numDays,
      discount,
      total,
    } = req.body;

    const msg = {
      to: email,
      from: 'admin@masakaliretreat.com',
      templateId: 'd-df670819866341e3b360ea6a373e429e',
      dynamicTemplateData: {
        name,
        villaName,
        startDate,
        endDate,
        price,
        numDays,
        discount,
        total,
      },
    };

    let response = await sgMail.send(msg);

    let reservation = await Reservation.findOne({ _id: id });

    if (reservation) {
      reservation.sentEmail = true;
      await reservation.save();
    }

    res.status(200).send({ data: response });
  } catch (err) {
    console.log('sendGrid', { err });
    res.status(400).json({ error: err.message });
  }
});

router.post('/sendPasswordReset', express.json(), async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  let { email } = req.body;

  try {
    let user = await User.findOne({ email });

    let msg = {
      to: email,
      from: 'admin@masakaliretreat.com',
      templateId: 'd-ff9cc309289b4280b404a41848ccbb68',
      dynamicTemplateData: {
        name: user.name,
        userId: user._id,
        email,
      },
    };

    let response = await sgMail.send(msg);

    res.status(200).send({ data: response });
  } catch (err) {
    console.log('sendPasswordReset', { err });
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
