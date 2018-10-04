const request = require('request');
const yargs = require('yargs');

const mapQuestKey = require('../config/configs.js').mapQuestKey;

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

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key='+mapQuestKey+'&location='+encodedAddress,
  json: true
}, (error, response, body) => {
  if(error){
    console.log('Unable to connect for fetch address.');
  }else if(body.info.statuscode > 0){
    console.log('Unable to find that address');
  }else if(body){
    let loc = body.results[0].locations[0];
    console.log(`Address: ${loc.street}, ${loc.adminArea5} ${loc.postalCode}, ${loc.adminArea3}, ${loc.adminArea1}`);
    console.log(`Lat: ${loc.latLng.lat}`);
    console.log(`Lng: ${loc.latLng.lng}`);
  }
})
