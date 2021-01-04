import Components from "../../libs/Components/Components.js";
import store from "../../libs/StateManagement/index.js";
import Fetcher from "../../libs/Fetcher/Fetcher.js";

export default class Pagination extends Components {
    constructor() {
        super({
            store,
            element: document.querySelector('.paginated')
        })
    }

    render() {
        const self = this;

        if (store.state.searchTerm !== '' && store.state.allSongs.length > 0) {
            self.element.innerHTML = `<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <!--<button class="btn btn-prev">Prev</button>-->
            <button class="btn btn-next">Load More</button>
        </div>`
        } else {
            self.element.innerHTML = `<div/>`
        }

        if (store.state.searchTerm !== '' && store.state.allSongs.length > 0){
            document.querySelector('.btn-next').addEventListener('click', () => {
                store.dispatch('setLoading')
                Fetcher(store.state.next)
                    .then((response) => {
                        console.log(response)
                        store.dispatch('setSongSearch', response.data.data)
                        store.dispatch('setPaginationItems', {
                            next: response.data.next,
                            prev: response.data.prev,
                            total: response.data.total
                        })
                    })
            })
        }
    }
}
