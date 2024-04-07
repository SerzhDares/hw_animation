import heart from '../img/heart.png';

export default class Liker {
    constructor() {
        this.like = `<img src='${heart}' alt='like' class='like'>`;
    }

    init() {
        this.likeAppear();
    }

    likeAppear() {
        document.querySelector('.liker_button').addEventListener('click', () => {
            document.querySelector('.likes_container').insertAdjacentHTML('afterBegin', this.like);
            this.removeImg();
        })
    }

    removeImg() {
        document.querySelector('.like').addEventListener('animationend', e => {
            e.target.remove();
        })
    }
}