import Components from "../../libs/Components/Components.js";
import store from '../../libs/StateManagement/index.js'
import Fetcher from "../../libs/Fetcher/Fetcher.js";

export default class Search extends Components {
    constructor() {
        super({
            store,
            element: document.querySelector('.app-background')
        });
    }

    render() {
        const self = this;
        self.element.innerHTML = `<div>
<div class="app-input-holder">
                <div class="form-group">
                    <input type="text" class="form-control search-input" placeholder="Search Song / Artist Name" value="${store.state.searchTerm}">
                </div>
                <button class="btn search-button">Search</button>
            </div>
</div>`

        document.querySelector('.search-button').addEventListener('click', async () => {
            const inputValue = document.querySelector('.search-input').value;
            await store.dispatch('setLoading')
            await store.dispatch('setSearchTerm', inputValue)
            // Make sure the loading is implied
            setTimeout(() => {
                Fetcher(`https://api.lyrics.ovh/suggest/${inputValue}`)
                    .then(response => {
                        const allSongs = response.data.data;
                        store.dispatch('clearInitialArray')
                        setTimeout(() => {
                            store.dispatch('setSongSearch', allSongs)
                            setTimeout(() => {
                                store.dispatch('setPaginationItems', {
                                    next: response.data.next,
                                    total: response.data.total
                                })
                            }, 100)
                        }, 100)
                    })
            }, 3000)
        })
    }
}
