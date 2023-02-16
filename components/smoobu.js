const axios = require('axios');
const VillaRates = require('../models/VillaRates');
const config = require('config');
const blockedId = config.get('SMOOBU_BLOCKED_ID');
const apiKey = config.get('SMOOBU_API_KEY');
const moment = require('moment');

let reqConfig = {
  headers: {
    'Api-Key': apiKey,
    'Content-Type': 'appication/json',
    'Cache-Control': 'no-cache',
  },
};

module.exports.getBookings = async () => {
  try {
    const res = await axios.get(
      'https://login.smoobu.com/api/reservations',
      reqConfig
    );
    console.log(res);
  } catch (err) {
    console.error({ err });
  }
};

module.exports.getRates = async () => {
  try {
    reqConfig.params = {
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment().add(2, 'years').format('YYYY-MM-DD'),
      apartments: [suryaId, chandraId, jalaId, akashaId],
    };

    let {
      data: { data },
    } = await axios.get('https://login.smoobu.com/api/rates', reqConfig);

    data['surya'] = data[suryaId];
    data['chandra'] = data[chandraId];
    data['jala'] = data[jalaId];
    data['akasha'] = data[akashaId];

    delete data[suryaId];
    delete data[chandraId];
    delete data[jalaId];
    delete data[akashaId];

    return data;
  } catch (err) {
    console.error({ err });
    return null;
  }
};

module.exports.updateRates = async (data) => {
  try {
    let updates = [];
    for (const [villa, dates] of Object.entries(data)) {
      for (const [date, rates] of Object.entries(dates)) {
        let update = updates.findIndex((e) => e.date === date);
        if (update >= 0) {
          updates[update][villa] = rates.price;
        } else {
          updates.push({ date: date, [villa]: rates.price });
        }
      }
    }

    return await VillaRates.bulkWrite(
      updates.map((u) => ({
        updateOne: {
          filter: { date: u.date },
          update: {
            $set: {
              date: u.date,
              surya: u.surya,
              chandra: u.chandra,
              jala: u.jala,
              akasha: u.akasha,
            },
          },
          upsert: true,
          setDefaultsOnInsert: true,
        },
      }))
    );
  } catch (err) {
    console.error({ err });
    return null;
  }
};

module.exports.blockVillas = async ({ startDate, endDate, villas }) => {
  try {
    for (let i = 0; i < villas.length; i++) {
      let body = {
        arrivalDate: startDate,
        departureDate: endDate,
        channelId: blockedId,
        apartmentId: villas[i],
        notice: 'Akasha Booked',
        firstName: 'Masakali',
        lastName: 'Blocked',
        email: 'admin@masakaliretreat.com',
      };

      

      console.log({ reqConfig, body });

      let res = await axios.post(
        'https://login.smoobu.com/api/reservations',
        body,
        reqConfig
      );
      console.log({ res });
    }
  } catch (err) {
    console.error({
      response: err.response,
      data: err.response.data,
      headers: err.response.error,
      firstName: err.data.validation_messages,
    });
  }
};
