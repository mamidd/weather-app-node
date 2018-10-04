const request = require('request');

// const googleApiKey = require('../config/configs.js').googleApiKey;
// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?key='+googleApiKey+'&address=1301%20lombard%20street%20philadelphia',
//   json: true
// }, (error, response, body) => {
//   console.log(body);
// })

const mapQuestKey = require('../config/configs.js').mapQuestKey;
request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key='+mapQuestKey+'&location=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(body.results[0].locations[0]);
  console.log(body.results[0].locations[0].latLng.lat);
  console.log(body.results[0].locations[0].latLng.lng);
})
