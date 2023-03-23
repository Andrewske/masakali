const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const Reservation = require('../../models/Reservation');
const User = require('../../models/User');

const retreatBookingEmailTemplate = 'd-60fce1dc0ea0423c92948e59fb505a6e';
const villaBookingEmailTemplate = 'd-df670819866341e3b360ea6a373e429e';

router.post('/sendBookingConfirmation', express.json(), async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  console.log('sending email confirmation');

  let templateId = req.body.isRetreat
    ? retreatBookingEmailTemplate
    : villaBookingEmailTemplate;

  try {
    const msg = {
      to: req.body.email,
      from: 'admin@masakaliretreat.com',
      templateId,
      dynamicTemplateData: req.body,
    };

    let response = await sgMail.send(msg);

    let reservation = await Reservation.findOne({ _id: req.body.id });

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

const retreatAdminConfirmationTemplate = 'd-160be2ec97de4fe8bd9a0702c9d3383f';
const villaAdminBookingEmailTemplate = 'd-56beee67bc0245539a249c95b72c11a9';

router.post(
  '/sendAdminBookingConfirmation',
  express.json(),
  async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log(req?.body);
    let templateId = req.body.isRetreat
      ? retreatAdminConfirmationTemplate
      : villaAdminBookingEmailTemplate;
    try {
      const msg = {
        to: ['andrewskevin92@gmail.com', 'admin@masakaliretreat.com'],
        from: 'admin@masakaliretreat.com',
        templateId: templateId,
        dynamicTemplateData: req.body,
      };

      let response = await sgMail.send(msg);

      res.status(200).send({ data: response });
    } catch (err) {
      console.log('sendGrid', { err });
      res.status(400).json({ error: err.message });
    }
  }
);

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
