import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList'; /// public
import Nav from './components/Nav';
import AddRecipe from './components/AddRecipe';
import OwnRecipeList from './components/OwnRecipeList';
import { fetchRecipes } from './ApiService';

function App() {
  const [recipe, setRecipe] = useState(null);
  const [search, setSearch] = useState('');
  const [ownRecipes, setOwnRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then((data) => {
      setOwnRecipes(data);
    });
  }, [ownRecipes]);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const rapidApiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;
  const rapidApiHost = process.env.REACT_APP_X_RAPIDAPI_HOST;

  function getRecipe() {
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: { q: search },
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': rapidApiHost,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.hits);
        setRecipe(response.data.hits);
        console.log('search below:');
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className='App'>
      <Nav />
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
      {recipe ? <RecipeList recipeData={recipe} search={search} /> : null}
      <AddRecipe />
      <OwnRecipeList ownRecipesSorted={ownRecipes} />
    </div>
  );
}

export default App;
