import previewView from './previewView';
import View from './View.js';

class BookmarksView extends View{

    // Variables

    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = '';
    _message = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

    // Rendering bookmarks

    render(data) {
        if(this._isNotData(data)) return this.renderMessage();
        super.render(data);
    };

    renderMessage(message = this._message) {
        const markup = this._generateMessage(message);
        this._clear();
        this._insert(markup);
    }

    // Generating html functions
    
    _generateMarkup() {
        return this._data.map(bookmark => previewView.render(bookmark, false), this).join();
    }

    _generateMessage(msg) {
        return `
        <div class="message">
          <div>
            <svg>
              <use href="${this.icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${msg}</p>
        </div>`
    }

    addHandlerRender(handler) {
        window.addEventListener('load',handler)
    }
}

export default new BookmarksView();