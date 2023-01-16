const express = require('express');
const router = express.Router();
const recipe = require('./controllers/recipe');

router.get('/', (req, res) => {
  res.send('Hello World1');
});

router.get('/recipes', recipe.getRecipes);
router.post('/recipes', recipe.addRecipe);

module.exports = router;
