export default {
    setViewLyrics(state, payload) {
        state.viewLyrics = payload;
        return state;
    },
    removeViewLyrics(state, payload) {
        state.viewLyrics = null;
        return state;
    },
    async setSongSearch(state, payload) {
        for (const item of payload) {
            state.allSongs.push(item);
        }
        state.fetching = false;
        return state;
    },
    clearSongSearch(state, payload) {
        state.allSongs = [];
        state.searchTerm = '';
        return state;
    },
    setLoading(state) {
        state.fetching = true;
        return state;
    },
    setSearch(state, payload) {
        state.searchTerm = payload;
        return state;
    },
    setPagination(state, payload) {
        state.prev = payload.prev ? payload.prev : '';
        state.next = payload.next ? payload.next : '';
        state.total= payload.total
        return state;
    },
    clearInitial(state, payload) {
        state.allSongs = []
        return state;
    },
    addLyrics(state, payload) {
        state.allLyrics[payload.id] = payload;
        return state;
    }
}
