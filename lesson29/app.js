const request = require('request');

const mapQuestKey = require('../config/configs.js').mapQuestKey;

// request({
//   url: 'http://www.mapquestapi.com/geocoding/v1/address?key='+mapQuestKey+'&location=1301%20lombard%20street%20philadelphia',
//   json: true
// }, (error, response, body) => {
//   console.log(JSON.stringify(body, undefined, 2));
// })

// request({
//   url: 'http://www.mapquestapi.com/geocoding/v1/address?key='+mapQuestKey+'&location=1301%20lombard%20street%20philadelphia',
//   json: true
// }, (error, response, body) => {
//   console.log(JSON.stringify(response, undefined, 2));
// })

// request({
//   url: 'http://wwpquestapi.com/geocoding/v1/address?key='+mapQuestKey+'&location=1301%20lombard%20street%20philadelphia',
//   json: true
// }, (error, response, body) => {
//   console.log(JSON.stringify(error, undefined, 2));
// })

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key='+mapQuestKey+'&location=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  let result = body.results[0];
  console.log(`Address: ${result.providedLocation.location}`);
  console.log(`Lat: ${result.locations[0].latLng.lat}`);
  console.log(`Lng: ${result.locations[0].latLng.lng}`);
})
