const axios = require('axios');
const VillaRates = require('../models/VillaRates');
const config = require('config');
const blockedId = config.get('SMOOBU_BLOCKED_ID');
const apiKey = process.env.SMOOBU_API_KEY;
const moment = require('moment');
const suryaId = config.get('SMOOBU_SURYA_ID');
const chandraId = config.get('SMOOBU_CHANDRA_ID');
const jalaId = config.get('SMOOBU_JALA_ID');
const akashaId = config.get('SMOOBU_AKASHA_ID');
const lakshmiId = config.get('SMOOBU_LAKSHMI_ID');

let villas = [suryaId, chandraId, jalaId, akashaId, lakshmiId];

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

const getDaysBetweenDates = (startDate, endDate) => {
  let dates = [];
  let now = moment(startDate);
  while (now.isSameOrBefore(moment(endDate).subtract(1, 'days'))) {
    dates.push(now.format('YYYY-MM-DD'));
    now.add(1, 'days');
  }
  return dates;
};

module.exports.formatBlockedDates = (bookings) => {
  let data = {};

  for (const villaId of villas) {
    let villaBookings = bookings.filter((b) => b.apartment.id === villaId);

    let name = villaBookings[0].apartment.name.toLowerCase();

    // checkInDates are when a guest arrives and are available for booking checkOutDates
    let checkInDates = Array(...new Set(villaBookings.map((b) => b.arrival)));

    // checkInDates < blockedDates < checkOutDates
    let blockedDates = Array(
      ...new Set(
        villaBookings
          .map((b) => getDaysBetweenDates(b.arrival, b.departure))
          .flat()
      )
    );

    data[name] = { checkInDates, blockedDates };
  }

  return data;
};

module.exports.getRates = async () => {
  try {
    reqConfig.params = {
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment().add(2, 'years').format('YYYY-MM-DD'),
      apartments: [suryaId, chandraId, jalaId, akashaId, lakshmiId],
    };

    let {
      data: { data },
    } = await axios.get('https://login.smoobu.com/api/rates', reqConfig);

    data['surya'] = data[suryaId];
    data['chandra'] = data[chandraId];
    data['jala'] = data[jalaId];
    data['akasha'] = data[akashaId];
    data['lakshmi'] = data[lakshmiId];

    delete data[suryaId];
    delete data[chandraId];
    delete data[jalaId];
    delete data[akashaId];
    delete data[lakshmiId];

    return data;
  } catch (err) {
    console.error({ err });
    return null;
  }
};

module.exports.updateRates = async (data) => {
  console.log(data)
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
              laskhmi: u.laskhmi,
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

module.exports.blockVillas = async ({
  startDate,
  endDate,
  villas,
  reservationId,
}) => {
  console.log({ startDate, endDate, villas, reservationId });
  try {
    for (let i = 0; i < villas.length; i++) {
      let body = {
        arrivalDate: startDate,
        departureDate: endDate,
        channelId: blockedId,
        apartmentId: villas[i],
        notice: reservationId,
        firstName: 'Masakali',
        lastName: 'Blocked',
        email: 'admin@masakaliretreat.com',
      };

      let res = await axios.post(
        'https://login.smoobu.com/api/reservations',
        body,
        reqConfig
      );
    }
  } catch (err) {
    console.error({
      data: err?.response?.data,
    });
  }
};

module.exports.updateBooking = async ({ smoobuId, startDate, endDate }) => {
  console.log('updateBooking');
  try {
    reqConfig.headers = {
      ...reqConfig.headers,
      'Content-Type': 'application/json',
    };
    let body = {
      arrivalDate: startDate,
      departureDate: endDate,
    };

    let res = await axios.put(
      `https://login.smoobu.com/api/reservations/${smoobuId}`,
      body,
      reqConfig
    );
  } catch (err) {
    console.error('error updateBooking', {
      data: err?.response?.data,
    });
  }
};

module.exports.cancelBooking = async ({ smoobuId }) => {
  console.log('cancelBooking');
  try {
    let res = await axios.delete(
      `https://login.smoobu.com/api/reservations/${smoobuId}`,
      reqConfig
    );
  } catch (err) {
    console.error('error cancelBooking', {
      data: err?.response?.data,
    });
  }
};
