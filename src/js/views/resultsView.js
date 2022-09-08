import previewView from './previewView';
import View from './View.js';

class ResultsView extends View{

    // Variables

    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipe found for your Query! Please try again ;)';
    _message = 'Start by searching for a recipe or an ingredient. Have fun!';

    // Generating html functions
    
    _generateMarkup() {
      return this._data.map(result => previewView.render(result, false)).join();
  }
}

export default new ResultsView();