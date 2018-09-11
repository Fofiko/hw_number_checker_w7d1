const FormView = require('./views/form_view.js');
const NumberChecker = require('./models/number_checker.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const formView = new FormView();
  formView.bindEvents();

  const numberChecker = new NumberChecker();
  numberChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents(); 
});
