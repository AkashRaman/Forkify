import View from './View.js';

class AddRecipeView extends View {

    constructor(){
        super()
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }

    // Variables

    _parentElement = document.querySelector('.upload');
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnCLose = document.querySelector('.btn--close-modal');

    // Function

    toggleWindow(element) {
        element.addEventListener('click', () => [this._overlay,this._window].forEach(el => el.classList.toggle('hidden')))
    }

    // Event Listener

    _addHandlerShowWindow() { this.toggleWindow(this._btnOpen) }

    _addHandlerHideWindow() { [this._btnCLose,this._overlay].forEach(el => this.toggleWindow(el))}
    
    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = Object.fromEntries([...new FormData(this._parentElement)]);
            handler(data);
        })
    }
}

export default new AddRecipeView();