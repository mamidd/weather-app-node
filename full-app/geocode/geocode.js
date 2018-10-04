const request = require('request');



let geocodeAddress =  (address, callback) => {
  let encodedAddress = encodeURIComponent(address);

  request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key='+mapQuestKey+'&location='+encodedAddress,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect for fetch address.');
    }else if(body.results[0].locations.length === 0){
      callback('Unable to find that address');
    }else if(body){
      let loc = body.results[0].locations[0];
      callback(undefined, {
        address: `${loc.street}, ${loc.adminArea5} ${loc.postalCode}, ${loc.adminArea3}, ${loc.adminArea1}`,
        latitude: loc.latLng.lat,
        longitude: loc.latLng.lng
      });
    }
  })
};

module.exports.geocodeAddress = geocodeAddress;
