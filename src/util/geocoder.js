const NodeGeocoder = require('node-geocoder');
const keys= require('../config/key')
const options = {
  provider: keys.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  apiKey: keys.GeoCoderapi,
  formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;