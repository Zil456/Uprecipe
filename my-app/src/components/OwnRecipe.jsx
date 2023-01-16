import '../App.css';

function OwnRecipe({ ownRecipe }) {
  return (
    <div className='own-recipe'>
      <div className='own-recipe-name'>
        <h1>{ownRecipe.name}</h1> <br />
      </div>
      <div className='own-ingredients'>
        <h2>Ingredients </h2>
        <p>{ownRecipe.ingredients}</p>
      </div>
      <div className='own-instructions'>
        <h2>Instructions</h2> <p>{ownRecipe.instructions}</p>
      </div>
    </div>
  );
}

export default OwnRecipe;
