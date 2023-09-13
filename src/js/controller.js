
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
// import addRecipeView from './views/addRecipeView.js';
import { INITIAL_PAGE_NO , MODAL_CLOSE_SEC } from './config.js';

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
    
    // 0) Update View
    
    resultsView.update(model.getSearchResultsPage()) // Results update
    bookmarksView.update(model.state.bookmarks) // Bookmark update

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

    controlPagination(INITIAL_PAGE_NO);
    
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

const controlChangeBookmark = () => {
  const {recipe} = model.state;

  // 1) Add/Remove bookmarks
  if(!recipe.bookmarked) model.addBookmark(recipe);
  else model.deleteBookmark(recipe.id);

  //  2) updata recipe
  recipeView.update(recipe)

  // 3) render bookmarks
  bookmarksView.render(model.state.bookmarks)
}

const controBookmarks = () => bookmarksView.render(model.state.bookmarks);

// const controlAddRecipe = async (newRecipe) => {
//   try{
//     //  SHow loading spinner

//     addRecipeView.renderSpinner();

//     // Upload new Recipe
//     await model.uploadRecipe(newRecipe)
//     const {recipe} = model.state;

//     // render recipe
//     recipeView.render(recipe);

//     //Sucess Message
    
//     addRecipeView.renderMessage();

//     //  Render bookmark view

//     bookmarksView.render(model.state.bookmarks);

//     // Change ID into URL

//     window.history.pushState(null, '', `#${recipe.id}`);

//     // close form window
//     setTimeout(() => {
//       addRecipeView.toggleWindow()
//     }, MODAL_CLOSE_SEC * 1000)
//   } catch(err) {
//     addRecipeView.renderError(err.message)
//   }
// }

const init = () => {
  // loading data
  bookmarksView.addHandlerRender(controBookmarks)
  
  // event listeners
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerChangeBookmark(controlChangeBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  // addRecipeView.addHandlerUpload(controlAddRecipe);
}
init();
