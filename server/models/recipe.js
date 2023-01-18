const main = require('./index');
const mongoose = require('mongoose');
main();

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  instructions: String,
});

const Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe;
