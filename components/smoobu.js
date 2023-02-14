const axios = require('axios');
const VillaRates = require('../models/VillaRates');
const config = require('config');
const blockedId = config.get('SMOOBU_BLOCKED_ID');

let reqConfig = {
  headers: {
    'Api-Key': process.env.SMOOBU_API_KEY,
  },
};

module.exports = getBookings = async () => {
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

module.exports = getRates = async () => {
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

module.exports = updateRates = async (data) => {
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

module.exports = blockVillas = async ({ startDate, endDate, villas }) => {
  try {
    reqConfig.params = {
      arrivalDate: startDate,
      departureDate: endDate,
      apartments: villas,
    };

    let {
      data: { data },
    } = await axios.get('https://login.smoobu.com/api/rates', reqConfig);
  } catch (err) {}
};
