class SearchView {
    _parentEl = document.querySelector('.search');
    _inputFeild = this._parentEl.querySelector('.search__field');

    getQuery() {
        const query = this._inputFeild.value;
        this._clearInput()
        return query;
    }

    _clearInput() {
        this._inputFeild.value = ''
    }

    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', (e) => {
            e.preventDefault();
            handler();
        })
    }
}

export default new SearchView();