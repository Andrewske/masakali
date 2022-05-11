const dev = process.env.NODE_ENV !== 'production';
const url = window.location.origin.toString();

const regex = /(staging)/g;

export let serverUrl, clientUrl;

if (url.match(regex)) {
  clientUrl = 'https://staging.masakaliretreat.com/';
  serverUrl = 'https://staging.masakaliretreat.com/api';
} else {
  clientUrl = dev
    ? 'http://localhost:3000/'
    : 'https://www.masakaliretreat.com/';

  serverUrl = dev
    ? 'http://localhost:5000/api'
    : 'https://www.masakaliretreat.com/api';
}

export const percDiscount = 0.1;
