const express = require('express');
const router = express.Router();
const recipe = require('./controllers/recipe');

router.get('/recipes', recipe.getRecipes);
router.post('/recipes', recipe.addRecipe);

router.get('/', (req, res) => {
  res.send('Hello World1');
});

module.exports = router;
