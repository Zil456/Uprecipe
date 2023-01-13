import React from 'react';
import '../App.css';

export default function Recipe({ recipe }) {
  return (
    <div className='recipe'>
      <h2 className='recipe-title'>{recipe.recipe.label}</h2>
      <img className='recipe-img' src={recipe.recipe.image} alt='recipe' />
      <a className='explore-recipe' target='_blank' href={recipe.recipe.url}>
        Explore the recipe
      </a>
    </div>
  );
}
