console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(()=>{
  console.log('Inser 2nd timeout');
}, 0);

console.log('Finishing up');
