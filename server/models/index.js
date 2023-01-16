const mongoose = require('mongoose');

function main() {
  return mongoose.connect('mongodb://localhost:27017/allRecipes');
}

module.exports = main;
