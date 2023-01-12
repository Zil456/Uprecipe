import './App.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';

function App() {
  const [recipe, setRecipe] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setRecipe(event.target.value);
  }

  function getRecipe() {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      params: {
        query: 'pasta',
        cuisine: 'italian',
        excludeCuisine: 'greek',
        diet: 'vegetarian',
      },
      headers: {
        'X-RapidAPI-Key': '6a14de4532msh62d6c9ee2479456p10a986jsn21992a974a79',
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setRecipe(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className='App'>
      <div className='first'>
        <input
          type='text'
          placeholder='Enter recipe name'
          onChange={handleChange}
        />
        <button onClick={getRecipe}>Search</button>
        {recipe ? (
          <p>
            <RecipeList recipeData={recipe} />
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
