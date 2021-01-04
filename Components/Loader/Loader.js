import store from '../../libs/StateManagement/index.js'
import Components from "../../libs/Components/Components.js";

export default class Loader extends Components {
    constructor() {
        super({
            store,
            element: document.querySelector('.app-loader')
        })
    }

    render() {
        const self = this;
        console.log(store.state)
        if (store.state.fetching) {
            self.element.innerHTML = `<div class="progressbar">
    <div class="stylization"></div>
  </div>`
        } else {
            self.element.innerHTML = `<div></div>`
        }
    }
}
