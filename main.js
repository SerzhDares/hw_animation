(()=>{"use strict";(new class{constructor(){this.textField=document.querySelector(".text_field")}init(){document.querySelector(".button").addEventListener("click",(()=>{this.textField.classList.toggle("visible"),this.textField.classList.toggle("invisible")}))}}).init(),(new class{constructor(){this.chat=document.querySelector(".chat_window"),this.viewChatButton=document.querySelector(".view_chat_button")}init(){this.view_chat(),this.close_chat()}view_chat(){this.viewChatButton.addEventListener("click",(t=>{this.chat.classList.add("view_chat"),t.target.classList.add("hidden_chat")}))}close_chat(){document.querySelector(".chat_close_button").addEventListener("click",(()=>{this.chat.classList.remove("view_chat"),this.viewChatButton.classList.remove("hidden_chat")}))}}).init(),(new class{constructor(){this.like="<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWxJREFUeNrs1z9KA0EUx/HdJIaoRL1ALCxsvIaNN7A1Vga0jIWdeAYtRRtBIpbxD9opYmNhjqAgGJQUEYzR9fd0Fsbl7ezMJLMp4sKnm31fkp1hEz/wBnNlvP/w7zUBq3AKT0BP5BkuYAkK0tpRWIZLaIq1dM8JVKDIFoK/MrAOLQgUHmAeFuAxYe0rrIAvt6LRWsIQWVfQXb8bF64YDLFV5sJ3KYRvwp4vneN3yDvezC2Yiu7qTgqnKMsdp/sUwg0uXE8hfMad42n4cLixPmGG29Vkz2H4MO4ch5/6zUG0A7OqMFlzEN6Kdrgwne3zPkYbUNAJkxK89CHahjmuERf2xJun20P0Cxbj5qvCpNpDeFM1OylMti2itej71yZM7+l9gyhtzHzSXJ0wycKRRvQaxnRm6oY98SmOFdFbmNSdZxImOThgolcmUZtw+LXvSNE6jJvOsQmHNsQPuBGb+/2h+wuT+3lKA7i+BRgA/Up805zsZVkAAAAASUVORK5CYII=' alt='like' class='like'>"}init(){this.likeAppear()}likeAppear(){document.querySelector(".liker_button").addEventListener("click",(()=>{document.querySelector(".likes_container").insertAdjacentHTML("afterBegin",this.like),this.removeImg()}))}removeImg(){document.querySelector(".like").addEventListener("animationend",(t=>{t.target.remove()}))}}).init()})();