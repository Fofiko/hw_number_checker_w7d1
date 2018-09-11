const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('NumberChecker:result-checked', (event) => {
    const isPrime = event.detail;
    this.displayResult(isPrime);
  });
};


ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
    if(result === true) {
      resultElement.textContent = `Yes! It's a prime number.`;
    };
    if(result === false) {
      resultElement.textContent = `No! It's not a prime number.`;
    };
};




module.exports = ResultView;
