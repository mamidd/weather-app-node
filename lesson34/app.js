// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
//   geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//       console.log(errorMessage);
//     } else {
//       console.log(JSON.stringify(results, undefined, 2));
//     }
//   });

const request = require('request');
request({
  url: ' https://api.darksky.net/forecast/7cd61302f6897b4e192b894ecdf132ed/41.090149,16.914459',
  json: true
}, (error, response, body) => {
  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature);
  }else{
    console.log('Unable to fetch weather.');
  }
})
