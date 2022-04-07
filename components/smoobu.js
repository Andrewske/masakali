import axios from 'axios';

let config = {
  headers: {
    'Api-Key': process.env.SMOOBU_API_KEY,
  },
};

export const getBookings = async () => {
  try {
    const res = await axios.get(
      'https://login.smoobu.com/api/reservations',
      config
    );
    console.log(res);
  } catch (err) {
    console.error({ err });
  }
};
