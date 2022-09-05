import View from './View.js';

class ResultsView extends View{

    // Variables

    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipe found for your Query! Please try again ;)';
    _message = 'Start by searching for a recipe or an ingredient. Have fun!';
    _recipeId;

    // Generating html functions
    
    _generateMarkup() {
        this._recipeId = window.location.hash.slice(1);
        return this._data.map(this._generateMarkupPreview, this).join();
    }

    _generateMarkupPreview(result) {
        return `
        <li class="preview">
            <a class="preview__link ${result.id === this._recipeId ? 'preview__link--active': ''}" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
              </div>
            </a>
          </li>
        `
    }
}

export default new ResultsView();