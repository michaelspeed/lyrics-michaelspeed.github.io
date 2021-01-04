import Components from "../../libs/Components/Components.js";
import store from '../../libs/StateManagement/index.js'
import Fetcher from "../../libs/Fetcher/Fetcher.js";
import {LyricURL} from "../../utils/Globals.js";

export default class SongList extends Components {
    constructor() {
        super({
            store,
            element: document.querySelector('.song-container')
        })
    }

    render() {
        const self = this;

        self.element.innerHTML = `<div class="list-container-items">
            <div style="display: flex; justify-content: space-between; align-items: center; align-content: center;">
                <h2>${store.state.searchTerm !== '' ? `Searching for ${store.state.searchTerm}` : ''}</h2>
                <div class="clear-search" style="cursor: pointer">${store.state.searchTerm !== '' ? `&#10006;` :''}</div>
            </div>
            ${store.state.allSongs.map(song => {
            return `
                <div class="item-container">
                <div class="item">
                    <div class="item-preview">
                        <img src="${song.album ? song.album.cover : ''}" alt="${song.title}">
                    </div>
                    <div class="item-info">
                        <h2>${song.title}</h2>
                        <h4>${song.artist ? song.artist.name : 'Unknown'}</h4>
                        <button class="btn btn-rounded">Show Lyrics</button>
                    </div>
                </div>
            </div>
                `
        })}
        </div>`

        document.querySelector('.clear-search').addEventListener('click', () => {
            store.dispatch('removeView')
            store.dispatch('clearSearch')
        })

        self.element.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                console.log(store)
                const item = store.state.allSongs[index]
                if (store.state.allLyrics[item.id] ) {
                    store.dispatch('setView', store.state.allLyrics[item.id].newItem)
                } else {
                    Fetcher(`${LyricURL}/${item.artist.name}/${item.title}`)
                        .then(response => {
                            if (response.status === 200) {
                                const newItem = {
                                    lyrics: response.data.lyrics,
                                    ...item
                                }
                                if (response.data.lyrics !== '') {
                                    store.dispatch('addLyricsActions', {
                                        id: item.id,
                                        lyrics: response.data.lyrics,
                                        newItem
                                    })
                                }
                                store.dispatch('setView', newItem)
                            }
                        })
                }
            })
        })
    }
}
