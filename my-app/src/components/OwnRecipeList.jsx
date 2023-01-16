import '../App.css';
import OwnRecipe from './OwnRecipe';

function OwnRecipeList({ ownRecipesSorted }) {
  // const bookTest = [
  //   {
  //     title: 'Hobbit',
  //     author_name: 'Martin',
  //     author_surname: 'Anonim',
  //     favorite: true,
  //   },
  //   {
  //     title: 'Learning React',
  //     author_name: 'Zilvinas',
  //     author_surname: 'Baltinas',
  //     favorite: true,
  //   },
  // ];

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
