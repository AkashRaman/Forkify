
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if(module.hot) {
//   module.hot.accept();
// }

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
  } catch(err){
    recipeView.renderError();
  }
}

const controlSearchResults = async () => {
  try {

    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;
    
    // 2) Load search results

    resultsView.renderSpinner();
    await model.loadSearchResults(query);

    // 3) Render Results
    resultsView.render(model.getSearchResultsPage());
  } catch(err){
    resultsView.renderError(err.message);
  }
}
controlSearchResults()

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init()
