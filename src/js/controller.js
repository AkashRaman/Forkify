
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

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

    //  4) Render initial Pagination buttons
    paginationView.render(model.state.search)
    
  } catch(err){
    resultsView.renderError(err.message);
  }
}

const controlPagination = (goToPage) => {
  // 1) Render Results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render Pagination buttons
  paginationView.render(model.state.search)
}

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}
init()
