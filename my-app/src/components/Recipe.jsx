import React from 'react';
import { useState } from 'react';

export default function Recipe({ recipe }) {
  // console.log('Recipe below:');
  // console.log(recipeData[0].title);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt='recipe' />
    </div>
  );
}
