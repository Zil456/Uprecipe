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
    console.log('entry is ', entry);
    console.log('entry.name is ', entry.name);
    // console.log('req body name is', req.body[0].name);
    const newRecipe = await box.create({
      name: entry.name,
      ingredients: entry.ingredients,
      instructions: entry.instructions,
      // image: entry.image,
    });
    res.status = 201;
    res.send(newRecipe);
    console.log('newRecipe', newRecipe);
  } catch (err) {
    console.log(err);
    res.status = 500;
  }
};

module.exports = {
  getRecipes,
  addRecipe,
};
