const yargs = require('yargs');
const axios = require('axios');

const mapQuestKey = require('../config/configs.js').mapQuestKey;
const forecastKey = require('../config/configs.js').forecastKey;

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  let encodedAddress = encodeURIComponent(argv.address);
  let geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey}&location=${encodedAddress}`;

  axios.get(geocodeUrl).then((response) => {
    if (response.data.results[0].locations.length === 0 || response.data.results[0].locations[0].geocodeQualityCode === 'A1XAX'){
      throw new Error('Unable to find that address.');
    }
    let loc = response.data.results[0].locations[0];
    let latitude = loc.latLng.lat;
    let longitude = loc.latLng.lng;
    let weatherUrl = `https://api.darksky.net/forecast/${forecastKey}/${latitude},${longitude}`;
    console.log(`${loc.street}, ${loc.adminArea5} ${loc.postalCode}, ${loc.adminArea3}, ${loc.adminArea1}`);
    return axios.get(weatherUrl);
  }).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
  }).catch((e) => {
    if(e.code === 'ENOTFOUND'){
      console.log('Unable to connect to API servers.');
    }else{
      console.log(e.message);
    }
  });
