import '../App.css';
import { useState } from 'react';
import { createRecipe } from '../ApiService';

function AddRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !ingredients || !instructions) {
      alert('Information is missing!');
      return;
    }
    const response = await createRecipe({
      name: name,
      ingredients: ingredients,
      instructions: instructions,
    });

    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className='form-outer'>
      <h1 className='add-recipe-title'>Add Own Recipe</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-inputs'>
          <div className='field'>
            <label>
              Name: <br />
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='add-recipe-ingr-inst'>
            <div className='field'>
              <label>
                Ingredients: <br />
              </label>
              <textarea
                type='text'
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>
            <div className='field'>
              <label>
                Instructions:
                <br />
              </label>
              <textarea
                type='text'
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>
          </div>

          <button className='add-recipe-btn' type='submit'>
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
