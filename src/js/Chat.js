export default class Chat {
    constructor() {
        this.chat = document.querySelector('.chat_window');
        this.viewChatButton = document.querySelector('.view_chat_button');
    }

    init() {
        this.view_chat();
        this.close_chat();
    }

    view_chat() {
        this.viewChatButton.addEventListener('click', e => {
            this.chat.classList.add('view_chat');
            e.target.classList.add('hidden_chat');
        })
    }

    close_chat() {
        document.querySelector('.chat_close_button').addEventListener('click', () => {
            this.chat.classList.remove('view_chat');
            this.viewChatButton.classList.remove('hidden_chat');
        })
    }
}