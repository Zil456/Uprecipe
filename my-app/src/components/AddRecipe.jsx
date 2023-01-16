import '../App.css';
import { useState } from 'react';
import { createRecipe } from '../ApiService';

function AddRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  // const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !ingredients || !instructions) {
      alert('Information is missing!');
      return;
    }
    const response = await createRecipe({
      // this is the book object. In ApiService.js we have a function called createBook that takes in a book object as a parameter and it is named as bookObj in the function. So we are passing in the book object that we created here.
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      // image: image,
    });
    //console.log(response);

    setName('');
    setIngredients('');
    setInstructions('');
    // setImage('');
  };

  // function handleImage(e) {
  //   console.log(e.target.files[0]);
  //   setImage(e.target.files[0]);
  // }

  return (
    <div className='form-outer'>
      <h1 className='add-recipe-title'>Add Own Recipe</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-inputs'>
          <div className='field'>
            <label>
              name: <br />
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='field'>
            <label>
              ingredients: <br />
            </label>
            <input
              type='text'
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className='field'>
            <label>
              instructions:
              <br />
            </label>
            <input
              type='text'
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>
          {/* <div className='own-recipe-img'>
            <input
              type='file'
              // onChange={handleImage}
            />
            <button>Upload</button>
          </div> */}

          <button className='add-recipe-btn' type='submit'>
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
