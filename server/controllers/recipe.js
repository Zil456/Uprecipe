const box = require('../models/recipe');

const getRecipes = async (req, res) => {
  try {
    const entries = await box.find();
    res.status = 200;
    res.send(entries);
  } catch (err) {
    console.log(err);
    res.status = 500;
  }
};

const addRecipe = async (req, res) => {
  try {
    const entry = req.body.recipeObj;
    const newRecipe = await box.create({
      name: entry.name,
      ingredients: entry.ingredients,
      instructions: entry.instructions,
    });
    res.status = 201;
    res.send(newRecipe);
  } catch (err) {
    res.status = 500;
  }
};

module.exports = {
  getRecipes,
  addRecipe,
};
