const dev = process.env.NODE_ENV !== 'production';

export const clientUrl = dev
  ? 'http://localhost:3000/'
  : 'https://masakaliretreat.com/';

export const serverUrl = dev
  ? 'http://localhost:5000/api'
  : 'https://masakaliretreat.com/api';
