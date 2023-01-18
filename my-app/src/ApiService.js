const API_URL = 'http://localhost:3020';

export const fetchRecipes = async () => {
  try {
    const response = await fetch(API_URL + '/recipes');
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = async (recipeObj) => {
  try {
    const response = await fetch(API_URL + '/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipeObj: recipeObj }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
