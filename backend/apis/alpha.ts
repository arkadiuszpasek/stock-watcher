const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://www.alphavantage.co/query',
});

module.exports = instance;
