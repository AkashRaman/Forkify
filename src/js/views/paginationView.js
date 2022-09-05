import View from './View.js';

class PaginationView extends View{

    // Variables
    _parentElement = document.querySelector('.pagination');
    _curPage;

    _generateMarkup() {
        this._curPage = this._data.page;
        const numPages = Math.ceil( this._data.results.length / this._data.resultsPerPage);
       
        // Page 1, and there are other pages
        if(this._curPage === 1 && numPages > 1) return this._generateNextBtn();

        // Last page
        if(this._curPage === numPages && numPages > 1) return this._generatePreviousBtn();

        // Other page
        if(this._curPage < numPages) return `${this._generatePreviousBtn()}${this._generateNextBtn()}`;

        return '';
        // Page 1, and there are NO other pages
    }

    _generatePreviousBtn() {
        return `
            <button class="btn--inline pagination__btn--prev" data-goto="${this._curPage - 1}">
                <svg class="search__icon">
                    <use href="${this.icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._curPage - 1}</span>
            </button>
        `
    }

    _generateNextBtn() {
        return `
            <button class="btn--inline pagination__btn--next" data-goto="${this._curPage + 1}">
                <span>Page ${this._curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${this.icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `
    }

    loading() {
        this._clear();
    }

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn--inline');
            
            if(!btn) return;
            
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        })
    }
}

export default new PaginationView();