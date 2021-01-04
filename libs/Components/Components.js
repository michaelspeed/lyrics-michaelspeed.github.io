import Store from "../StateManagement/Store.js";

export default class Components {
    constructor(props = {}) {
        let self = this;
        this.render = this.render || function() {};

        if(props.store instanceof Store) {
            props.store.events.subscribe('stateChange', () => self.render());
        }

        if(props.hasOwnProperty('element')) {
            this.element = props.element;
        }
    }
}
