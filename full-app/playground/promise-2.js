const request = require('request');
const mapQuestKey = require('../../config/configs.js').mapQuestKey;

let geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let encodedAddress = encodeURIComponent(address);
    request({
      url: 'http://www.mapquestapi.com/geocoding/v1/address?key='+mapQuestKey+'&location='+encodedAddress,
      json: true
    }, (error, response, body) => {
      if(error){
        reject('Unable to connect for fetch address.');
      }else if(body.results[0].locations.length === 0){
        reject('Unable to find that address');
      }else if(body){
        let loc = body.results[0].locations[0];
        resolve({
          address: `${loc.street}, ${loc.adminArea5} ${loc.postalCode}, ${loc.adminArea3}, ${loc.adminArea1}`,
          latitude: loc.latLng.lat,
          longitude: loc.latLng.lng
        });
      }
    })
  })
};

geocodeAddress('Bari 70126').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});

geocodeAddress('lksjdflksjdlfkjsdlkfjsldkfjlksdfjlskdfjlskdfj').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
