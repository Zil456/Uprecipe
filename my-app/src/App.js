import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import Nav from './components/Nav';
import AddRecipe from './components/AddRecipe';
import Footer from './components/Footer';
import OwnRecipeList from './components/OwnRecipeList';
import { fetchRecipes } from './ApiService';

function App() {
  const [recipe, setRecipe] = useState(null);
  const [search, setSearch] = useState('');
  const [ownRecipes, setOwnRecipes] = useState([]);

  useEffect(() => {
    // getRecipe();

    fetchRecipes().then((data) => {
      setOwnRecipes(data);
    });
  }, [ownRecipes]);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function getRecipe() {
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: { q: search },
      headers: {
        'X-RapidAPI-Key': '2e30f99244msh0d636616df73d91p17c681jsncc8c7d07a70a',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
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

  //-------------OWN RECIPE PART----------------

  //-------------OWN RECIPE PART END----------------

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
