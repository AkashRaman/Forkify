import previewView from './previewView';
import View from './View.js';

class BookmarksView extends View{

    // Variables

    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
    _message = '';

    // Generating html functions
    
    _generateMarkup() {
        return this._data.map(bookmark => previewView.render(bookmark, false), this).join();
    }

    addHandlerRender(handler) {
        window.addEventListener('load',handler)
    }
}

export default new BookmarksView();