import React from 'react';
import Recipe from './Recipe';
import '../App.css';

export default function RecipeList({ recipeData }) {
  console.log('RecipeList below:');
  console.log(recipeData[0].title);

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
