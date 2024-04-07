export default class Collapse {
    constructor() {
        this.textField = document.querySelector('.text_field');
    }

    init() {
        document.querySelector('.button').addEventListener('click', () => {
            this.textField.classList.toggle('visible');
            this.textField.classList.toggle('invisible');
        })
    }
}

