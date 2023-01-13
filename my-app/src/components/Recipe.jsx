import React from 'react';
import { useState } from 'react';
import '../App.css';

export default function Recipe({ recipe }) {
  // console.log('Recipe below:');
  // console.log(recipeData[0].title);

  return (
    <div className='recipe'>
      <h2 className='recipe-title'>{recipe.title}</h2>
      <img className='recipe-img' src={recipe.image} alt='recipe' />
      <button className='explore-recipe'>Explore the recipe</button>
    </div>
  );
}
