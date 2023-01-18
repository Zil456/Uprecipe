import React from 'react';
import Recipe from './Recipe';
import '../App.css';

export default function RecipeList({ recipeData }) {
  return (
    <div className='recipe-list'>
      <ul>
        {recipeData.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </ul>
    </div>
  );
}
