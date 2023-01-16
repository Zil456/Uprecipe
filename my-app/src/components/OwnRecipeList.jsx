import '../App.css';
import OwnRecipe from './OwnRecipe';

function OwnRecipeList({ ownRecipesSorted }) {
  return (
    <div className='own-recipe-list'>
      <ul>
        {ownRecipesSorted.map((ownRecipe) => {
          return <OwnRecipe ownRecipe={ownRecipe} key={ownRecipe._id} />;
        })}
      </ul>
    </div>
  );
}

export default OwnRecipeList;
