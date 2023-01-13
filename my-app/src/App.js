import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';

function App() {
  const [recipe, setRecipe] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getRecipe();
  }, []);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function getRecipe() {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      params: {
        query: search,
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
        console.log(response.data);
        //console log the nutrition

        console.log(response.data.results[0].nutrition);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className='App'>
      <div className='search'>
        <input
          type='text'
          placeholder='Enter recipe name'
          onChange={handleChange}
        />
        <button className='search-button' onClick={getRecipe}>
          Search
        </button>
      </div>
      {recipe ? <RecipeList recipeData={recipe} /> : null}
    </div>
  );
}

export default App;
