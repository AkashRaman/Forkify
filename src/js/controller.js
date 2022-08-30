import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  try{
    const id = window.location.hash.slice(1);
    // 1) Loading recipe

    if(!id) return;

    recipeView.renderSpinner();
    
    await model.loadRecipe(id);

    const {recipe} = model.state;

    // 2) Rendering recipe

    recipeView.render(recipe)
  } catch(e){
    console.log(e)
  }
}

['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipes))
