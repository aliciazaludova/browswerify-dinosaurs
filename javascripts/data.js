const loadDinos = require('./dinosaurs');
const printToDom = require('./dom');

let dinoArray = [];  // must be a let cuz reassign on line 6

const whenDinosLoad = function () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  printToDom(dinoArray);
};

const badDinos = function () {
  console.error('shit broke');
};

// in this file loadDino doesn't exist--pulling from dinosaurs.js
const initializer = () => {
  loadDinos(whenDinosLoad, badDinos);
};

// when the function gets called it's returning whatever the array is
const getDinos = () => {
  return dinoArray;
};

module.exports = {
  initializer,
  getDinos,
};
