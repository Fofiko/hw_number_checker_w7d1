const PubSub = require('../helpers/pub_sub.js');

const NumberChecker = function() {

};

NumberChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkNumber(inputtedNumber);
    PubSub.publish('NumberChecker:result-checked', result);
  });
};


NumberChecker.prototype.checkNumber = function (n) {
  // console.log('number is checked in number checker');
   // if n is less than 2 or not an integer then cannot be prime
   if (n < 2) {
     return false
   };
   if (n != Math.round(n)) {
     return false
   };
   // check every whole number from 2 to the square root of n
   // if any of those divides n exactly, n cannot be prime
   for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false
      };
   };
   // return whether n is prime or not
   return true;
};



module.exports = NumberChecker;
