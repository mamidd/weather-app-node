// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey it worked!');
//     reject('Unable fullfill promise');
//   }, 2500);
// });
//
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });

let asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Arguments must be numers.');
      }
    }, 2500);
  });
};

// Test case 1
// asyncAdd(5,7).then((res) => {
//   console.log('Result: ',res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });
//
// asyncAdd(undefined,7).then((res) => {
//   console.log('Result: ',res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });


// Test case 2
// asyncAdd(5,7).then((res) => {
//   console.log('Result: ',res);
//   return asyncAdd(res, 33);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((res) => {
//   console.log('Sould be 45: ',res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });


// Test case 3
// asyncAdd(5,7).then((res) => {
//   console.log('Result: ',res);
//   return asyncAdd(res, '33');
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((res) => {
//   console.log('Sould be 45: ',res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });


// Test case 4
// asyncAdd(5,'7').then((res) => {
//   console.log('Result: ',res);
//   return asyncAdd(res, 33);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((res) => {
//   console.log('Sould be 45: ',res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });


// Test case 5
asyncAdd(5,'7').then((res) => {
  console.log('Result: ',res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Sould be 45: ',res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
