import icons from 'url:../../img/icons.svg';

export default class View {
    // Variable(s)

    _data;

    // Clearing Feild 
        
    _clear() {
        this._parentElement.innerHTML = '';
    };
        
    // Inserting html

    _insert(markup){
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }

    // Rendering Functions
        
    render(data) {
        console.log(data);
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._insert(markup);
    };

    renderSpinner() {
        const markup = this._genrateSpinner();
        this._clear();
        this._insert(markup);
    };

    renderError(message = this._errorMessage) {
        const markup = this._generateError(message);
        this._clear();
        this._insert(markup);
    }

    renderMessage(message = this._message) {
        const markup = this._generateMessage(message);
        this._clear();
        this._insert(markup);
    }

    // Generating html function(s)

    _genrateSpinner() {
        return `
        <div class="spinner">
        <svg>
            <use href="${icons}#icon-loader"></use>
        </svg>
        </div>
        `
    }

    _generateMessage(msg) {
        return `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${msg}</p>
        </div>`
      }
  
      _generateError(msg) {
        return `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${msg}</p>
        </div>`
      }
}