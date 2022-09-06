import icons from 'url:../../img/icons.svg';

export default class View {

    // Variables

    _data;
    icons = icons;

    // Clearing Feild 
        
    _clear() {
        this._parentElement.innerHTML = '';
    };
        
    // Inserting html

    _insert(markup){
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }

    // Checking if data is not empty

    _isNotData(data) {
      return !data || (Array.isArray(data) && data.length === 0);
    }


    // Rendering Functions
        
    render(data, render = true, initialization = true) {
        if(initialization) {
          if(this._isNotData(data)) return this.renderError();
          this._data = data;
        }
        const markup = this._generateMarkup();
        
        if(!render) return markup;
        
        this._clear();
        this._insert(markup);
    };

    renderSpinner() {
        const markup = this._generateSpinner();
        this._clear();
        this._insert(markup);
    };

    renderError(message = this._errorMessage) {
        const markup = this._generateError(message);
        this._clear();
        this._insert(markup);
    }

    // Generating html function(s)

    _generateSpinner() {
        return `
        <div class="spinner">
        <svg>
            <use href="${this.icons}#icon-loader"></use>
        </svg>
        </div>
        `
    }
  
      _generateError(msg) {
        return `
        <div class="error">
          <div>
            <svg>
              <use href="${this.icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${msg}</p>
        </div>`
      }

      // Uppdating view

      update(data) {
        if(!data || (Array.isArray(data) && data.length === 0)) return;
        this._data = data;
        const newMarkup = this._generateMarkup();

        const newElements = Array.from(document.createRange().createContextualFragment(newMarkup).querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
          const curEl = curElements[i];

          // Updating changed element only
          if(newEl.isEqualNode(curEl)) return;

          // updating text
          if(newEl.firstChild?.nodeValue.trim() !== '') curEl.textContent = newEl.textContent;

          // Updating Attributes
          if(newEl.attributes !== curEl.attributes) Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
        })
      }
}