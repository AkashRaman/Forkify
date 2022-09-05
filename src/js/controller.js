
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import {INITIAL_PAGINATION_PAGE} from './config.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if(module.hot) {
//   module.hot.accept();
// }

///////////////////////////////////////


const controlRecipes = async () => {
  try{
    const id = window.location.hash.slice(1);
    
    if(!id) return;
    
    // 0) Update results view
    
    resultsView.update(model.getSearchResultsPage())

    // 1) Loading recipe

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

    paginationView.loading();
    resultsView.renderSpinner();
    await model.loadSearchResults(query);

    // 3) Render Initial Results and Pagination button

    controlPagination(INITIAL_PAGINATION_PAGE);
    
  } catch(err){
    resultsView.renderError(err.message);
  }
}

const controlPagination = (goToPage) => {
  // 1) Render NEW Results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW Pagination buttons
  paginationView.render(model.state.search)
}

const controlServings = (newServings) => {
  //  Update Recipe Servings
  model.updateServings(newServings);
  const {recipe} = model.state;
  
  //  Update recipe view
  recipeView.update(recipe)

}

const controlAddBookmark = () => {
  const {recipe} = model.state;
  if(!recipe.bookmarked) model.addBookmark(recipe);
  else model.deleteBookmark(recipe.id);
  recipeView.update(recipe)
}

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}
init();
