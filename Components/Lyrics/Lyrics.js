import Components from "../../libs/Components/Components.js";
import store from "../../libs/StateManagement/index.js";

export default class Lyrics extends Components {
    constructor(){
        super({
            store,
            element: document.querySelector('.modal-main')
        });
    }

    render() {
        const self = this;
        if (store.state.viewLyrics !== null) {
            self.element.innerHTML = `<div class="modal" id="modal-name">
        <div class="modal-sandbox"></div>
        <div class="modal-box">
            <div class="modal-header">
                <div class="close-modal">&#10006;</div>
                <h1>${store.state.viewLyrics.title}</h1>
            </div>
            <div class="modal-body">
                <div style="white-space: pre-wrap">${store.state.viewLyrics.lyrics === '' ? 'No Lyrics Found' : store.state.viewLyrics.lyrics.replace(/(?:\\r\\n|\\r|\\n)/g, '<br>')}</div>
            </div>
        </div>
    </div>`
        } else {
            self.element.innerHTML = `<div></div>`
        }

        if (document.querySelector('.close-modal')) {
            document.querySelector('.close-modal').addEventListener('click', () => {
                store.dispatch('removeView')
            })
        }
    }
}
